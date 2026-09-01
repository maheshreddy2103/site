const { PrismaClient } = require('@prisma/client')

;(async function() {
  const prisma = new PrismaClient()
  try {
    const users = await prisma.user.findMany()
    console.log('seeded users count:', users.length)
    console.log(users.map(u => ({ id: u.id, email: u.email })))
  } catch (e) {
    console.error('check failed', e)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
})()
