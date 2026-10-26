import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/server/db'
import { hashPassword, signToken } from '@/lib/server/auth'

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { firstName, lastName, email, mobile, password, dateOfBirth, address, city, state, pincode, nomineeName, nomineeRelation } = body

  if (!firstName || !lastName || !email || !mobile || !password || !dateOfBirth || !address || !city || !state || !pincode) {
    return NextResponse.json({ error: 'Required fields are missing' }, { status: 400 })
  }

  const existingUser = await prisma.user.findFirst({ where: { OR: [{ email }, { mobile }] } })
  if (existingUser) {
    return NextResponse.json({ error: 'Email or mobile already registered' }, { status: 409 })
  }

  const passwordHash = await hashPassword(password)
  const timestamp = Date.now()

  const customer = await prisma.customer.create({
    data: {
      customerId: `CUST-${timestamp}`,
      membershipId: `MEM-${timestamp}`,
      firstName,
      lastName,
      email,
      mobile,
      dateOfBirth: new Date(dateOfBirth),
      address,
      city,
      state,
      pincode,
      nomineeName,
      nomineeRelation,
      kycStatus: 'PENDING'
    }
  })

  const role = await prisma.role.findUnique({ where: { name: 'Customer' } })
  if (!role) {
    return NextResponse.json({ error: 'Customer role is not configured' }, { status: 500 })
  }

  const user = await prisma.user.create({
    data: {
      email,
      mobile,
      passwordHash,
      roleId: role.id,
      customerId: customer.id
    }
  })

  const token = signToken({ userId: user.id, role: role.name })
  const response = NextResponse.json({ success: true, role: role.name })
  response.cookies.set('auth_token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/'
  })
  return response
}
