import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Star,
  Truck,
  RotateCcw,
  Lock,
  BadgePercent,
  Building2,
  ChevronRight
} from 'lucide-react'
import { productsData } from '../data/products'

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>()
  const product = productsData.find((p) => p.sku === slug) || productsData[0]

  const [selectedMonths, setSelectedMonths] = useState<number>(12)
  const [pincode, setPincode] = useState('')
  const [pincodeStatus, setPincodeStatus] = useState<string | null>(null)

  // Calculate monthly installment based on duration (0% interest)
  const monthlyAmount = Math.round(product.price / selectedMonths)
  const rewardPointsEarned = Math.round(product.price * 0.05) // 5% reward bonus

  function handleCheckPincode(e: React.FormEvent) {
    e.preventDefault()
    if (pincode.length === 6 && /^\d+$/.test(pincode)) {
      setPincodeStatus(`✓ Delivery & authorized installation active at PIN ${pincode}`)
    } else {
      setPincodeStatus('Please enter a valid 6-digit Indian postal pincode.')
    }
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12 text-slate-900 radial-mesh">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-2 text-xs text-slate-500">
          <Link to="/" className="hover:text-slate-900 transition">Home</Link>
          <ChevronRight className="h-3 w-3 text-slate-400" />
          <Link to="/products" className="hover:text-slate-900 transition">Products</Link>
          <ChevronRight className="h-3 w-3 text-slate-400" />
          <span className="text-slate-700">{product.brand}</span>
          <ChevronRight className="h-3 w-3 text-slate-400" />
          <span className="text-indigo-600 font-semibold truncate max-w-xs">{product.name}</span>
        </nav>

        {/* Main Showcase Grid */}
        <div className="grid gap-8 lg:grid-cols-12">
          
          {/* Left Column: Product Showcase & Specs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Image Card */}
            <div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100 p-2 shadow-md">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover rounded-2xl"
              />
              <div className="absolute top-4 left-4 rounded-xl bg-white/95 backdrop-blur-md px-3 py-1.5 text-xs font-bold text-slate-900 border border-slate-200/80 shadow-sm">
                {product.brand} Authorized
              </div>
              <div className="absolute top-4 right-4 rounded-xl bg-white/95 backdrop-blur-md px-3 py-1.5 text-xs font-bold text-amber-800 flex items-center gap-1.5 border border-slate-200/80 shadow-sm">
                <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-500" />
                <span>{product.rating}</span>
                <span className="text-slate-500 text-[11px]">({product.reviewsCount} reviews)</span>
              </div>
              <div className="absolute bottom-4 left-4 rounded-xl bg-white/95 backdrop-blur-md px-3 py-1.5 text-xs font-semibold text-emerald-700 border border-emerald-200 flex items-center gap-2 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                </span>
                <span>Verified Official Seal · Ready for Allocation</span>
              </div>
            </div>

            {/* Product Title & Info */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-indigo-600">
                <span>{product.category}</span>
                <span className="text-slate-400">·</span>
                <span className="text-slate-500">SKU: {product.sku}</span>
              </div>
              <h1 className="mt-2 text-2xl font-extrabold sm:text-3xl text-slate-900">
                {product.name}
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {product.description}
              </p>
            </div>

            {/* Key Features */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-emerald-600" />
                <span>Engineered Specifications &amp; Highlights</span>
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {product.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 rounded-xl bg-slate-50 p-3 border border-slate-200/80">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-800 font-medium">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specifications Table */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
                <Building2 className="h-4 w-4 text-indigo-600" />
                <span>Technical Specifications &amp; Official Warranty</span>
              </h2>
              <div className="divide-y divide-slate-100 text-xs">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="grid grid-cols-3 py-3">
                    <span className="text-slate-500 font-medium">{key}</span>
                    <span className="col-span-2 text-slate-900 font-semibold">{value}</span>
                  </div>
                ))}
                <div className="grid grid-cols-3 py-3">
                  <span className="text-slate-500 font-medium">Fulfillment Partner</span>
                  <span className="col-span-2 text-indigo-600 font-semibold">{product.partner}</span>
                </div>
                <div className="grid grid-cols-3 py-3">
                  <span className="text-slate-500 font-medium">Warranty Coverage</span>
                  <span className="col-span-2 text-emerald-700 font-semibold">{product.warranty}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive FinTech Milestone Calculator (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Calculator Card */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 border border-emerald-200">
                  <BadgePercent className="h-3.5 w-3.5" />
                  <span>0% Interest Milestone Plan</span>
                </span>
                <span className="text-xs text-slate-500">
                  Total: <span className="line-through">{product.formattedPrice}</span>
                </span>
              </div>

              {/* Monthly Amount Display */}
              <div className="mt-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
                  Your Monthly Milestone Dues
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-4xl font-extrabold text-emerald-600">
                    ₹{monthlyAmount.toLocaleString()}
                  </span>
                  <span className="text-sm font-medium text-slate-500">/ month</span>
                </div>
                <p className="mt-1 text-xs text-emerald-700 font-medium">
                  Guaranteed full asset redemption across {selectedMonths} equal monthly installments
                </p>
              </div>

              {/* Tenure Selector */}
              <div className="mt-6">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-2.5 flex items-center justify-between">
                  <span>Choose Tenure Duration</span>
                  <span className="text-indigo-600 font-semibold">{selectedMonths} Months</span>
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[6, 9, 12, 18].map((months) => (
                    <button
                      key={months}
                      onClick={() => setSelectedMonths(months)}
                      className={`rounded-xl py-3 px-2 text-center text-xs font-bold transition-all duration-200 cursor-pointer border ${
                        selectedMonths === months
                          ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      <div>{months} Mos</div>
                      <div className="text-[10px] font-normal opacity-85 mt-0.5">
                        ₹{Math.round(product.price / months).toLocaleString()}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Benefits Breakdown Matrix */}
              <div className="mt-6 space-y-2.5 rounded-xl bg-slate-50 p-4 text-xs border border-slate-200">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Financing Interest:</span>
                  <span className="font-bold text-emerald-700">0% (Zero hidden markup)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Processing / Documentation Fee:</span>
                  <span className="font-bold text-emerald-700">₹0 Completely Waived</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Milestone Reward Points:</span>
                  <span className="font-bold text-indigo-600">+{rewardPointsEarned} Pts</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Fulfillment Assurance:</span>
                  <span className="font-semibold text-slate-900">Direct Brand Tax Invoice</span>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                to="/signup"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-md shadow-emerald-600/20 transition-all duration-200 hover:bg-emerald-700 cursor-pointer"
              >
                <span>Enroll with ₹{monthlyAmount.toLocaleString()}/mo</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-slate-500">
                <Lock className="h-3 w-3 text-emerald-600" />
                <span>Audited escrow safety · Flexible premature exit with zero penalty</span>
              </div>
            </div>

            {/* Delivery Pincode Checker */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3 flex items-center gap-2">
                <Truck className="h-4 w-4 text-emerald-600" />
                <span>Verify Pincode Delivery &amp; Partner Store Pickup</span>
              </h3>
              <form onSubmit={handleCheckPincode} className="flex gap-2">
                <input
                  type="text"
                  maxLength={6}
                  placeholder="Enter 6-digit Indian PIN"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 outline-none focus:bg-white focus:border-indigo-500"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-xl bg-indigo-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-indigo-700 transition shadow-sm cursor-pointer"
                >
                  Verify
                </button>
              </form>
              {pincodeStatus && (
                <p className={`mt-3 text-xs ${pincodeStatus.startsWith('✓') ? 'text-emerald-700 font-semibold' : 'text-rose-600'}`}>
                  {pincodeStatus}
                </p>
              )}
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-3 text-center text-xs">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <ShieldCheck className="h-5 w-5 text-emerald-600 mx-auto mb-2" />
                <p className="font-bold text-slate-900">Brand Warranty</p>
                <p className="mt-1 text-[11px] text-slate-500">Official manufacturer service across all Indian service centers</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <RotateCcw className="h-5 w-5 text-indigo-600 mx-auto mb-2" />
                <p className="font-bold text-slate-900">Insured Dispatch</p>
                <p className="mt-1 text-[11px] text-slate-500">Transit-insured home delivery or authorized flagship store pickup</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}