import { NextRequest, NextResponse } from 'next/server'
import { EmployeeStatus } from '@prisma/client'
import { prisma } from '@/lib/server/db'
import { getUserFromRequest, requireRole } from '@/lib/server/session'

export async function POST(request: NextRequest) {
  const user = await getUserFromRequest(request)
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    requireRole(user, ['CEO', 'Manager'])
  } catch {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const body = await request.json()
  const { employeeId, approve, reason } = body

  if (!employeeId || approve === undefined) {
    return NextResponse.json({ error: 'Missing approval details' }, { status: 400 })
  }

  const employee = await prisma.employee.findUnique({ where: { employeeId } })
  if (!employee) {
    return NextResponse.json({ error: 'Employee not found' }, { status: 404 })
  }

  const status: EmployeeStatus = approve ? 'ACTIVE' : 'INACTIVE'
  await prisma.employee.update({ where: { employeeId }, data: { status } })

  await prisma.approval.create({
    data: {
      entityType: 'Employee',
      entityId: employee.id,
      status: approve ? 'APPROVED' : 'REJECTED',
      requestedById: user.employeeId ?? null,
      approvedById: user.employeeId ?? null,
      reason
    }
  })

  await prisma.auditLog.create({
    data: {
      userId: user.id,
      entityType: 'Employee',
      entityId: employee.id,
      action: approve ? 'Employee approved' : 'Employee rejected',
      reason
    }
  })

  return NextResponse.json({ success: true, status })
}
