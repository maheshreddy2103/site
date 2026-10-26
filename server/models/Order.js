import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema(
  {
    orderId: {
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
    membership: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Membership'
    },
    status: {
      type: String,
      enum: ['APPLICATION', 'APPROVED', 'PAYMENT_IN_PROGRESS', 'READY_FOR_PICKUP', 'DISPATCHED', 'DELIVERED', 'CANCELLED'],
      default: 'PAYMENT_IN_PROGRESS'
    },
    fulfillmentMethod: {
      type: String,
      enum: ['DOORSTEP_DELIVERY', 'STORE_PICKUP'],
      default: 'DOORSTEP_DELIVERY'
    },
    partnerStore: {
      type: String
    },
    trackingCode: {
      type: String
    },
    officialWarrantyCode: {
      type: String
    }
  },
  {
    timestamps: true
  }
)

export const Order = mongoose.models.Order || mongoose.model('Order', orderSchema)
