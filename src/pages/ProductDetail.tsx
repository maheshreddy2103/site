import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
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
      setPincodeStatus(`✓ Delivery & authorized installation available at ${pincode}`)
    } else {
      setPincodeStatus('Please enter a valid 6-digit Indian pincode.')
    }
  }

  return (
    <div className="min-h-screen bg-cream py-14 text-navy">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-2 text-xs text-slate-500">
          <Link to="/" className="hover:text-brand-maroon">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-brand-maroon">Products</Link>
          <span>/</span>
          <span className="font-semibold text-navy">{product.brand}</span>
          <span>/</span>
          <span className="text-slate-700 truncate max-w-xs">{product.name}</span>
        </nav>

        {/* Product Showcase Card */}
        <div className="rounded-[2.5rem] border border-brand-gold/25 bg-white p-6 sm:p-10 shadow-xl">
          <div className="grid gap-12 lg:grid-cols-12">
            
            {/* Left: Product Images & Specs (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              {/* Main Image */}
              <div className="relative aspect-video w-full overflow-hidden rounded-3xl bg-slate-50 border border-brand-gold/15">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
                <span className="absolute top-4 left-4 rounded-full bg-brand-maroon px-4 py-1.5 text-xs font-semibold text-white tracking-wider">
                  {product.brand} Official
                </span>
                <span className="absolute top-4 right-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-amber-700 shadow-sm flex items-center gap-1">
                  ★ {product.rating} · {product.reviewsCount} Verified Reviews
                </span>
              </div>

              {/* Title & Description */}
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-maroon">
                  {product.category}
                </span>
                <h1 className="mt-2 text-3xl font-serif font-bold text-navy sm:text-4xl">
                  {product.name}
                </h1>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {product.description}
                </p>
              </div>

              {/* Key Features */}
              <div className="rounded-3xl border border-brand-gold/20 bg-brand-cream/60 p-6">
                <h2 className="text-base font-bold text-navy uppercase tracking-wider mb-4">
                  Key Highlights &amp; Features
                </h2>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-maroon text-[10px] text-white">
                        ✓
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Specifications Table */}
              <div className="rounded-3xl border border-brand-gold/15 bg-white p-6 shadow-sm">
                <h2 className="text-base font-bold text-navy uppercase tracking-wider mb-4">
                  Full Technical Specifications
                </h2>
                <div className="divide-y divide-slate-100 text-xs">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="grid grid-cols-3 py-3">
                      <span className="font-semibold text-slate-600">{key}</span>
                      <span className="col-span-2 text-navy font-medium">{value}</span>
                    </div>
                  ))}
                  <div className="grid grid-cols-3 py-3">
                    <span className="font-semibold text-slate-600">Fulfillment Partner</span>
                    <span className="col-span-2 text-brand-maroon font-semibold">{product.partner}</span>
                  </div>
                  <div className="grid grid-cols-3 py-3">
                    <span className="font-semibold text-slate-600">Warranty Coverage</span>
                    <span className="col-span-2 text-emerald-800 font-semibold">{product.warranty}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Interactive EMI Calculator & Membership Join (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Membership Pricing Box */}
              <div className="rounded-[2rem] border border-brand-gold/30 bg-gradient-to-br from-brand-maroon/5 via-white to-brand-gold/5 p-7 shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-brand-maroon/10 px-3 py-1 text-xs font-semibold text-brand-maroon uppercase tracking-wider">
                    0% Interest Membership
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    MRP: <span className="line-through">{product.formattedPrice}</span>
                  </span>
                </div>

                <div className="mt-6">
                  <span className="text-xs uppercase tracking-wider text-slate-500 block">Your Monthly Payment</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-4xl font-serif font-bold text-brand-maroon">
                      ₹{monthlyAmount.toLocaleString()}
                    </span>
                    <span className="text-sm font-medium text-slate-600">/ month</span>
                  </div>
                  <p className="mt-1 text-xs text-emerald-700 font-semibold">
                    Total: {product.formattedPrice} across {selectedMonths} equal monthly installments
                  </p>
                </div>

                {/* Duration Selector */}
                <div className="mt-6">
                  <label className="text-xs font-bold uppercase tracking-wider text-navy block mb-2">
                    Select Membership Tenure
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {[6, 9, 12, 18].map((months) => (
                      <button
                        key={months}
                        onClick={() => setSelectedMonths(months)}
                        className={`rounded-2xl py-3 px-2 text-center text-xs font-bold transition border ${
                          selectedMonths === months
                            ? 'bg-brand-maroon text-white border-brand-maroon shadow-md'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-brand-maroon/50'
                        }`}
                      >
                        <div>{months} Mos</div>
                        <div className="text-[10px] font-normal opacity-90 mt-0.5">
                          ₹{Math.round(product.price / months).toLocaleString()}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Benefits Breakdown */}
                <div className="mt-6 space-y-3 rounded-2xl bg-white p-4 text-xs border border-brand-gold/20">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Interest / Processing Fee:</span>
                    <span className="font-bold text-emerald-700">₹0 (Transparent)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Milestone Reward Points:</span>
                    <span className="font-bold text-brand-maroon">+{rewardPointsEarned} Pts</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Authorized Dealer Seal:</span>
                    <span className="font-semibold text-navy">100% Authentic Brand Seal</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  to="/signup"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-brand-maroon px-6 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-brand-maroon/25 transition hover:bg-[#431523]"
                >
                  Join Plan for ₹{monthlyAmount.toLocaleString()}/mo
                </Link>

                <p className="mt-3 text-center text-[11px] text-slate-500">
                  🔒 No hidden charges · Cancel anytime under transparent settlement rules
                </p>
              </div>

              {/* Delivery Pincode Checker */}
              <div className="rounded-3xl border border-brand-gold/20 bg-white p-6 shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-wider text-navy mb-3">
                  Check Delivery &amp; Partner Store Pickup
                </h3>
                <form onSubmit={handleCheckPincode} className="flex gap-2">
                  <input
                    type="text"
                    maxLength={6}
                    placeholder="Enter 6-digit Pincode"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-2.5 text-xs text-navy outline-none focus:border-brand-maroon"
                  />
                  <button
                    type="submit"
                    className="shrink-0 rounded-2xl bg-navy px-4 py-2.5 text-xs font-semibold text-white hover:bg-slate-800 transition"
                  >
                    Check
                  </button>
                </form>
                {pincodeStatus && (
                  <p className={`mt-3 text-xs ${pincodeStatus.startsWith('✓') ? 'text-emerald-700 font-semibold' : 'text-red-600'}`}>
                    {pincodeStatus}
                  </p>
                )}
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-3 text-center text-xs">
                <div className="rounded-2xl border border-brand-gold/15 bg-white p-4 shadow-sm">
                  <p className="font-bold text-navy">Brand Warranty</p>
                  <p className="mt-1 text-[11px] text-slate-500">Official manufacturer service across India</p>
                </div>
                <div className="rounded-2xl border border-brand-gold/15 bg-white p-4 shadow-sm">
                  <p className="font-bold text-navy">Direct Delivery</p>
                  <p className="mt-1 text-[11px] text-slate-500">Insured doorstep dispatch or store pickup</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
