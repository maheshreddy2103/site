import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/server/db'

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { firstName, lastName, email, mobile, password, departmentName, branchName, designation, reportingToEmail } = body

  if (!firstName || !lastName || !email || !mobile || !password || !departmentName || !branchName || !designation) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const existingUser = await prisma.user.findFirst({ where: { OR: [{ email }, { mobile }] } })
  const existingEmployee = await prisma.employee.findFirst({ where: { OR: [{ email }, { mobile }] } })
  if (existingUser || existingEmployee) {
    return NextResponse.json({ error: 'Employee email or mobile already exists' }, { status: 409 })
  }

  const department = await prisma.department.upsert({
    where: { name: departmentName },
    update: {},
    create: { name: departmentName }
  })

  const branch = await prisma.branch.upsert({
    where: { name: branchName },
    update: {},
    create: {
      name: branchName,
      address: 'Pending branch address',
      city: 'TBD',
      state: 'TBD',
      pincode: '000000',
      phone: '+91 00000 00000',
      email: 'branch@brand.com'
    }
  })

  const reportingTo = reportingToEmail ? await prisma.employee.findUnique({ where: { email: reportingToEmail } }) : null

  const employee = await prisma.employee.create({
    data: {
      employeeId: `EMP-${Date.now()}`,
      firstName,
      lastName,
      email,
      mobile,
      designation,
      status: 'PENDING_APPROVAL',
      departmentId: department.id,
      branchId: branch.id,
      reportingToId: reportingTo?.id
    }
  })

  const passwordHash = await import('@/lib/server/auth').then((mod) => mod.hashPassword(password))
  const defaultRole = await prisma.role.findUnique({ where: { name: 'Support' } })
  if (!defaultRole) {
    return NextResponse.json({ error: 'Default support role is missing' }, { status: 500 })
  }

  const user = await prisma.user.create({
    data: {
      email,
      mobile,
      passwordHash,
      roleId: defaultRole.id,
      employeeId: employee.id
    }
  })

  return NextResponse.json({ success: true, employeeId: employee.employeeId, userId: user.id })
}
