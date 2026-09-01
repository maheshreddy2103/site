import { NextRequest, NextResponse } from 'next/server'
import { findUserByEmail, verifyPassword, signToken } from '@/lib/server/auth'

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { email, password } = body

  if (!email || !password) {
    return NextResponse.json({ error: 'Email and password are required' }, { status: 400 })
  }

  const user = await findUserByEmail(email)
  if (!user) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
  }

  const valid = await verifyPassword(password, user.passwordHash)
  if (!valid) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
  }

  const token = signToken({ userId: user.id, role: user.role.name })
  const response = NextResponse.json({ success: true, role: user.role.name })
  response.cookies.set('auth_token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/'
  })
  return response
}
