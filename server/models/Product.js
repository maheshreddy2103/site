import mongoose from 'mongoose'

const productSchema = new mongoose.Schema(
  {
    sku: {
      type: String,
      required: true,
      unique: true
    },
    name: {
      type: String,
      required: true
    },
    brand: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    formattedPrice: {
      type: String
    },
    image: {
      type: String,
      required: true
    },
    features: [{
      type: String
    }],
    specs: {
      type: Map,
      of: String
    },
    partner: {
      type: String
    },
    warranty: {
      type: String
    },
    rating: {
      type: Number,
      default: 4.8
    },
    reviewsCount: {
      type: Number,
      default: 120
    },
    inStock: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  }
)

export const Product = mongoose.models.Product || mongoose.model('Product', productSchema)
