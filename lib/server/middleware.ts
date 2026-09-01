import { NextRequest, NextResponse } from 'next/server'

const PUBLIC_PATHS = ['/login', '/signup', '/api/auth/login', '/api/auth/signup', '/api/public', '/']
const JWT_SECRET = process.env.JWT_SECRET ?? 'CHANGE_THIS_SECRET'

function base64urlToUint8Array(base64Url: string) {
  const padding = '='.repeat((4 - (base64Url.length % 4)) % 4)
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/') + padding
  const raw = atob(base64)
  const buffer = new Uint8Array(raw.length)

  for (let i = 0; i < raw.length; i += 1) {
    buffer[i] = raw.charCodeAt(i)
  }

  return buffer
}

function decodeBase64url(base64Url: string) {
  const bytes = base64urlToUint8Array(base64Url)
  return new TextDecoder().decode(bytes)
}

async function verifyJwt(token: string) {
  const parts = token.split('.')
  if (parts.length !== 3) {
    throw new Error('Invalid token format')
  }

  const [headerB64, payloadB64, signatureB64] = parts
  const headerJson = JSON.parse(decodeBase64url(headerB64))
  if (headerJson.alg !== 'HS256') {
    throw new Error('Unsupported JWT algorithm')
  }

  const data = new TextEncoder().encode(`${headerB64}.${payloadB64}`)
  const key = new TextEncoder().encode(JWT_SECRET)
  const cryptoKey = await crypto.subtle.importKey('raw', key, { name: 'HMAC', hash: 'SHA-256' }, false, ['verify'])
  const signature = base64urlToUint8Array(signatureB64)
  const valid = await crypto.subtle.verify('HMAC', cryptoKey, signature, data)

  if (!valid) {
    throw new Error('Invalid token signature')
  }

  return JSON.parse(decodeBase64url(payloadB64))
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  if (PUBLIC_PATHS.some((path) => pathname.startsWith(path))) {
    return NextResponse.next()
  }

  const token = request.cookies.get('auth_token')?.value
  if (!token) {
    const redirectUrl = request.nextUrl.clone()
    redirectUrl.pathname = '/login'
    return NextResponse.redirect(redirectUrl)
  }

  try {
    await verifyJwt(token)
    return NextResponse.next()
  } catch {
    const redirectUrl = request.nextUrl.clone()
    redirectUrl.pathname = '/login'
    return NextResponse.redirect(redirectUrl)
  }
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)']
}
