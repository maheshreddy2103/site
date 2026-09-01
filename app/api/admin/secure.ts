import { NextResponse } from 'next/server'
import { guardRoles } from '@/lib/server/authorization'

export async function GET(request: Request) {
  const nextRequest = request as any as import('next/server').NextRequest
  const user = await guardRoles(nextRequest, ['CEO', 'Manager'])
  if (!user) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }
  return NextResponse.json({ message: 'Access granted', role: user.role.name })
}
