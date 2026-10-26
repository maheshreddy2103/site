import mongoose from 'mongoose'

const emiScheduleSchema = new mongoose.Schema({
  installmentNumber: {
    type: Number,
    required: true
  },
  dueDate: {
    type: Date,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['PENDING', 'SUCCESS', 'OVERDUE'],
    default: 'PENDING'
  },
  paidAt: {
    type: Date
  },
  transactionId: {
    type: String
  }
})

const membershipSchema = new mongoose.Schema(
  {
    membershipId: {
      type: String,
      required: true,
      unique: true
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Customer',
      required: true
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    },
    planName: {
      type: String,
      required: true
    },
    tenureMonths: {
      type: Number,
      required: true
    },
    monthlyAmount: {
      type: Number,
      required: true
    },
    totalAmount: {
      type: Number,
      required: true
    },
    paidAmount: {
      type: Number,
      default: 0
    },
    completedInstallments: {
      type: Number,
      default: 0
    },
    status: {
      type: String,
      enum: ['ACTIVE', 'COMPLETED', 'CANCELLED', 'SETTLED'],
      default: 'ACTIVE'
    },
    emiSchedules: [emiScheduleSchema],
    startDate: {
      type: Date,
      default: Date.now
    },
    endDate: {
      type: Date,
      required: true
    }
  },
  {
    timestamps: true
  }
)

export const Membership = mongoose.models.Membership || mongoose.model('Membership', membershipSchema)
