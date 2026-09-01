import { NextResponse } from 'next/server'
import { prisma } from '@/lib/server/db'

export async function POST(request: Request) {
  const body = await request.json()
  const { userId, entityType, entityId, action, oldValue, newValue, reason, ipAddress, userAgent } = body

  if (!userId || !entityType || !entityId || !action) {
    return NextResponse.json({ error: 'Missing audit fields' }, { status: 400 })
  }

  const audit = await prisma.auditLog.create({
    data: {
      userId,
      entityType,
      entityId,
      action,
      oldValue,
      newValue,
      reason,
      ipAddress,
      userAgent
    }
  })

  return NextResponse.json({ audit })
}
