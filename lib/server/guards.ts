import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { verifyToken } from './auth'

export function getUserRoleFromCookie() {
  const token = cookies().get('auth_token')?.value
  if (!token) return null

  try {
    const payload = verifyToken(token)
    return payload.role as string
  } catch {
    return null
  }
}

export function requireRoleLayout(allowedRoles: string[]) {
  const role = getUserRoleFromCookie()
  if (!role || !allowedRoles.includes(role)) {
    redirect('/login')
  }
  return role
}
