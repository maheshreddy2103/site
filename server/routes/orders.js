import express from 'express'
import { Order } from '../models/Order.js'
import { authenticate } from '../middleware/auth.js'

const router = express.Router()

// GET /api/orders/my - Get user orders
router.get('/my', authenticate, async (req, res) => {
  try {
    const customerId = req.user.customerId
    const orders = await Order.find({ customer: customerId })
      .populate('product')
      .populate('membership')
      .sort({ createdAt: -1 })

    return res.json({ success: true, count: orders.length, orders })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

export default router
