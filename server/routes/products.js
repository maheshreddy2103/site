import express from 'express'
import { Product } from '../models/Product.js'

const router = express.Router()

// Default authentic branded catalog for auto-seeding
const defaultProducts = [
  {
    sku: 'IPHONE-16-128',
    name: 'Apple iPhone 16 (128GB) - Ultramarine',
    brand: 'Apple',
    category: 'Smartphones',
    price: 79900,
    formattedPrice: '₹79,900',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=1200&q=80',
    description: 'A18 Bionic Chip, Camera Control, 48MP Fusion Camera, Apple Intelligence ready.',
    warranty: '1 Year Apple India Warranty',
    partner: 'Apple Authorized Reseller (Croma / Reliance)',
    rating: 4.9,
    reviewsCount: 342,
    features: ['A18 Bionic Chip', '48MP Fusion Camera', 'Camera Control Button', 'Dynamic Island', 'Action Button', 'USB-C Charging'],
    specs: { 'Display': '6.1" Super Retina XDR OLED', 'Storage': '128 GB', 'Processor': 'Apple A18 Bionic', 'OS': 'iOS 18', 'Color': 'Ultramarine Blue' }
  },
  {
    sku: 'SAMSUNG-S24-256',
    name: 'Samsung Galaxy S24 5G (8GB RAM, 256GB)',
    brand: 'Samsung',
    category: 'Smartphones',
    price: 74999,
    formattedPrice: '₹74,999',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=1200&q=80',
    description: 'Galaxy AI with Live Translate & Circle to Search, 50MP ProVisual Engine camera.',
    warranty: '1 Year Samsung India Warranty',
    partner: 'Samsung Smart Plaza / Vijay Sales',
    rating: 4.8,
    reviewsCount: 289,
    features: ['Galaxy AI Features Built-in', '50MP Triple Camera System', 'Armor Aluminum Frame', '4,000 mAh All-Day Battery', 'Vision Booster Display'],
    specs: { 'Display': '6.2" Dynamic AMOLED 2X 120Hz', 'RAM': '8 GB', 'Storage': '256 GB', 'Battery': '4,000 mAh' }
  },
  {
    sku: 'SONY-BRAVIA-55',
    name: 'Sony Bravia 55" 4K Ultra HD Smart Google TV',
    brand: 'Sony',
    category: 'Smart TVs',
    price: 57990,
    formattedPrice: '₹57,990',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=1200&q=80',
    description: '4K Processor X1, Live Colour technology, Dolby Audio with 20W Open Baffle speakers.',
    warranty: '2 Years Comprehensive Sony Warranty',
    partner: 'Sony Center / Croma Official',
    rating: 4.9,
    reviewsCount: 512,
    features: ['4K Processor X1 Engine', 'Motionflow XR 100', 'Dolby Audio 20W Speakers', 'Google TV with Voice Search'],
    specs: { 'Screen Size': '55 Inches (139 cm)', 'Resolution': '4K Ultra HD (3840 x 2160)', 'Refresh Rate': '60 Hz' }
  },
  {
    sku: 'TANISHQ-GOLD-COIN-10G',
    name: 'Tanishq 24K (999.9 Purity) 10 Gram Gold Coin',
    brand: 'Tanishq (Tata)',
    category: 'Gold & Jewellery',
    price: 78500,
    formattedPrice: '₹78,500',
    image: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=1200&q=80',
    description: 'BIS Hallmarked 999.9 fine 24 Karat gold coin in tamper-proof CertiCard packaging with Tata trust.',
    warranty: '100% Lifetime Buyback Guarantee across all 450+ Tanishq Boutiques',
    partner: 'Tanishq Boutiques (Tata Group)',
    rating: 5.0,
    reviewsCount: 680,
    features: ['999.9 Fine Purity Gold', 'BIS Hallmarked Certified', 'Tamper-Evident CertiCard Packaging', 'Tata Assurance & Lifetime Buyback'],
    specs: { 'Purity': '24 Karat (999.9)', 'Weight': '10.000 Grams', 'Packaging': 'Sealed Assay CertiCard' }
  }
]

// GET /api/products - Get all products with optional auto-seed
router.get('/', async (req, res) => {
  try {
    let products = await Product.find()
    if (products.length === 0) {
      console.log('[Auto-seeding default brand products to MongoDB...]')
      products = await Product.insertMany(defaultProducts)
    }
    return res.json({ success: true, count: products.length, products })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

// GET /api/products/:sku - Get single product
router.get('/:sku', async (req, res) => {
  try {
    const product = await Product.findOne({ sku: req.params.sku })
    if (!product) {
      return res.status(404).json({ error: 'Product not found' })
    }
    return res.json({ success: true, product })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

export default router
