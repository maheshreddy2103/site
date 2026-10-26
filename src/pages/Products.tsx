import React from 'react'
import { Link } from 'react-router-dom'

export const productsData = [
  { sku: 'TV-001', name: 'Regal Smart LED TV', brand: 'Lakshmi Electronics', price: '₹12,000', warranty: '2 years', availability: 'In stock', description: 'Premium 43-inch smart LED television with premium audio, smart streaming and trusted retail support.', features: ['43-inch HD display', 'Smart streaming apps', 'Premium audio', '2-year warranty'] },
  { sku: 'PHONE-002', name: 'Sampada Smartphone', brand: 'Lakshmi Mobile', price: '₹9,499', warranty: '1 year', availability: 'In stock', description: 'Feature-rich high-efficiency smartphone with long battery life and crystal clear camera.', features: ['6.5-inch AMOLED screen', '5000 mAh battery', '50MP camera', '1-year warranty'] },
  { sku: 'FRIDGE-003', name: 'Aarambh Refrigerator', brand: 'Lakshmi Home', price: '₹17,999', warranty: '3 years', availability: 'In stock', description: 'Energy-efficient double-door refrigerator designed for modern families with inverter technology.', features: ['Double door 260L', 'Inverter compressor', 'Fast ice technology', '3-year warranty'] }
]

export default function Products() {
  return (
    <div className="min-h-screen bg-white py-16 text-navy">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-maroon">Products</p>
          <h1 className="mt-4 text-4xl font-serif font-semibold text-navy">Premium catalogue for membership purchases</h1>
          <p className="mt-4 text-slate-600">Explore products selected for high-quality memberships and trusted delivery.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {productsData.map((product) => (
            <div key={product.sku} className="rounded-[2rem] border border-brand-gold/20 bg-cream p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-brand-maroon">{product.brand}</p>
                  <h2 className="mt-2 text-xl font-semibold text-navy">{product.name}</h2>
                </div>
                <span className="rounded-full bg-brand-maroon px-3 py-1 text-xs font-semibold text-white">{product.availability}</span>
              </div>
              <p className="mt-4 text-slate-600">{product.warranty} warranty</p>
              <p className="mt-6 text-3xl font-semibold text-brand-maroon">{product.price}</p>
              <Link to={`/products/${product.sku}`} className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-brand-maroon px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#431523]">
                View details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

