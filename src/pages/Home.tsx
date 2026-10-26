import React from 'react'
import { Link } from 'react-router-dom'
import { productsData } from '../data/products'
import {
  ShieldCheck,
  Zap,
  TrendingUp,
  Award,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Clock,
  Lock,
  Layers,
  ChevronRight,
  CreditCard,
  Percent,
  Truck,
  Flame
} from 'lucide-react'

export default function Home() {
  const featuredProducts = productsData.slice(0, 4)

  const valueProps = [
    {
      icon: <Percent className="w-5 h-5 text-emerald-400" />,
      badge: '0% Interest Dues',
      title: 'Zero Compounding Debt',
      description: 'Predictable fixed monthly savings. No balloon fees, no credit card interest traps, and full regulatory transparency.'
    },
    {
      icon: <Award className="w-5 h-5 text-indigo-400" />,
      badge: '100% Genuine Brands',
      title: 'Authorized Retail Seal',
      description: 'Fulfilled directly via Croma, Reliance Digital, and Tanishq with original tax invoice and pan-India warranty.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-cyan-400" />,
      badge: 'Audited Escrow Custody',
      title: 'Bank-Grade Milestone Security',
      description: 'Every monthly installment is tracked on an audit-ready ledger with automated milestone rewards and flexible settlements.'
    }
  ]

  const pricingTiers = [
    {
      name: 'Essential Smart Plan',
      tier: 'Tier 01',
      monthly: '₹3,000',
      tenure: '9 Months Tenure',
      totalVal: '₹27,000 Total Capital',
      badge: 'Smart Entry',
      isPopular: false,
      target: 'OnePlus 12R, LG 43" 4K Smart TVs, Audio Systems',
      features: [
        '9-Month disciplined tenure structure',
        '0% Interest dues with zero processing charges',
        '500 Milestone Loyalty Points upon completion',
        'Croma & Vijay Sales partner fulfillment warranty',
        'Instant digital account statement on portal'
      ]
    },
    {
      name: 'Prime Flagship Club',
      tier: 'Tier 02 · Recommended',
      monthly: '₹5,000',
      tenure: '12 Months Tenure',
      totalVal: '₹60,000 Total Capital',
      badge: 'Most Popular',
      isPopular: true,
      target: 'Sony Bravia 55" 4K, Samsung S24, LG AI Washer, Daikin AC',
      features: [
        '12-Month balanced milestone savings schedule',
        'Guaranteed zero hidden charges & interest waiver',
        '1,250 Milestone Reward Credits + accessories voucher',
        'Free VIP home delivery & verified brand installation',
        'Priority concierge support & warranty registration'
      ]
    },
    {
      name: 'Sovereign Bullion & Tech',
      tier: 'Tier 03',
      monthly: '₹7,500',
      tenure: '12 to 18 Months Tenure',
      totalVal: '₹90,000 to ₹1,35,000',
      badge: 'High Value',
      isPopular: false,
      target: 'Apple iPhone 16 Pro, MacBook Air M2, Tanishq 24K Gold Coin',
      features: [
        '12 to 18-Month flexible high-ticket savings path',
        'Tanishq 24K (999.9) Tamper-Proof CertiCard Gold',
        '2,500 Exclusive Milestone Tier Credits',
        'Dedicated Personal Relationship Wealth Concierge',
        '100% Guaranteed buyback and liquidity options'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 radial-mesh">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.25fr_0.95fr] lg:items-center">
            
            {/* Left Column: Headline & Value Narrative */}
            <div>
              {/* Dynamic Live Tag */}
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1.5 text-xs font-mono font-medium text-indigo-300 backdrop-blur-md shadow-sm mb-6">
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="tracking-wide">NEXT-GEN FINTECH SAVINGS // 0% INTEREST</span>
              </div>

              {/* Main Headline with White-to-Indigo Gradient */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-extrabold tracking-tight leading-[1.08] text-white">
                Build Today. <br />
                <span className="bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent">
                  Own Tomorrow.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                A disciplined savings and milestone finance platform engineered for aspirational living. Acquire genuine flagship electronics, smart appliances, and hallmarked gold with zero compounding debt.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  to="/products"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-indigo-500/50"
                >
                  <Sparkles className="w-4 h-4 text-emerald-300" />
                  <span>Explore Brand Catalog</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/plans"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-200 backdrop-blur-md transition-all hover:bg-white/[0.08] hover:border-indigo-400/50 hover:text-white"
                >
                  <span>Compare Milestone Plans</span>
                </Link>
              </div>

              {/* Thin-line Metrics / Trust Strip */}
              <div className="mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-8 max-w-lg">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">0%</div>
                  <div className="mt-1 text-xs text-slate-400 font-medium">Interest &amp; Fees</div>
                </div>
                <div className="border-l border-white/10 pl-4">
                  <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">100%</div>
                  <div className="mt-1 text-xs text-slate-400 font-medium">Genuine Brand Seal</div>
                </div>
                <div className="border-l border-white/10 pl-4">
                  <div className="text-2xl sm:text-3xl font-extrabold text-indigo-400 font-mono">₹4.8 Cr+</div>
                  <div className="mt-1 text-xs text-slate-400 font-medium">Delivered to Date</div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Glassmorphic Value Proposition Cards */}
            <div className="space-y-4">
              <div className="flex items-center justify-between px-1 mb-2">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                  // PLATFORM ADVANTAGES
                </span>
                <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Audited Escrow Operations
                </span>
              </div>

              {valueProps.map((item, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-2xl border border-white/10 bg-[#131B2E]/70 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo-500/40 hover:shadow-glow-indigo cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1E293B] border border-white/10 text-white shadow-inner group-hover:border-indigo-500/40 group-hover:scale-105 transition-all">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="rounded-full bg-white/5 px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-300 border border-white/10 group-hover:border-indigo-500/30 group-hover:text-indigo-300 transition-colors">
                          {item.badge}
                        </span>
                        <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
                      </div>
                      <h3 className="mt-2 text-base font-bold text-white group-hover:text-indigo-100 transition">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Featured Luxury Brands & Products Showcase */}
      <section className="relative border-t border-white/10 bg-[#0F172A]/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 mb-2">
                <Flame className="w-3.5 h-3.5 text-indigo-400" />
                CURATED HARDWARE CATALOG
              </div>
              <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight">
                Flagship Products from Authorized Partners
              </h2>
              <p className="mt-2 text-sm text-slate-400">
                Guaranteed brand-new factory sealed units from Apple, Sony, Samsung, Daikin, and Tanishq.
              </p>
            </div>
            
            <Link
              to="/products"
              className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400 hover:text-indigo-300 transition"
            >
              <span>View All 12+ Brand Hardware</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* 4 Featured Products Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <div
                key={product.sku}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#131B2E]/60 backdrop-blur-md p-4 transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo-500/40 hover:shadow-glow-indigo"
              >
                <div>
                  {/* Image Container with Geometric Abstract Gradient Field */}
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-gradient-to-br from-slate-900 via-[#1E293B] to-[#131B2E] border border-white/5">
                    {/* Subtle geometric pattern overlay */}
                    <div className="absolute inset-0 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    
                    {/* Brand Pill */}
                    <span className="absolute top-2.5 left-2.5 rounded-lg bg-[#0B0F19]/80 backdrop-blur-md px-2.5 py-1 text-[10px] font-mono font-bold uppercase text-white border border-white/10">
                      {product.brand}
                    </span>

                    {/* Neon Emerald Glowing Dot (In Stock Indicator) */}
                    <span className="absolute top-2.5 right-2.5 flex items-center gap-1.5 rounded-full bg-[#0B0F19]/80 backdrop-blur-md px-2.5 py-1 text-[10px] font-medium text-emerald-300 border border-emerald-500/30">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      <span>In Stock</span>
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="mt-4">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-400">
                      {product.category}
                    </span>
                    <h3 className="mt-1 text-sm font-bold text-white line-clamp-1 group-hover:text-indigo-200 transition">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>

                {/* Footer Pricing & CTA */}
                <div className="mt-5 pt-3.5 border-t border-white/10">
                  <div className="flex items-baseline justify-between mb-3">
                    <div>
                      <span className="text-[10px] uppercase font-mono text-slate-400 block">Milestone EMI</span>
                      <span className="text-lg font-bold font-mono text-emerald-400">
                        ₹{product.monthlyEmi12.toLocaleString()}
                      </span>
                      <span className="text-[10px] text-slate-400"> /mo (12m)</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-slate-500 block">Total Capital</span>
                      <span className="text-xs font-semibold text-slate-300 font-mono">{product.formattedPrice}</span>
                    </div>
                  </div>

                  <Link
                    to={`/products/${product.sku}`}
                    className="inline-flex w-full items-center justify-center rounded-xl bg-white/5 border border-white/10 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all duration-200 hover:bg-indigo-600 hover:border-indigo-500 group-hover:shadow-md"
                  >
                    View Details &amp; Plan
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Pricing Matrix Section */}
      <section id="plans" className="py-20 sm:py-28 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 mb-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              STRUCTURED SAVINGS MATRIX
            </div>
            <h2 className="text-3xl sm:text-5xl font-sans font-bold text-white tracking-tight">
              Predictable Monthly Plans. <br />
              <span className="bg-gradient-to-r from-emerald-400 to-indigo-400 bg-clip-text text-transparent">
                Zero Compounding Interest.
              </span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed">
              Select your monthly installment tier. Every plan accumulates capital towards authentic brand hardware with guaranteed milestone bonuses.
            </p>
          </div>

          {/* Pricing Cards Matrix */}
          <div className="grid gap-8 lg:grid-cols-3 items-stretch">
            {pricingTiers.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col justify-between rounded-2xl p-8 backdrop-blur-xl transition-all duration-300 ${
                  plan.isPopular
                    ? 'bg-[#131B2E] border-2 border-indigo-500 shadow-glow-indigo lg:-translate-y-3'
                    : 'bg-[#131B2E]/60 border border-white/10 hover:border-white/20'
                }`}
              >
                {/* Floating "Most Popular" Pill Badge */}
                {plan.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 px-4 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-white shadow-lg shadow-indigo-500/50">
                      <Sparkles className="w-3 h-3 text-emerald-300" />
                      MOST POPULAR CONVERSION
                    </span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                      {plan.tier}
                    </span>
                    <span className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] font-mono font-semibold text-slate-300 border border-white/10">
                      {plan.tenure}
                    </span>
                  </div>

                  <h3 className="mt-3 text-xl font-bold text-white">{plan.name}</h3>

                  {/* Large Bold Pricing Value */}
                  <div className="mt-5 flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-extrabold font-mono text-white">
                      {plan.monthly}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">/ month</span>
                  </div>
                  <p className="mt-1 text-xs font-semibold text-emerald-400 font-mono">
                    {plan.totalVal}
                  </p>

                  <div className="mt-6 border-t border-white/10 pt-4">
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-400 block mb-1">
                      Target Equipment:
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed font-medium">
                      {plan.target}
                    </p>
                  </div>

                  {/* Structured Checklist with Thin-line Icons */}
                  <div className="mt-6 space-y-3 border-t border-white/10 pt-6">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-5">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sleek Rounded Rectangle CTA Button */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <Link
                    to="/signup"
                    className={`inline-flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md ${
                      plan.isPopular
                        ? 'bg-gradient-to-r from-indigo-500 to-indigo-600 text-white hover:from-indigo-600 hover:to-indigo-700 shadow-indigo-500/25 hover:shadow-indigo-500/40'
                        : 'border border-white/15 bg-white/5 text-white hover:bg-white/10 hover:border-white/30'
                    }`}
                  >
                    <span>Activate {plan.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Authorized Retail Partners Marquee Bar */}
      <section className="border-y border-white/10 bg-[#0F172A]/50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-slate-400 mb-8">
            // FULFILLMENT &amp; DIRECT LOGISTICS INFRASTRUCTURE
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-sm font-mono font-semibold text-slate-300">
            <span className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500/40 transition">
              CROMA · A TATA ENTERPRISE
            </span>
            <span className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500/40 transition">
              RELIANCE DIGITAL
            </span>
            <span className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500/40 transition">
              VIJAY SALES
            </span>
            <span className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500/40 transition">
              TANISHQ JEWELLERY
            </span>
            <span className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500/40 transition">
              TATA CLIQ LUXURY
            </span>
          </div>
        </div>
      </section>

    </div>
  )
}
