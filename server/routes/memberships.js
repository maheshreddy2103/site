import express from 'express'
import { Membership } from '../models/Membership.js'
import { Product } from '../models/Product.js'
import { Customer } from '../models/Customer.js'
import { Payment } from '../models/Payment.js'
import { Order } from '../models/Order.js'
import { authenticate } from '../middleware/auth.js'

const router = express.Router()

// POST /api/memberships - Enroll in savings plan
router.post('/', authenticate, async (req, res) => {
  try {
    const { productSku, tenureMonths, planName } = req.body
    const customerId = req.user.customerId

    if (!customerId) {
      return res.status(400).json({ error: 'Customer profile required for membership enrollment' })
    }

    const product = await Product.findOne({ sku: productSku })
    if (!product) {
      return res.status(404).json({ error: 'Product not found' })
    }

    const months = parseInt(tenureMonths) || 12
    const monthlyAmount = Math.round(product.price / months)
    const timestamp = Date.now()

    // Generate equal monthly EMI schedule
    const emiSchedules = []
    const now = new Date()
    for (let i = 1; i <= months; i++) {
      const dueDate = new Date(now)
      dueDate.setMonth(dueDate.getMonth() + i)
      emiSchedules.push({
        installmentNumber: i,
        dueDate,
        amount: monthlyAmount,
        status: 'PENDING'
      })
    }

    const endDate = new Date(now)
    endDate.setMonth(endDate.getMonth() + months)

    const membership = await Membership.create({
      membershipId: `MEM-${timestamp}`,
      customer: customerId,
      product: product._id,
      planName: planName || `${months}-Month FinTech Plan`,
      tenureMonths: months,
      monthlyAmount,
      totalAmount: product.price,
      paidAmount: 0,
      completedInstallments: 0,
      status: 'ACTIVE',
      emiSchedules,
      endDate
    })

    // Create tracking order in progress
    await Order.create({
      orderId: `ORD-${timestamp}`,
      customer: customerId,
      product: product._id,
      membership: membership._id,
      status: 'PAYMENT_IN_PROGRESS',
      fulfillmentMethod: 'DOORSTEP_DELIVERY',
      officialWarrantyCode: `WAR-${timestamp}`
    })

    return res.status(201).json({ success: true, membership })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

// GET /api/memberships/my - Get customer memberships
router.get('/my', authenticate, async (req, res) => {
  try {
    const customerId = req.user.customerId
    const memberships = await Membership.find({ customer: customerId }).populate('product')
    return res.json({ success: true, count: memberships.length, memberships })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

// POST /api/memberships/:id/pay - Pay an EMI installment
router.post('/:id/pay', authenticate, async (req, res) => {
  try {
    const { installmentNumber, paymentMethod } = req.body
    const membership = await Membership.findById(req.params.id).populate('product')

    if (!membership) {
      return res.status(404).json({ error: 'Membership not found' })
    }

    const schedule = membership.emiSchedules.find((s) => s.installmentNumber === parseInt(installmentNumber))
    if (!schedule) {
      return res.status(404).json({ error: 'Installment number not found' })
    }

    if (schedule.status === 'SUCCESS') {
      return res.status(400).json({ error: 'Installment already cleared' })
    }

    const txId = `TXN-${Date.now()}`
    schedule.status = 'SUCCESS'
    schedule.paidAt = new Date()
    schedule.transactionId = txId

    membership.paidAmount += schedule.amount
    membership.completedInstallments += 1

    if (membership.completedInstallments === membership.tenureMonths) {
      membership.status = 'COMPLETED'
      // Update order status to ready
      await Order.findOneAndUpdate({ membership: membership._id }, { status: 'READY_FOR_PICKUP' })
    }

    await membership.save()

    // Record Payment
    await Payment.create({
      transactionId: txId,
      customer: membership.customer,
      membership: membership._id,
      amount: schedule.amount,
      paymentMethod: paymentMethod || 'UPI',
      status: 'SUCCESS'
    })

    return res.json({ success: true, message: `Installment #${installmentNumber} paid successfully`, membership })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

export default router
