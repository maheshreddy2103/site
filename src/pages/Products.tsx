import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Search,
  Star
} from 'lucide-react'
import { productsData } from '../data/products'

const categories = [
  'All',
  'Refrigerators',
  'Air Conditioners',
  'Washing Machines',
  'Televisions',
  'Kitchen Appliances',
  'Water Purifiers',
  'Smartphones',
  'Laptops'
]

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState(() => {
    try {
      const hash = window.location.hash
      const queryIdx = hash.indexOf('?')
      if (queryIdx !== -1) {
        const params = new URLSearchParams(hash.slice(queryIdx))
        return params.get('category') || 'All'
      }
      const params = new URLSearchParams(window.location.search)
      return params.get('category') || 'All'
    } catch (e) {
      return 'All'
    }
  })
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
    <div className="min-h-screen bg-[#F8FAFC] py-12 text-slate-900 radial-mesh">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 text-xs font-semibold tracking-wider text-amber-800 mb-4 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-amber-600" />
            <span>Built Around What Indian Homes Save For</span>
          </div>
          <h1 className="text-4xl font-extrabold sm:text-5xl text-slate-900 tracking-tight">
            Curated Home Appliances Catalogue
          </h1>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Pick any appliance whenever you need it. Your savings fund pays first, and the remaining balance is split into transparent 0% interest no-cost EMIs.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-indigo-600 text-white shadow-sm border border-indigo-600'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 border border-slate-200/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search & Sort */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search Apple, Sony, Dyson..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 py-2 text-xs text-slate-900 placeholder-slate-400 outline-none focus:bg-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
              />
            </div>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700 outline-none focus:border-indigo-500 cursor-pointer pr-8"
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="mt-6 flex items-center justify-between text-xs text-slate-500">
          <p>
            Showing <span className="font-semibold text-slate-900">{filteredProducts.length}</span> authentic branded products
          </p>
          <div className="flex items-center gap-2 text-emerald-700 font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
            </span>
            <span>All inventory active &amp; ready for allocation</span>
          </div>
        </div>

        {/* Product Grid */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <div
              key={product.sku}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1.5 transition-all duration-300"
            >
              <div>
                {/* Image Container with Soft Gradient */}
                <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100 p-2 border-b border-slate-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Brand Tag */}
                  <div className="absolute top-3.5 left-3.5 rounded-lg bg-white/95 backdrop-blur-md px-2.5 py-1 text-[11px] font-bold text-slate-900 border border-slate-200/80 shadow-sm">
                    {product.brand}
                  </div>
                  {/* Rating Badge */}
                  <div className="absolute top-3.5 right-3.5 rounded-lg bg-white/95 backdrop-blur-md px-2.5 py-1 text-[11px] font-bold text-amber-800 flex items-center gap-1 border border-slate-200/80 shadow-sm">
                    <Star className="h-3 w-3 fill-amber-400 text-amber-500" />
                    <span>{product.rating}</span>
                    <span className="text-slate-500 text-[10px]">({product.reviewsCount})</span>
                  </div>

                  {/* Pulsing In Stock Indicator */}
                  <div className="absolute bottom-3.5 left-3.5 rounded-md bg-white/95 backdrop-blur-md px-2 py-0.5 text-[10px] font-semibold text-emerald-700 border border-emerald-200 flex items-center gap-1.5 shadow-sm">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-600"></span>
                    </span>
                    <span>In Stock</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center justify-between text-[11px] text-indigo-600 font-semibold tracking-wider uppercase">
                    <span>{product.category}</span>
                    <span className="text-slate-500">{product.warranty}</span>
                  </div>
                  <h3 className="mt-2 text-base font-bold text-slate-900 line-clamp-1 group-hover:text-indigo-600 transition">
                    {product.name}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-600 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Highlights */}
                  <div className="mt-3.5 flex flex-wrap gap-1.5">
                    {product.features.slice(0, 2).map((feat, idx) => (
                      <span
                        key={idx}
                        className="rounded-lg bg-slate-50 px-2 py-1 text-[11px] text-slate-700 border border-slate-200 flex items-center gap-1"
                      >
                        <CheckCircle2 className="h-3 w-3 text-emerald-600 shrink-0" />
                        <span className="truncate max-w-[170px]">{feat}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Pricing & CTA */}
              <div className="border-t border-slate-100 bg-slate-50/70 p-5 pt-4">
                <div className="flex items-baseline justify-between mb-3">
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-semibold">Zero-Interest EMI</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl font-extrabold text-emerald-600">
                        ₹{product.monthlyEmi12.toLocaleString()}
                      </span>
                      <span className="text-xs text-slate-500">/mo (12m)</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-semibold">Full Value</span>
                    <span className="text-xs font-semibold text-slate-900">{product.formattedPrice}</span>
                  </div>
                </div>

                <Link
                  to={`/products/${product.sku}`}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition hover:bg-indigo-700 cursor-pointer"
                >
                  <span>View Details &amp; Calculator</span>
                  <ArrowRight className="h-3.5 w-3.5" />
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