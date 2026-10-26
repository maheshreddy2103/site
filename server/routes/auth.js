import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { User } from '../models/User.js'
import { Customer } from '../models/Customer.js'
import { authenticate } from '../middleware/auth.js'

const router = express.Router()
const JWT_SECRET = process.env.JWT_SECRET || 'savenbuy-super-secure-jwt-token-2026'

// POST /api/auth/signup - Register new member
router.post('/signup', async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      mobile,
      password,
      dateOfBirth,
      address,
      city,
      state,
      pincode,
      nomineeName,
      nomineeRelation
    } = req.body

    if (!firstName || !lastName || !email || !mobile || !password) {
      return res.status(400).json({ error: 'Required fields missing: firstName, lastName, email, mobile, password' })
    }

    // Check existing
    const existing = await User.findOne({ $or: [{ email: email.toLowerCase() }, { mobile }] })
    if (existing) {
      return res.status(409).json({ error: 'Email or mobile number already registered' })
    }

    const timestamp = Date.now()
    const customer = await Customer.create({
      customerId: `CUST-${timestamp}`,
      membershipId: `MEM-${timestamp}`,
      firstName,
      lastName,
      email: email.toLowerCase(),
      mobile,
      dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : new Date('2000-01-01'),
      address: address || 'Registered Address',
      city: city || 'City',
      state: state || 'State',
      pincode: pincode || '000000',
      nomineeName,
      nomineeRelation,
      kycStatus: 'PENDING'
    })

    const passwordHash = await bcrypt.hash(password, 12)
    const user = await User.create({
      email: email.toLowerCase(),
      mobile,
      passwordHash,
      role: 'Customer',
      customerId: customer._id
    })

    const token = jwt.sign(
      { userId: user._id, role: user.role, email: user.email, customerId: customer._id },
      JWT_SECRET,
      { expiresIn: '7d' }
    )

    return res.status(201).json({
      success: true,
      token,
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
        firstName: customer.firstName,
        lastName: customer.lastName,
        membershipId: customer.membershipId
      }
    })
  } catch (error) {
    console.error('Signup error:', error)
    return res.status(500).json({ error: error.message || 'Internal server error during registration' })
  }
})

// POST /api/auth/login - Member & Executive Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' })
    }

    const user = await User.findOne({ email: email.toLowerCase() }).populate('customerId')
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials. User not found.' })
    }

    const isMatch = await user.verifyPassword(password)
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials. Password incorrect.' })
    }

    const token = jwt.sign(
      { userId: user._id, role: user.role, email: user.email, customerId: user.customerId?._id },
      JWT_SECRET,
      { expiresIn: '7d' }
    )

    return res.json({
      success: true,
      token,
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
        customer: user.customerId
      }
    })
  } catch (error) {
    console.error('Login error:', error)
    return res.status(500).json({ error: error.message || 'Internal server error during authentication' })
  }
})

// GET /api/auth/me - Get Current Session Profile
router.get('/me', authenticate, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('-passwordHash').populate('customerId')
    if (!user) {
      return res.status(404).json({ error: 'User profile not found' })
    }
    return res.json({ user })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

export default router
