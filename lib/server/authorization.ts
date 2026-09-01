import { NextRequest } from 'next/server'
import { getUserFromRequest } from './session'

export async function guardRoles(request: NextRequest, allowedRoles: string[]) {
  const user = await getUserFromRequest(request)
  if (!user || !allowedRoles.includes(user.role.name)) {
    return null
  }
  return user
}
