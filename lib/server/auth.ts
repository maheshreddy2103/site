import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { prisma } from './db'

const JWT_SECRET = process.env.JWT_SECRET ?? 'CHANGE_THIS_SECRET'
const JWT_EXPIRES_IN = '7d'

export async function hashPassword(password: string) {
  return bcrypt.hash(password, 12)
}

export async function verifyPassword(password: string, hash: string) {
  return bcrypt.compare(password, hash)
}

export function signToken(payload: Record<string, any>) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN })
}

export function verifyToken(token: string) {
  return jwt.verify(token, JWT_SECRET) as { userId: string; role: string }
}

export async function findUserByEmail(email: string) {
  return prisma.user.findUnique({
    where: { email },
    include: { role: true, customer: true, employee: true }
  })
}

export async function findUserByMobile(mobile: string) {
  return prisma.user.findUnique({
    where: { mobile },
    include: { role: true, customer: true, employee: true }
  })
}
