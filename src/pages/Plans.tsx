import React from 'react'
import { Link } from 'react-router-dom'

const plans = [
  {
    name: 'Smart Essentials Club',
    tenure: '9 Months Tenure',
    monthly: '₹3,000 / month',
    total: '₹27,000 Accumulated',
    target: 'Smartphones, 43" 4K Smart TVs, Audio Systems',
    popularBrands: ['OnePlus', 'LG', 'Samsung', 'boAt'],
    benefits: [
      'Zero Interest · No processing fee',
      '500 Bonus Reward Points on on-time EMIs',
      'Delivery via Croma or Vijay Sales',
      'Option to top-up anytime'
    ],
    highlight: false
  },
  {
    name: 'Prime Flagship Club',
    tenure: '12 Months Tenure',
    monthly: '₹5,000 / month',
    total: '₹60,000 Accumulated',
    target: 'Sony Bravia 55", Samsung S24, LG AI Washers, Daikin AC',
    popularBrands: ['Sony', 'Apple', 'Samsung', 'Daikin', 'LG'],
    benefits: [
      'Zero Interest · 100% Transparent installment schedule',
      '1,250 Milestone Points (redeemable for accessories)',
      'Free VIP Doorstep Delivery & Brand Installation',
      'Manufacturer direct official warranties'
    ],
    highlight: true
  },
  {
    name: 'Sovereign Gold & Luxury',
    tenure: '12 to 18 Months Tenure',
    monthly: '₹7,500 / month',
    total: '₹90,000 to ₹1,35,000 Accumulated',
    target: 'Apple iPhone 16 Pro, MacBook Air M2, Tanishq 24K Gold Coin',
    popularBrands: ['Apple', 'Tanishq (Tata)', 'Dyson', 'Sony'],
    benefits: [
      'Complimentary Gold Protection / Extended Tech Shield',
      '2,500 Milestone Reward Points',
      'Tanishq Tamper-Proof CertiCard guaranteed purity',
      'Personal Relationship Manager assistance'
    ],
    highlight: false
  }
]

export default function Plans() {
  return (
    <div className="min-h-screen bg-cream py-16 text-navy">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-maroon">
            Membership Savings Plans
          </p>
          <h1 className="mt-3 text-4xl font-serif font-bold text-navy sm:text-5xl">
            Disciplined Savings for Original Brands
          </h1>
          <p className="mt-4 text-sm text-slate-600 leading-relaxed">
            Choose a monthly installment tier that suits your budget. Complete your plan with 0% interest and take home verified authentic products from India's most trusted brands.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col justify-between rounded-[2.5rem] border bg-white p-8 shadow-md transition hover:shadow-xl relative ${
                plan.highlight
                  ? 'border-brand-maroon ring-2 ring-brand-maroon/20 md:-translate-y-2'
                  : 'border-brand-gold/20'
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-brand-maroon px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">
                  Most Chosen by Members
                </span>
              )}

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-maroon">
                  {plan.name}
                </p>
                <div className="mt-4">
                  <span className="text-3xl font-serif font-bold text-navy">{plan.monthly}</span>
                  <p className="text-xs text-slate-500 font-medium mt-1">{plan.tenure}</p>
                </div>
                <div className="mt-2 text-xs font-semibold text-emerald-700">
                  {plan.total}
                </div>

                <div className="mt-6 border-t border-slate-100 pt-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-navy mb-2">Ideal For:</p>
                  <p className="text-xs text-slate-600 leading-5">{plan.target}</p>
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {plan.popularBrands.map((b) => (
                    <span
                      key={b}
                      className="rounded-md bg-brand-cream px-2 py-0.5 text-[10px] font-bold text-slate-700 border border-brand-gold/15"
                    >
                      {b}
                    </span>
                  ))}
                </div>

                <ul className="mt-6 space-y-3 border-t border-slate-100 pt-5 text-xs text-slate-600">
                  {plan.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-brand-maroon font-bold">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4">
                <Link
                  to="/signup"
                  className={`inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-xs font-bold uppercase tracking-wider transition ${
                    plan.highlight
                      ? 'bg-brand-maroon text-white hover:bg-[#431523] shadow-md shadow-brand-maroon/20'
                      : 'border border-brand-maroon bg-white text-brand-maroon hover:bg-brand-maroon hover:text-white'
                  }`}
                >
                  Join {plan.name}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Guarantee Note */}
        <div className="mt-12 rounded-3xl bg-white p-6 border border-brand-gold/20 shadow-sm text-center max-w-4xl mx-auto">
          <p className="text-xs text-slate-600">
            <strong>Authenticity Guarantee:</strong> All goods are sourced exclusively from authorized distributors (Apple India, Samsung India, Sony India, Tanishq / Titan Company Ltd, LG Electronics, Daikin India). All products carry original tax invoices and complete manufacturer warranty cards.
          </p>
        </div>
      </div>
    </div>
  )
}
