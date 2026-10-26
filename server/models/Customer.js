import mongoose from 'mongoose'

const customerSchema = new mongoose.Schema(
  {
    customerId: {
      type: String,
      required: true,
      unique: true
    },
    membershipId: {
      type: String,
      required: true,
      unique: true
    },
    firstName: {
      type: String,
      required: true,
      trim: true
    },
    lastName: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    mobile: {
      type: String,
      required: true,
      unique: true
    },
    dateOfBirth: {
      type: Date,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    pincode: {
      type: String,
      required: true
    },
    nomineeName: {
      type: String
    },
    nomineeRelation: {
      type: String
    },
    kycStatus: {
      type: String,
      enum: ['PENDING', 'VERIFIED', 'REJECTED'],
      default: 'PENDING'
    },
    rewardPoints: {
      type: Number,
      default: 0
    },
    walletBalance: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
)

export const Customer = mongoose.models.Customer || mongoose.model('Customer', customerSchema)
