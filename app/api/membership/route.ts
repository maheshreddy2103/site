export const dynamic = 'force-dynamic'

import { NextResponse } from 'next/server'
import { prisma } from '@/lib/server/db'

export async function GET() {
  const memberships = await prisma.membership.findMany({
    select: {
      membershipId: true,
      startDate: true,
      endDate: true,
      installments: true,
      monthlyAmount: true,
      totalAmount: true,
      paidAmount: true,
      remainingAmount: true,
      status: true,
      product: {
        select: {
          name: true,
          brand: true,
          price: true
        }
      }
    }
  })
  return NextResponse.json({ memberships })
}
