import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    mobile: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    passwordHash: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ['Customer', 'Admin', 'CEO', 'Finance', 'Sales', 'Manager', 'Employee'],
      default: 'Customer'
    },
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Customer'
    }
  },
  {
    timestamps: true
  }
)

// Method to verify password
userSchema.methods.verifyPassword = async function (password) {
  return bcrypt.compare(password, this.passwordHash)
}

export const User = mongoose.models.User || mongoose.model('User', userSchema)
