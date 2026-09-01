import { cookies } from 'next/headers'
import { prisma } from './db'
import { verifyToken } from './auth'

export async function getCurrentUser() {
  const token = cookies().get('auth_token')?.value
  if (!token) return null

  try {
    const payload = verifyToken(token)
    return prisma.user.findUnique({
      where: { id: payload.userId },
      include: { role: true, customer: true, employee: true }
    })
  } catch {
    return null
  }
}
