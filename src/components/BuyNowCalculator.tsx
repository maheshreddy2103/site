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
    <div className="rounded-3xl border border-white/10 bg-[#131B2E]/90 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold text-amber-400 mb-2">
            <Calculator className="h-3.5 w-3.5" />
            <span>Interactive Buy-Now Calculator</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            See how your savings fund cuts your monthly EMI to 0% interest
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-400">
            The fund pays first. Any remaining balance becomes a clear, interest-free monthly instalment.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-2 text-xs font-bold text-emerald-400 flex items-center gap-1.5 shadow-sm">
            <Percent className="h-4 w-4" />
            <span>0% Interest · No Processing Fee</span>
          </span>
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        {/* Controls Column */}
        <div className="lg:col-span-7 space-y-6">
          {/* 1. Select Appliance */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-2">
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
                    className={`rounded-xl p-3 text-left transition border cursor-pointer ${
                      isSelected
                        ? 'border-indigo-500 bg-indigo-500/15 shadow-md shadow-indigo-500/20'
                        : 'border-white/10 bg-[#0B0F19]/60 hover:bg-white/5'
                    }`}
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block truncate">
                      {item.category}
                    </span>
                    <span className="text-xs font-bold text-white block truncate mt-0.5">
                      {item.name}
                    </span>
                    <span className="text-xs font-extrabold text-emerald-400 mt-1 block">
                      {item.formattedPrice}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* 2. Savings Fund Slider */}
          <div className="rounded-2xl bg-[#0B0F19]/80 p-5 border border-white/5 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
                  Step 2: Your Savings Fund Balance
                </span>
                <span className="text-[11px] text-slate-400">
                  Built through auto-save (e.g. ₹50/day or ₹1,500/mo)
                </span>
              </div>
              <div className="text-right">
                <span className="text-2xl font-extrabold text-amber-400">
                  ₹{savingsFund.toLocaleString('en-IN')}
                </span>
                <span className="text-[10px] text-slate-400 block">Paid from fund</span>
              </div>
            </div>

            <input
              type="range"
              min="0"
              max={maxSavings}
              step="500"
              value={savingsFund}
              onChange={(e) => setSavingsFund(Number(e.target.value))}
              className="w-full h-2 rounded-lg bg-slate-800 accent-amber-400 cursor-pointer"
            />

            <div className="flex justify-between text-[11px] text-slate-500 font-mono">
              <span>₹0 (0% Saved)</span>
              <span>₹{(product.price * 0.5).toLocaleString('en-IN')} (50% Saved)</span>
              <span>₹{maxSavings.toLocaleString('en-IN')} Max</span>
            </div>

            {/* Quick Presets */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/5">
              <span className="text-[10px] font-semibold uppercase text-slate-400">Quick Fill:</span>
              {[2000, 5000, 10000, 15000].map((amt) => (
                <button
                  key={amt}
                  type="button"
                  onClick={() => setSavingsFund(Math.min(amt, maxSavings))}
                  className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-slate-300 hover:text-white hover:bg-white/10 transition cursor-pointer"
                >
                  ₹{amt.toLocaleString('en-IN')}
                </button>
              ))}
            </div>
          </div>

          {/* 3. Tenure Selection */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-2">
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
                      ? 'border-emerald-500 bg-emerald-500/15 text-white font-bold shadow-md shadow-emerald-500/20'
                      : 'border-white/10 bg-[#0B0F19]/60 text-slate-400 hover:text-white'
                  }`}
                >
                  <span className="text-sm font-extrabold block">{m} Months</span>
                  <span className="text-[10px] text-emerald-400">0% Interest</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Visual Live Breakdown (Matches Proposal Screen) */}
        <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0B0F19] p-6 shadow-xl">
          <div className="space-y-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                Purchase Summary
              </span>
              <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-bold text-emerald-400 border border-emerald-500/30">
                100% Genuine Brand Unit
              </span>
            </div>

            {/* Product Card Snippet */}
            <div className="flex items-center gap-4 rounded-xl bg-white/[0.03] p-3 border border-white/5">
              <img
                src={product.image}
                alt={product.name}
                className="h-16 w-16 rounded-lg object-cover border border-white/10"
              />
              <div className="min-w-0 flex-1">
                <span className="text-[10px] uppercase font-mono text-slate-400 block">
                  {product.brand} · {product.category}
                </span>
                <h4 className="text-sm font-bold text-white truncate">{product.name}</h4>
                <div className="text-base font-extrabold text-white mt-0.5">
                  {product.formattedPrice}
                </div>
              </div>
            </div>

            {/* Visual Fund Split Bar */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5 font-bold text-amber-400">
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400 inline-block" />
                  ₹{fundApplied.toLocaleString('en-IN')} from fund ({fundPercentage}%)
                </span>
                <span className="flex items-center gap-1.5 font-bold text-indigo-400">
                  <span className="h-2.5 w-2.5 rounded-full bg-indigo-500 inline-block" />
                  ₹{balanceOnEmi.toLocaleString('en-IN')} on EMI ({emiPercentage}%)
                </span>
              </div>

              {/* Progress Split Bar */}
              <div className="h-4 w-full rounded-full bg-slate-800 overflow-hidden flex p-0.5 border border-white/10">
                <div
                  className="h-full rounded-l-full bg-amber-400 transition-all duration-300"
                  style={{ width: `${fundPercentage}%` }}
                />
                <div
                  className="h-full rounded-r-full bg-indigo-500 transition-all duration-300"
                  style={{ width: `${emiPercentage}%` }}
                />
              </div>
            </div>

            {/* Calculated Monthly EMI Banner */}
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-5 text-center space-y-1">
              <span className="text-xs uppercase font-bold tracking-wider text-slate-300 block">
                Your Monthly Out-of-Pocket EMI
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400">
                ₹{monthlyEmi.toLocaleString('en-IN')}
                <span className="text-sm font-normal text-slate-300"> / month × {tenureMonths}</span>
              </div>
              <p className="text-[11px] text-emerald-300 font-medium">
                0% interest, ever · Zero documentation charges
              </p>
            </div>

            {/* AutoPay Daily Equivalent */}
            <div className="rounded-xl bg-white/[0.03] p-3 text-xs text-slate-300 border border-white/5 flex items-center justify-between">
              <span className="text-slate-400">Daily habit equivalent:</span>
              <span className="font-bold text-amber-300">
                Just ₹{Math.round(monthlyEmi / 30)}/day via UPI AutoPay
              </span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 space-y-3">
            <Link
              to="/signup"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-black shadow-lg shadow-emerald-500/30 hover:from-emerald-400 hover:to-emerald-500 transition cursor-pointer"
            >
              <Sparkles className="h-4 w-4" />
              <span>Start Auto-Saving for this Appliance</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400">
              <span className="flex items-center gap-1">
                <ShieldCheck className="h-3 w-3 text-emerald-400" /> Audited Double-Entry Ledger
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="h-3 w-3 text-emerald-400" /> Cancel or Withdraw Anytime
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
