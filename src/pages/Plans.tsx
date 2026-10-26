import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, Sparkles, ArrowRight, ShieldCheck, Award } from 'lucide-react'

const plans = [
  {
    name: 'Smart Essentials Gold',
    badge: 'Starter Tier',
    tenure: '9-Month Secure Plan',
    monthlyPrice: '3,000',
    totalAccumulated: '₹27,000 Total Value',
    target: 'Smartphones, 43" 4K Smart TVs, Audio Systems',
    popularBrands: ['OnePlus', 'LG', 'Samsung', 'boAt'],
    benefits: [
      '9-Month Secure Tenure Plan',
      '0% Interest Guaranteed across entire tenure',
      'Zero documentation & zero processing fee',
      '500 Milestone Reward Points on on-time installments',
      'Direct fulfillment via Croma or Vijay Sales',
      'Flexible emergency pause or early closure'
    ],
    highlight: false,
    ctaText: 'Start Gold Plan'
  },
  {
    name: 'Prime Platinum Flagship',
    badge: 'Most Popular',
    tenure: '12-Month High-Yield Plan',
    monthlyPrice: '5,000',
    totalAccumulated: '₹60,000 Total Value',
    target: 'Sony Bravia 55", Samsung S24, LG AI Washers, Daikin AC',
    popularBrands: ['Sony', 'Apple', 'Samsung', 'Daikin', 'LG'],
    benefits: [
      '12-Month Structured Tenure Plan',
      '0% Interest with 100% transparent escrow tracking',
      '1,250 Milestone Points (redeemable for accessories)',
      'Free VIP Doorstep Delivery & Authorized Brand Installation',
      'Official Manufacturer Direct Service Warranty',
      'Priority Customer Success & fast track allocation'
    ],
    highlight: true,
    ctaText: 'Start Prime Platinum'
  },
  {
    name: 'Sovereign Elite Assets',
    badge: 'Ultra Premium',
    tenure: '12 to 18-Month Plan',
    monthlyPrice: '7,500',
    totalAccumulated: '₹90,000 – ₹1,35,000 Total Value',
    target: 'Apple iPhone 16 Pro, MacBook Air M2, Tanishq 24K Gold Coin',
    popularBrands: ['Apple', 'Tanishq (Tata)', 'Dyson', 'Sony'],
    benefits: [
      'Flexible 12 to 18-Month Tenure Plan',
      'Complimentary Gold Protection / Extended Tech Shield',
      '2,500 Milestone Reward Points upon milestone completion',
      'Tanishq Tamper-Proof CertiCard guaranteed 24K purity',
      'Dedicated Personal Wealth & Relationship Concierge',
      'First-in-line access to new flagship launch hardware'
    ],
    highlight: false,
    ctaText: 'Start Sovereign Elite'
  }
]

export default function Plans() {
  return (
    <div className="min-h-screen bg-[#0B0F19] py-16 text-slate-100 radial-mesh">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-indigo-400 backdrop-blur-md mb-4 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
            <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
            <span>FinTech Milestone Matrix</span>
          </div>
          <h1 className="text-4xl font-extrabold sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-indigo-300 tracking-tight">
            Disciplined Savings for Sovereign Hardware
          </h1>
          <p className="mt-4 text-base text-slate-400 leading-relaxed">
            Choose a monthly installment tier engineered for your financial discipline. 100% transparent, zero hidden charges, and direct authorized brand delivery.
          </p>
        </div>

        {/* Pricing Matrix Cards */}
        <div className="mt-14 grid gap-8 lg:grid-cols-3 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col justify-between rounded-3xl p-8 backdrop-blur-md relative transition-all duration-300 ${
                plan.highlight
                  ? 'bg-gradient-to-b from-[#1E293B] to-[#131B2E] border-2 border-indigo-500 shadow-[0_0_40px_rgba(99,102,241,0.25)] lg:-translate-y-3'
                  : 'bg-[#131B2E]/70 border border-white/10 hover:border-white/20 shadow-xl'
              }`}
            >
              {/* Floating Pill Badge */}
              {plan.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500 via-indigo-600 to-emerald-500 px-4 py-1 text-[11px] font-extrabold uppercase tracking-widest text-white shadow-[0_0_20px_rgba(99,102,241,0.6)]">
                  ★ {plan.badge}
                </div>
              )}

              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">
                    {plan.name}
                  </span>
                  {!plan.highlight && (
                    <span className="rounded-md bg-white/5 px-2.5 py-0.5 text-[10px] font-semibold text-slate-400 border border-white/5">
                      {plan.badge}
                    </span>
                  )}
                </div>

                {/* Big Bold Pricing Header */}
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                    ₹{plan.monthlyPrice}
                  </span>
                  <span className="text-sm font-medium text-slate-400">/ month</span>
                </div>
                <div className="mt-1.5 flex items-center gap-2">
                  <span className="text-xs font-semibold text-emerald-400">{plan.totalAccumulated}</span>
                  <span className="text-slate-600">·</span>
                  <span className="text-xs text-slate-400">{plan.tenure}</span>
                </div>

                {/* Target Hardware */}
                <div className="mt-6 rounded-xl bg-[#0B0F19]/60 p-3.5 border border-white/5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300 block mb-1">
                    Ideal Acquisition:
                  </span>
                  <p className="text-xs text-slate-400 leading-relaxed">{plan.target}</p>
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {plan.popularBrands.map((b) => (
                      <span
                        key={b}
                        className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] font-semibold text-slate-300 border border-white/5"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Structured Checkmark Matrix */}
                <div className="mt-6 border-t border-white/10 pt-5 space-y-3">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Plan Highlights</p>
                  <ul className="space-y-2.5 text-xs text-slate-300">
                    {plan.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4">
                <Link
                  to="/signup"
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    plan.highlight
                      ? 'bg-gradient-to-r from-indigo-500 to-indigo-600 text-white shadow-[0_0_25px_rgba(99,102,241,0.4)] hover:from-indigo-600 hover:to-indigo-700 hover:shadow-[0_0_35px_rgba(99,102,241,0.6)]'
                      : 'bg-white/10 text-white hover:bg-white/15 border border-white/10'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Authenticity Seal */}
        <div className="mt-14 rounded-2xl bg-[#131B2E]/60 border border-white/10 p-6 backdrop-blur-md max-w-4xl mx-auto shadow-xl flex items-start gap-4">
          <ShieldCheck className="h-6 w-6 text-emerald-400 shrink-0 mt-1" />
          <div className="text-xs text-slate-300 leading-relaxed">
            <strong className="text-white">Institutional Escrow &amp; Brand Guarantee:</strong> All member contributions are safeguarded in RBI-compliant escrow frameworks. Fulfillment is guaranteed through authorized direct distribution contracts with Apple India, Samsung, Sony, LG, Daikin, Dyson, and Tanishq (Tata).
          </div>
        </div>

      </div>
    </div>
  )
}
