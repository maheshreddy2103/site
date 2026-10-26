import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'

import authRoutes from './routes/auth.js'
import productRoutes from './routes/products.js'
import membershipRoutes from './routes/memberships.js'
import orderRoutes from './routes/orders.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors({
  origin: '*', // Allow requests from local frontend and GitHub Pages
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))
app.use(express.json())

// Connect to MongoDB
connectDB()

// Health Check API
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    service: 'SaveNBuy FinTech MongoDB Backend',
    timestamp: new Date().toISOString()
  })
})

// Mount API routes
app.use('/api/auth', authRoutes)
app.use('/api/products', productRoutes)
app.use('/api/memberships', membershipRoutes)
app.use('/api/orders', orderRoutes)

// 404 Route handler
app.use((req, res) => {
  res.status(404).json({ error: `Route ${req.originalUrl} not found` })
})

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Unhandled server error:', err)
  res.status(500).json({ error: 'Internal server error', message: err.message })
})

// Start listening
app.listen(PORT, () => {
  console.log(`===============================================`)
  console.log(`🚀 SaveNBuy MongoDB Server running on port ${PORT}`)
  console.log(`📡 Health Check: http://localhost:${PORT}/api/health`)
  console.log(`🔐 Auth APIs:    http://localhost:${PORT}/api/auth/signup`)
  console.log(`🛍️ Products:     http://localhost:${PORT}/api/products`)
  console.log(`💳 Memberships:  http://localhost:${PORT}/api/memberships`)
  console.log(`===============================================`)
})

export default app
