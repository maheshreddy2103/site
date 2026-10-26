import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const MONGODB_URI = process.env.MONGODB_URI || process.env.DATABASE_URL || 'mongodb://localhost:27017/savenbuy'

export async function connectDB() {
  try {
    const conn = await mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
    })
    console.log(`[MongoDB Connected]: ${conn.connection.host}/${conn.connection.name}`)
    return conn
  } catch (error) {
    console.error(`[MongoDB Connection Error]: ${error.message}`)
    console.log('Ensure MongoDB service is running locally or check your MONGODB_URI in .env')
  }
}
