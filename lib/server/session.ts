import type { User } from '@prisma/client'
import { NextRequest } from 'next/server'
import { prisma } from './db'
import { verifyToken } from './auth'

export async function getUserFromRequest(request: NextRequest): Promise<(User & { role: { name: string }; customer?: any; employee?: any }) | null> {
  const token = request.cookies.get('auth_token')?.value
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

export function requireRole(user: { role: { name: string } } | null, allowedRoles: string[]) {
  if (!user || !allowedRoles.includes(user.role.name)) {
    throw new Error('Unauthorized')
  }
}
