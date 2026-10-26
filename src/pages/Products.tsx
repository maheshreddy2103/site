import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { productsData, Product } from '../data/products'

const categories = ['All', 'Smartphones', 'Smart TVs', 'Home Appliances', 'Laptops', 'Gold & Jewellery']

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState<'popular' | 'price-low' | 'price-high'>('popular')

  const filteredProducts = useMemo(() => {
    return productsData
      .filter((p) => {
        const matchesCat = selectedCategory === 'All' || p.category === selectedCategory
        const matchesSearch =
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesCat && matchesSearch
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price
        if (sortBy === 'price-high') return b.price - a.price
        return b.reviewsCount - a.reviewsCount
      })
  }, [selectedCategory, searchQuery, sortBy])

  return (
    <div className="min-h-screen bg-cream py-14 text-navy">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex rounded-full border border-brand-gold/30 bg-white/80 px-4 py-1.5 text-xs uppercase tracking-[0.28em] text-brand-maroon shadow-sm mb-4">
            Authorized Genuine Brand Catalog
          </div>
          <h1 className="text-4xl font-serif font-bold text-navy sm:text-5xl">
            Premium Products from World-Famous Brands
          </h1>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Own the latest genuine electronics, flagship smartphones, smart appliances and hallmarked gold with flexible, 0% interest monthly membership plans.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="mt-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between bg-white p-4 rounded-3xl border border-brand-gold/20 shadow-sm">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition ${
                  selectedCategory === cat
                    ? 'bg-brand-maroon text-white shadow-md'
                    : 'bg-brand-cream/80 text-slate-700 hover:bg-brand-gold/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search & Sort */}
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Search Apple, Sony, Samsung..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full sm:w-60 rounded-full border border-slate-300 bg-slate-50 px-4 py-2 text-xs text-navy outline-none focus:border-brand-maroon focus:ring-2 focus:ring-brand-gold/20"
            />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="rounded-full border border-slate-300 bg-white px-3 py-2 text-xs font-medium text-slate-700 outline-none focus:border-brand-maroon cursor-pointer"
            >
              <option value="popular">Most Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Results Counter */}
        <p className="mt-6 text-sm text-slate-500">
          Showing <span className="font-semibold text-navy">{filteredProducts.length}</span> authentic branded products
        </p>

        {/* Product Grid */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <div
              key={product.sku}
              className="group flex flex-col justify-between overflow-hidden rounded-[2rem] border border-brand-gold/20 bg-white shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div>
                {/* Image Container */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 rounded-full bg-brand-maroon/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-white tracking-wide">
                    {product.brand}
                  </div>
                  <div className="absolute top-3 right-3 rounded-full bg-white/90 backdrop-blur-sm px-2.5 py-1 text-xs font-bold text-amber-700 flex items-center gap-1 shadow-sm">
                    ★ {product.rating} ({product.reviewsCount})
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-maroon">
                    {product.category}
                  </p>
                  <h3 className="mt-2 text-lg font-bold text-navy line-clamp-1 group-hover:text-brand-maroon transition">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-slate-600 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Highlights */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {product.features.slice(0, 2).map((feat, idx) => (
                      <span
                        key={idx}
                        className="rounded-lg bg-brand-cream px-2 py-1 text-[11px] font-medium text-slate-700 border border-brand-gold/15"
                      >
                        ✓ {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Pricing & CTA */}
              <div className="border-t border-brand-gold/15 bg-brand-cream/40 p-6 pt-4">
                <div className="flex items-baseline justify-between mb-3">
                  <div>
                    <span className="text-xs text-slate-500 uppercase tracking-wider block">Membership EMI</span>
                    <span className="text-2xl font-bold text-brand-maroon">
                      ₹{product.monthlyEmi12.toLocaleString()}
                    </span>
                    <span className="text-xs text-slate-600 font-medium"> / month (12 mos)</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-500 block">Total Value</span>
                    <span className="text-sm font-semibold text-slate-700">{product.formattedPrice}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-500 mb-4">
                  <span className="text-emerald-700 font-semibold">✓ 0% Interest Dues</span>
                  <span>{product.warranty}</span>
                </div>

                <Link
                  to={`/products/${product.sku}`}
                  className="inline-flex w-full items-center justify-center rounded-full bg-brand-maroon px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition hover:bg-[#431523]"
                >
                  View Details &amp; Start Plan
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export { productsData } from '../data/products'
