export const dynamic = 'force-dynamic'

import { NextResponse } from 'next/server'
import { prisma } from '@/lib/server/db'

export async function GET() {
  const products = await prisma.product.findMany({
    take: 20,
    select: {
      id: true,
      sku: true,
      name: true,
      brand: true,
      price: true,
      warranty: true,
      stock: true,
      description: true
    }
  })
  return NextResponse.json({ products })
}
