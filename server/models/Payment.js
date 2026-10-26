import mongoose from 'mongoose'

const paymentSchema = new mongoose.Schema(
  {
    transactionId: {
      type: String,
      required: true,
      unique: true
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Customer',
      required: true
    },
    membership: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Membership'
    },
    amount: {
      type: Number,
      required: true
    },
    paymentMethod: {
      type: String,
      enum: ['UPI', 'NET_BANKING', 'CARD', 'ESCROW_WALLET', 'OTHER'],
      default: 'UPI'
    },
    status: {
      type: String,
      enum: ['SUCCESS', 'PENDING', 'FAILED', 'REFUNDED'],
      default: 'SUCCESS'
    },
    notes: {
      type: String
    }
  },
  {
    timestamps: true
  }
)

export const Payment = mongoose.models.Payment || mongoose.model('Payment', paymentSchema)
