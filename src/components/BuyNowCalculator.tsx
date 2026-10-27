import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Calculator,
  Percent,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
  RotateCcw
} from 'lucide-react'
import { productsData } from '../data/products'

export default function BuyNowCalculator() {
  const [selectedSku, setSelectedSku] = useState(productsData[0].sku)
  const product = productsData.find((p) => p.sku === selectedSku) || productsData[0]

  const maxSavings = Math.min(product.price - 1000, 30000)
  const [savingsFund, setSavingsFund] = useState(5000)
  const [tenureMonths, setTenureMonths] = useState<3 | 6 | 9 | 12>(12)

  // Fund cannot exceed product price
  const fundApplied = Math.min(savingsFund, product.price)
  const balanceOnEmi = Math.max(0, product.price - fundApplied)
  const monthlyEmi = Math.round(balanceOnEmi / tenureMonths)

  // Fund percentage for visual bar
  const fundPercentage = Math.round((fundApplied / product.price) * 100)
  const emiPercentage = 100 - fundPercentage

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xl shadow-slate-200/60 text-slate-800">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-100 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1 text-xs font-bold text-amber-800 mb-2">
            <Calculator className="h-3.5 w-3.5 text-amber-600" />
            <span>Interactive Buy-Now Calculator</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            See how your savings fund cuts your monthly EMI to 0% interest
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-500">
            The fund pays first. Any remaining balance becomes a clear, interest-free monthly instalment.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="rounded-xl border border-emerald-200 bg-emerald-50 px-3.5 py-2 text-xs font-bold text-emerald-800 flex items-center gap-1.5 shadow-xs">
            <Percent className="h-4 w-4 text-emerald-600" />
            <span>0% Interest · No Processing Fee</span>
          </span>
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        {/* Controls Column */}
        <div className="lg:col-span-7 space-y-6">
          {/* 1. Select Appliance */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-2">
              Step 1: Choose Your Desired Appliance
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {productsData.slice(0, 6).map((item) => {
                const isSelected = item.sku === product.sku
                return (
                  <button
                    key={item.sku}
                    type="button"
                    onClick={() => {
                      setSelectedSku(item.sku)
                      if (savingsFund > item.price) {
                        setSavingsFund(Math.round(item.price * 0.3))
                      }
                    }}
                    className={`rounded-2xl p-3 text-left transition border cursor-pointer ${
                      isSelected
                        ? 'border-indigo-600 bg-indigo-50/70 shadow-sm'
                        : 'border-slate-200 bg-slate-50 hover:bg-slate-100/80'
                    }`}
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block truncate">
                      {item.category}
                    </span>
                    <span className="text-xs font-bold text-slate-900 block truncate mt-0.5">
                      {item.name}
                    </span>
                    <span className="text-xs font-extrabold text-indigo-700 mt-1 block">
                      {item.formattedPrice}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* 2. Savings Fund Slider */}
          <div className="rounded-2xl bg-slate-50 p-5 border border-slate-200 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                  Step 2: Your Savings Fund Balance
                </span>
                <span className="text-[11px] text-slate-500">
                  Built through auto-save (e.g. ₹50/day or ₹1,500/mo)
                </span>
              </div>
              <div className="text-right">
                <span className="text-2xl font-extrabold text-amber-600">
                  ₹{savingsFund.toLocaleString('en-IN')}
                </span>
                <span className="text-[10px] text-slate-500 block">Paid from fund</span>
              </div>
            </div>

            <input
              type="range"
              min="0"
              max={maxSavings}
              step="500"
              value={savingsFund}
              onChange={(e) => setSavingsFund(Number(e.target.value))}
              className="w-full h-2 rounded-lg bg-slate-200 accent-amber-500 cursor-pointer"
            />

            <div className="flex justify-between text-[11px] text-slate-400 font-mono">
              <span>₹0 (0% Saved)</span>
              <span>₹{(product.price * 0.5).toLocaleString('en-IN')} (50% Saved)</span>
              <span>₹{maxSavings.toLocaleString('en-IN')} Max</span>
            </div>

            {/* Quick Presets */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-200">
              <span className="text-[10px] font-semibold uppercase text-slate-500">Quick Fill:</span>
              {[2000, 5000, 10000, 15000].map((amt) => (
                <button
                  key={amt}
                  type="button"
                  onClick={() => setSavingsFund(Math.min(amt, maxSavings))}
                  className="rounded-lg border border-slate-300 bg-white px-2.5 py-1 text-[11px] font-bold text-slate-700 hover:bg-slate-100 transition cursor-pointer shadow-2xs"
                >
                  ₹{amt.toLocaleString('en-IN')}
                </button>
              ))}
            </div>
          </div>

          {/* 3. Tenure Selection */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-2">
              Step 3: Select 0% No-Cost EMI Tenure
            </label>
            <div className="grid grid-cols-4 gap-2">
              {([3, 6, 9, 12] as const).map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setTenureMonths(m)}
                  className={`rounded-xl py-3 text-center border transition cursor-pointer ${
                    tenureMonths === m
                      ? 'border-indigo-600 bg-indigo-600 text-white font-bold shadow-md shadow-indigo-600/20'
                      : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <span className="text-sm font-extrabold block">{m} Months</span>
                  <span className={`text-[10px] ${tenureMonths === m ? 'text-indigo-100' : 'text-emerald-700 font-medium'}`}>
                    0% Interest
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Visual Live Breakdown */}
        <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/70 p-6 shadow-sm">
          <div className="space-y-5">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-700">
                Purchase Summary
              </span>
              <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[10px] font-bold text-emerald-800 border border-emerald-200">
                100% Genuine Brand Unit
              </span>
            </div>

            {/* Product Card Snippet */}
            <div className="flex items-center gap-4 rounded-xl bg-white p-3 border border-slate-200 shadow-xs">
              <img
                src={product.image}
                alt={product.name}
                className="h-16 w-16 rounded-lg object-cover border border-slate-200"
              />
              <div className="min-w-0 flex-1">
                <span className="text-[10px] uppercase font-mono text-slate-500 block">
                  {product.brand} · {product.category}
                </span>
                <h4 className="text-sm font-bold text-slate-900 truncate">{product.name}</h4>
                <div className="text-base font-extrabold text-slate-900 mt-0.5">
                  {product.formattedPrice}
                </div>
              </div>
            </div>

            {/* Visual Fund Split Bar */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="flex items-center gap-1.5 text-amber-700">
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-500 inline-block" />
                  ₹{fundApplied.toLocaleString('en-IN')} from fund ({fundPercentage}%)
                </span>
                <span className="flex items-center gap-1.5 text-indigo-700">
                  <span className="h-2.5 w-2.5 rounded-full bg-indigo-600 inline-block" />
                  ₹{balanceOnEmi.toLocaleString('en-IN')} on EMI ({emiPercentage}%)
                </span>
              </div>

              {/* Progress Split Bar */}
              <div className="h-4 w-full rounded-full bg-slate-200 overflow-hidden flex p-0.5 border border-slate-300">
                <div
                  className="h-full rounded-l-full bg-amber-500 transition-all duration-300"
                  style={{ width: `${fundPercentage}%` }}
                />
                <div
                  className="h-full rounded-r-full bg-indigo-600 transition-all duration-300"
                  style={{ width: `${emiPercentage}%` }}
                />
              </div>
            </div>

            {/* Calculated Monthly EMI Banner */}
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50/80 p-5 text-center space-y-1">
              <span className="text-xs uppercase font-bold tracking-wider text-emerald-900 block">
                Your Monthly Out-of-Pocket EMI
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-700">
                ₹{monthlyEmi.toLocaleString('en-IN')}
                <span className="text-sm font-normal text-slate-600"> / month × {tenureMonths}</span>
              </div>
              <p className="text-[11px] text-emerald-800 font-semibold">
                0% interest, ever · Zero documentation charges
              </p>
            </div>

            {/* AutoPay Daily Equivalent */}
            <div className="rounded-xl bg-white p-3 text-xs text-slate-600 border border-slate-200 flex items-center justify-between shadow-xs">
              <span className="text-slate-500">Daily habit equivalent:</span>
              <span className="font-bold text-amber-700">
                Just ₹{Math.round(monthlyEmi / 30)}/day via UPI AutoPay
              </span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-200 space-y-3">
            <Link
              to="/signup"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-black shadow-md shadow-orange-500/20 hover:from-amber-400 hover:to-orange-400 transition cursor-pointer"
            >
              <Sparkles className="h-4 w-4" />
              <span>Start Auto-Saving for this Appliance</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500 font-medium">
              <span className="flex items-center gap-1">
                <ShieldCheck className="h-3 w-3 text-emerald-600" /> Audited Double-Entry Ledger
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="h-3 w-3 text-emerald-600" /> Cancel or Withdraw Anytime
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
