const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

async function main() {
  const roles = [
    { name: 'CEO', description: 'Executive leadership' },
    { name: 'Manager', description: 'Branch and department manager' },
    { name: 'Support', description: 'Customer support executive' },
    { name: 'Customer', description: 'Member customer' }
  ]

  for (const role of roles) {
    await prisma.role.upsert({
      where: { name: role.name },
      update: {},
      create: role
    })
  }

  const roleCustomer = await prisma.role.findUnique({ where: { name: 'Customer' } })
  const roleCEO = await prisma.role.findUnique({ where: { name: 'CEO' } })
  const roleManager = await prisma.role.findUnique({ where: { name: 'Manager' } })
  const roleSupport = await prisma.role.findUnique({ where: { name: 'Support' } })

  const passwordHash = await bcrypt.hash('DemoPass123!', 12)

  const branch = await prisma.branch.upsert({
    where: { name: 'Lakshmi Central' },
    update: {},
    create: {
      name: 'Lakshmi Central',
      address: '123 Heritage Lane',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400001',
      phone: '+91 22 1234 5678',
      email: 'central@brand.com'
    }
  })

  const department = await prisma.department.upsert({
    where: { name: 'Operations' },
    update: {},
    create: { name: 'Operations' }
  })

  await prisma.employee.upsert({
    where: { employeeId: 'EMP-CEO-001' },
    update: {},
    create: {
      employeeId: 'EMP-CEO-001',
      firstName: 'Radhika',
      lastName: 'Sharma',
      email: 'ceo@brand.com',
      mobile: '+919876543210',
      designation: 'CEO',
      status: 'ACTIVE',
      branchId: branch.id,
      departmentId: department.id
    }
  })

  await prisma.user.upsert({
    where: { email: 'ceo@brand.com' },
    update: {},
    create: {
      email: 'ceo@brand.com',
      mobile: '+919876543210',
      passwordHash,
      roleId: roleCEO && roleCEO.id
    }
  })

  const customer = await prisma.customer.upsert({
    where: { email: 'demo.customer@brand.com' },
    update: {},
    create: {
      customerId: 'CUST-1001',
      membershipId: 'MEM-1001',
      firstName: 'Ananya',
      lastName: 'Patel',
      email: 'demo.customer@brand.com',
      mobile: '+919999888777',
      dateOfBirth: new Date('1992-08-15'),
      address: '7 Lotus Street',
      city: 'Ahmedabad',
      state: 'Gujarat',
      pincode: '380015',
      nomineeName: 'Rita Patel',
      nomineeRelation: 'Mother',
      kycStatus: 'VERIFIED'
    }
  })

  await prisma.user.upsert({
    where: { email: 'demo.customer@brand.com' },
    update: {},
    create: {
      email: 'demo.customer@brand.com',
      mobile: '+919999888777',
      passwordHash,
      roleId: roleCustomer && roleCustomer.id,
      customerId: customer.id
    }
  })

  await prisma.membershipPlan.upsert({
    where: { name: 'Prime Platinum' },
    update: {},
    create: {
      name: 'Prime Platinum',
      durationMonths: 12,
      interestRate: 0,
      minProductValue: 8000,
      maxProductValue: 20000,
      terms: 'Standard 12-month membership with transparent EMI schedule.'
    }
  })

  const plan = await prisma.membershipPlan.findUnique({ where: { name: 'Prime Platinum' } })

  const product = await prisma.product.upsert({
    where: { sku: 'TV-001' },
    update: {},
    create: {
      sku: 'TV-001',
      name: 'Regal Smart LED TV',
      brand: 'Lakshmi Electronics',
      description: 'Premium 43-inch smart LED television with warranty and membership eligibility.',
      price: 12000,
      stock: 25,
      warranty: '2 years',
      features: 'Smart display, HD streaming, premium audio',
      category: {
        connectOrCreate: {
          where: { name: 'Electronics' },
          create: { name: 'Electronics' }
        }
      }
    }
  })

  await prisma.membership.upsert({
    where: { membershipId: 'MEM-1001' },
    update: {},
    create: {
      membershipId: 'MEM-1001',
      customerId: customer.id,
      planId: plan && plan.id,
      productId: product.id,
      startDate: new Date('2024-01-10'),
      endDate: new Date('2024-12-10'),
      installments: 12,
      monthlyAmount: 1000,
      totalAmount: 12000,
      paidAmount: 4000,
      remainingAmount: 8000,
      status: 'ACTIVE'
    }
  })

  const rewardCampaign = await prisma.rewardCampaign.upsert({
    where: { name: 'Milestone Rewards 2024' },
    update: {},
    create: {
      name: 'Milestone Rewards 2024',
      description: 'Reward members for consistent EMI payments and membership completion milestones.',
      startDate: new Date('2024-01-01'),
      endDate: new Date('2024-12-31'),
      status: 'ACTIVE',
      eligibility: { minPayments: 6, category: 'milestone' },
      rewardDetails: { type: 'points', amount: 500 },
      totalRewards: 250
    }
  })

  await prisma.auditLog.create({
    data: {
      userId: (await prisma.user.findUnique({ where: { email: 'ceo@brand.com' } })).id,
      entityType: 'Membership',
      entityId: 'MEM-1001',
      action: 'Seed initialized demo membership',
      newValue: { status: 'ACTIVE' }
    }
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
