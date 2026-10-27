import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { productsData } from '../data/products'
import BuyNowCalculator from '../components/BuyNowCalculator'
import {
  ShieldCheck,
  Zap,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Clock,
  Lock,
  Percent,
  Truck,
  Flame,
  Smartphone,
  Globe,
  LayoutDashboard,
  Database,
  Layers,
  Check,
  Bell,
  RefreshCw,
  Search,
  ExternalLink,
  Wallet
} from 'lucide-react'

export default function Home() {
  const featuredAppliances = productsData.slice(0, 4)

  const applianceCategories = [
    { name: 'Refrigerators', icon: '❄️', count: '14 Models', slug: 'Refrigerators' },
    { name: 'Air Conditioners', icon: '💨', count: '18 Models', slug: 'Air Conditioners' },
    { name: 'Washing Machines', icon: '🧺', count: '12 Models', slug: 'Washing Machines' },
    { name: 'Televisions', icon: '📺', count: '16 Models', slug: 'Televisions' },
    { name: 'Kitchen Appliances', icon: '🍳', count: '24 Models', slug: 'Kitchen Appliances' },
    { name: 'Water Purifiers', icon: '💧', count: '8 Models', slug: 'Water Purifiers' }
  ]

  const fiveStepFlow = [
    {
      num: '01',
      title: 'Set up auto-save',
      desc: 'Pick a daily, weekly or monthly amount. UPI AutoPay collects it automatically.'
    },
    {
      num: '02',
      title: 'Build the fund',
      desc: 'Every debit adds to your own savings fund, visible in real time with full history.'
    },
    {
      num: '03',
      title: 'Shop anytime',
      desc: 'Browse the catalogue and pick an appliance — no need to wait until the full price is saved.'
    },
    {
      num: '04',
      title: 'Pay the rest at 0%',
      desc: 'The fund is applied first; the remaining balance is split into no-cost EMIs.'
    },
    {
      num: '05',
      title: 'Receive at home',
      desc: 'The appliance is delivered to your doorstep; EMIs are auto-debited on schedule.'
    }
  ]

  const corePillars = [
    {
      badge: 'Habit, not effort',
      title: 'Automatic Micro-Debits',
      desc: 'Automatic small debits remove the need for willpower. Customers save without having to remember to.',
      icon: <Zap className="h-5 w-5 text-amber-500" />
    },
    {
      badge: 'Buy now, not someday',
      title: 'Zero Waiting Period',
      desc: 'Customers don’t have to wait until the full price is saved — whatever is in the fund makes the purchase affordable today.',
      icon: <Sparkles className="h-5 w-5 text-indigo-600" />
    },
    {
      badge: 'Zero interest, zero surprises',
      title: 'Pure 0% No-Cost EMI',
      desc: 'Clear EMI schedules with no interest, a transparent double-entry fund ledger and instant statements build lasting trust.',
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />
    }
  ]

  const threeExperiences = [
    {
      id: '01',
      title: 'Customer Web Portal',
      lineItem: 'Line Item 2 · Web Platform',
      icon: <Globe className="h-6 w-6 text-indigo-600" />,
      desc: 'Responsive web — the full savings journey in any browser: auto-save mandates, live double-entry ledger, appliance catalogue, and instant 0% EMI checkout.',
      features: ['Full desktop & mobile browser journey', 'Interactive Buy-Now Calculator', 'Self-service KYC & mandate pause/resume', 'Downloadable tax invoices & ledger statements']
    },
    {
      id: '02',
      title: 'Admin & Operations Console',
      lineItem: 'Line Item 2 · Management Desk',
      icon: <LayoutDashboard className="h-6 w-6 text-emerald-600" />,
      desc: 'Your team’s control room — customers, collections, appliance catalogue, partner fulfillment, and comprehensive financial reconciliation.',
      features: ['Real-time collections & mandate tracking', 'Double-entry ledger audit trail', 'Catalogue & retail partner inventory control', 'Maker-checker approval workflows']
    },
    {
      id: '03',
      title: 'Customer Mobile App',
      lineItem: 'Line Item 1 · Android & iOS',
      icon: <Smartphone className="h-6 w-6 text-amber-600" />,
      desc: 'A polished, fast, and trustworthy app — the everyday touchpoint built for Indian households on entry-level smartphones & patchy networks.',
      features: ['Mobile-number OTP & biometric login', '1-tap UPI AutoPay pause & modify', 'Instant push alerts for daily debits', 'Offline-resilient state caching']
    }
  ]

  const securityPillars = [
    {
      title: 'Double-Entry Ledger',
      desc: 'Every rupee in and out is recorded as balanced entries, so any balance can be rebuilt and audited at any time.',
      icon: <Database className="h-4 w-4 text-emerald-600" />
    },
    {
      title: 'Encryption Everywhere',
      desc: 'TLS in transit and encryption at rest; sensitive identifiers are masked or tokenised. Card data never touches our servers.',
      icon: <Lock className="h-4 w-4 text-indigo-600" />
    },
    {
      title: 'Maker-Checker Controls',
      desc: 'Withdrawals, refunds and manual adjustments need a second approver before they take effect.',
      icon: <ShieldCheck className="h-4 w-4 text-teal-600" />
    },
    {
      title: 'Idempotent Payments',
      desc: 'Duplicate-safe payment webhooks and automated daily reconciliation against gateway settlements.',
      icon: <RefreshCw className="h-4 w-4 text-cyan-600" />
    },
    {
      title: 'Security-Tested',
      desc: 'OWASP-aligned vulnerability testing and penetration audit completed prior to production go-live.',
      icon: <CheckCircle2 className="h-4 w-4 text-emerald-600" />
    },
    {
      title: 'Full Audit Trail',
      desc: 'Role-based access for every team member, with every admin action logged and time-stamped.',
      icon: <Clock className="h-4 w-4 text-amber-600" />
    }
  ]

  return (
    <div className="bg-[#F8FAFC] text-slate-900 min-h-screen selection:bg-indigo-500 selection:text-white">
      
      {/* 1. HERO SECTION ("Save a little. Bring home a lot.") */}
      <section className="relative overflow-hidden pt-10 pb-20 lg:pt-16 lg:pb-28 border-b border-slate-200 bg-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-indigo-500/10 via-amber-500/5 to-transparent blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Core Value Proposition */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-[11px] font-bold tracking-wider uppercase text-indigo-700 shadow-2xs">
                <span>MOBILE APPLICATION + WEB APPLICATION PLATFORM</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08]">
                Save a little.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600">
                  Bring home a lot.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
                An auto-savings platform where customers build a fund through small automatic debits — and can buy home appliances anytime, using their savings, with the balance on no-cost EMI.
              </p>

              {/* Proposal Metadata Callout */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm max-w-xl">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block">Prepared For</span>
                    <span className="font-extrabold text-slate-900 text-sm">Mr. Naveen</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block">Engagement</span>
                    <span className="font-bold text-indigo-700 text-xs">Mobile App + Web App</span>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block">Channels</span>
                    <div className="flex gap-1.5 mt-0.5">
                      <span className="rounded bg-white border border-slate-200 px-1.5 py-0.5 text-[10px] font-bold text-slate-700 shadow-2xs">Android</span>
                      <span className="rounded bg-white border border-slate-200 px-1.5 py-0.5 text-[10px] font-bold text-slate-700 shadow-2xs">iOS</span>
                      <span className="rounded bg-emerald-100 border border-emerald-200 px-1.5 py-0.5 text-[10px] font-bold text-emerald-800">Web</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/signup"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-4 text-xs font-bold uppercase tracking-wider text-black shadow-lg shadow-orange-500/25 hover:from-amber-400 hover:to-orange-400 transition transform hover:scale-[1.02]"
                >
                  <Sparkles className="h-4 w-4 text-black" />
                  <span>Start Auto-Save (₹50/Day)</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-800 hover:bg-slate-100 hover:border-slate-300 transition shadow-xs"
                >
                  <span>Browse Appliances</span>
                  <ArrowRight className="h-4 w-4 text-slate-400" />
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 pt-3 text-xs text-slate-600 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" /> UPI AutoPay Mandate
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Balance on 0% EMI (No Interest)
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Withdraw / Pause Anytime
                </span>
              </div>
            </div>

            {/* Right Column: Concept Phone Mockup Screen (Matches Image 1 exactly) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm rounded-[40px] border-[6px] border-slate-300 bg-white p-4 shadow-xl shadow-slate-300/50">
                {/* Phone Notch */}
                <div className="mx-auto h-4 w-28 rounded-full bg-slate-200 mb-3 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-slate-300 mr-2" />
                  <div className="h-2 w-10 rounded-full bg-slate-300" />
                </div>

                {/* In-app Screen Content */}
                <div className="space-y-4 text-left">
                  {/* Greeting */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-500 block">Good morning,</span>
                      <h3 className="text-base font-extrabold text-slate-900">Priya</h3>
                    </div>
                    <div className="rounded-full bg-slate-100 p-2 text-slate-600 border border-slate-200">
                      <Bell className="h-3.5 w-3.5" />
                    </div>
                  </div>

                  {/* Savings Fund Card (Blue Gradient in proposal) */}
                  <div className="rounded-2xl bg-gradient-to-br from-blue-700 via-indigo-700 to-indigo-900 p-4 text-white shadow-lg space-y-1 relative overflow-hidden">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-200">
                      MY SAVINGS FUND
                    </span>
                    <div className="text-3xl font-extrabold tracking-tight">₹5,000</div>
                    <div className="flex items-center gap-1 text-[11px] text-indigo-200 pt-1">
                      <RefreshCw className="h-3 w-3" />
                      <span>Auto-save ₹50 / day · next 9:00 AM</span>
                    </div>

                    {/* Auto-save done toast */}
                    <div className="absolute top-2 right-2 flex items-center gap-1 rounded-full bg-emerald-400 text-black px-2 py-0.5 text-[9px] font-bold shadow-md">
                      <Check className="h-2.5 w-2.5" />
                      <span>Auto-save done</span>
                    </div>
                  </div>

                  {/* Appliance in Focus Card */}
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3.5 space-y-3 shadow-xs">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-indigo-100 border border-indigo-200 flex items-center justify-center text-lg">
                        ❄️
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-xs font-bold text-slate-900 truncate">Double-Door Refrigerator</h4>
                        <span className="text-[11px] font-extrabold text-slate-600">Price ₹17,000</span>
                      </div>
                    </div>

                    {/* Progress Bar & Split Values */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-[10px] font-bold">
                        <span className="text-amber-700">● ₹5,000 from fund</span>
                        <span className="text-indigo-700">● ₹12,000 on EMI</span>
                      </div>
                      <div className="h-2.5 w-full rounded-full bg-slate-200 flex overflow-hidden">
                        <div className="h-full bg-amber-500 w-[29.4%]" />
                        <div className="h-full bg-indigo-600 w-[70.6%]" />
                      </div>
                    </div>

                    {/* EMI Calculation Tag */}
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-xs font-bold text-slate-900">
                        ₹1,000 <span className="text-[10px] font-normal text-slate-500">/ month × 12</span>
                      </span>
                      <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-800 border border-emerald-200">
                        0% interest
                      </span>
                    </div>

                    {/* Buy Now Button */}
                    <button
                      type="button"
                      className="w-full rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 py-2.5 text-xs font-bold uppercase tracking-wider text-black shadow-sm hover:from-orange-400 hover:to-amber-400 transition"
                    >
                      Buy now
                    </button>
                  </div>

                  {/* Recent Activity */}
                  <div className="space-y-1.5 text-xs">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                      Recent activity
                    </span>
                    <div className="flex items-center justify-between rounded-xl bg-slate-50 p-2 border border-slate-200">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-emerald-500" />
                        <div>
                          <div className="font-semibold text-slate-900 text-[11px]">Auto-save successful</div>
                          <div className="text-[9px] text-slate-500">Today · UPI AutoPay</div>
                        </div>
                      </div>
                      <span className="font-mono font-bold text-emerald-700 text-xs">+₹50</span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl bg-slate-50 p-2 border border-slate-200">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-indigo-500" />
                        <div>
                          <div className="font-semibold text-slate-900 text-[11px]">Top-up</div>
                          <div className="text-[9px] text-slate-500">Yesterday · UPI</div>
                        </div>
                      </div>
                      <span className="font-mono font-bold text-indigo-700 text-xs">+₹500</span>
                    </div>
                  </div>

                  {/* Floating Pill: Balance on 0% EMI */}
                  <div className="rounded-xl border border-amber-200 bg-amber-50 p-2 text-center text-[10px] font-bold text-amber-900">
                    % Balance on 0% EMI · No interest, ever
                  </div>
                </div>

                <div className="mt-3 text-center text-[9px] font-mono uppercase tracking-widest text-slate-400">
                  ILLUSTRATIVE CONCEPT SCREEN
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SECTION 01: THE PRODUCT CONCEPT (Matches Image 4) */}
      <section id="how-it-works" className="py-20 border-b border-slate-200 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1 text-xs font-bold text-amber-800">
              <span>01 · THE PRODUCT CONCEPT</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Save a little every day.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-600">
                Buy when you need it — interest-free.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              An auto-savings platform for Indian households. Customers set up a small automatic debit and a savings fund builds up. Whenever they need an appliance, they buy it from the catalogue — the fund pays first, and any balance becomes a no-cost EMI.
            </p>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 text-xs text-slate-600 text-left sm:text-center shadow-xs">
              💡 <span className="text-slate-900 font-bold">The model is deliberately simple:</span> the fund is the customer’s own money, with no investment returns and no reward points. Its value is saving discipline and interest-free buying.
            </div>
          </div>

          {/* 5-Step Visual Horizontal Flow */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {fiveStepFlow.map((step) => (
              <div
                key={step.num}
                className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-xs flex flex-col justify-between hover:border-indigo-400 hover:shadow-md transition group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-extrabold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
                      STEP {step.num}
                    </span>
                    <span className="h-2 w-2 rounded-full bg-emerald-500 opacity-60 group-hover:opacity-100" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 3 Core Pillars */}
          <div className="grid gap-6 md:grid-cols-3 pt-6">
            {corePillars.map((pillar) => (
              <div
                key={pillar.badge}
                className="glass-card rounded-2xl border border-slate-200 bg-white p-6 space-y-3 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700 border border-slate-200">
                    {pillar.badge}
                  </span>
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900">{pillar.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. BUILT AROUND WHAT INDIAN HOMES SAVE FOR (Appliance Categories - Image 4) */}
      <section className="py-16 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                Curated Household Catalogue
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
                Built around what Indian homes save for
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Catalogue is fully managed by authorized brand distributors with genuine manufacturer warranty.
              </p>
            </div>

            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition"
            >
              <span>View All 80+ Appliances</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {applianceCategories.map((cat) => (
              <Link
                key={cat.name}
                to={`/products?category=${encodeURIComponent(cat.slug)}`}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center hover:bg-indigo-50/70 hover:border-indigo-300 hover:shadow-xs transition group cursor-pointer"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{cat.icon}</div>
                <div className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 truncate">{cat.name}</div>
                <div className="text-[10px] text-slate-500 mt-0.5">{cat.count}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE BUY-NOW CALCULATOR SECTION */}
      <section className="py-20 border-b border-slate-200 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BuyNowCalculator />
        </div>
      </section>

      {/* 5. SECTION 02: THE SOLUTION - ONE PLATFORM. THREE EXPERIENCES (Image 2) */}
      <section className="py-20 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3.5 py-1 text-xs font-bold text-indigo-700">
              <span>02 · THE SOLUTION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              One platform. Three experiences.
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Everything runs on a single shared core, so the mobile app, the web portal and your admin console always show the same numbers — in real time.
            </p>
          </div>

          {/* Three Experiences Cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {threeExperiences.map((exp) => (
              <div
                key={exp.id}
                className="rounded-3xl border border-slate-200 bg-white p-6 flex flex-col justify-between shadow-sm hover:border-indigo-300 hover:shadow-md transition"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="rounded-2xl bg-slate-50 p-3 border border-slate-200">
                      {exp.icon}
                    </div>
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-bold text-slate-600 uppercase tracking-wider">
                      {exp.lineItem}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{exp.title}</h3>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">{exp.desc}</p>
                  </div>

                  <ul className="space-y-2 pt-2 border-t border-slate-100">
                    {exp.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Shared Core Platform Blueprint (Image 2 Blueprint block) */}
          <div className="rounded-3xl border border-indigo-200 bg-gradient-to-b from-indigo-50/70 to-white p-8 space-y-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-indigo-100 pb-4">
              <div className="flex items-center gap-3">
                <Database className="h-6 w-6 text-indigo-600" />
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Shared Core Platform</h3>
                  <span className="text-xs text-slate-500">Built once, powers web portal, mobile app &amp; management console</span>
                </div>
              </div>
              <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold text-indigo-700 border border-indigo-200">
                Single Real-Time Source of Truth
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 text-xs">
              <div className="rounded-xl bg-white p-4 border border-slate-200 shadow-2xs">
                <span className="font-bold text-slate-900 block">Savings-Fund Ledger</span>
                <span className="text-slate-500 text-[11px]">Double-entry, auditable, immutable balance accounting</span>
              </div>
              <div className="rounded-xl bg-white p-4 border border-slate-200 shadow-2xs">
                <span className="font-bold text-slate-900 block">No-Cost EMI Engine</span>
                <span className="text-slate-500 text-[11px]">Dynamic 3/6/9/12 month schedules, 0% interest logic</span>
              </div>
              <div className="rounded-xl bg-white p-4 border border-slate-200 shadow-2xs">
                <span className="font-bold text-slate-900 block">Collections &amp; Recon</span>
                <span className="text-slate-500 text-[11px]">Daily UPI AutoPay &amp; e-NACH automated reconciliation</span>
              </div>
              <div className="rounded-xl bg-white p-4 border border-slate-200 shadow-2xs">
                <span className="font-bold text-slate-900 block">Orders &amp; Fulfilment</span>
                <span className="text-slate-500 text-[11px]">Real-time inventory checkout to doorstep delivery tracking</span>
              </div>
              <div className="rounded-xl bg-white p-4 border border-slate-200 shadow-2xs">
                <span className="font-bold text-slate-900 block">Smart Notifications</span>
                <span className="text-slate-500 text-[11px]">Push, SMS, and WhatsApp alerts for debits and deliveries</span>
              </div>
              <div className="rounded-xl bg-white p-4 border border-slate-200 shadow-2xs">
                <span className="font-bold text-slate-900 block">Identity &amp; Security</span>
                <span className="text-slate-500 text-[11px]">DLT OTP, Aadhaar e-KYC, RBAC, and full audit trail</span>
              </div>
            </div>

            {/* Integrations bar */}
            <div className="pt-4 border-t border-indigo-100 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
              <span className="font-semibold text-slate-800">Supported Integrations:</span>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-lg bg-white border border-slate-200 px-2.5 py-1 text-[11px] text-slate-700 shadow-2xs">UPI AutoPay / e-NACH</span>
                <span className="rounded-lg bg-white border border-slate-200 px-2.5 py-1 text-[11px] text-slate-700 shadow-2xs">PAN / Aadhaar e-KYC</span>
                <span className="rounded-lg bg-white border border-slate-200 px-2.5 py-1 text-[11px] text-slate-700 shadow-2xs">SMS &amp; OTP (DLT)</span>
                <span className="rounded-lg bg-white border border-slate-200 px-2.5 py-1 text-[11px] text-slate-700 shadow-2xs">Push Notifications</span>
                <span className="rounded-lg bg-white border border-slate-200 px-2.5 py-1 text-[11px] text-slate-700 shadow-2xs">Logistics &amp; Dispatch</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. SECTION 05: FINTECH-GRADE ENGINEERING & SECURITY (Image 5) */}
      <section className="py-20 border-b border-slate-200 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <span>05 · TECHNOLOGY &amp; SECURITY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Fintech-grade engineering,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-indigo-600">
                from the first line of code.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              When a product handles people’s savings, trust is the product. We build on a modern, proven stack and treat money movement with the rigour it deserves.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {securityPillars.map((sp) => (
              <div
                key={sp.title}
                className="glass-card rounded-2xl border border-slate-200 bg-white p-5 space-y-2.5 hover:border-emerald-300 transition shadow-xs"
              >
                <div className="flex items-center gap-2.5">
                  <div className="rounded-xl bg-slate-50 p-2 border border-slate-200">
                    {sp.icon}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">{sp.title}</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{sp.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. CTA BANNER */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 text-xs font-bold text-amber-800">
            <Sparkles className="h-3.5 w-3.5 text-amber-600" />
            <span>Start Building Your Appliance Fund Today</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Ready to bring home your next appliance interest-free?
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Set up an auto-save mandate with as little as ₹50 per day. Withdraw anytime with zero penalties or apply directly to any appliance with 0% EMI.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/signup"
              className="rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-4 text-xs font-bold uppercase tracking-wider text-black shadow-lg shadow-orange-500/25 hover:from-amber-400 hover:to-orange-400 transition"
            >
              Open Auto-Save Account
            </Link>
            <Link
              to="/admin/login"
              className="rounded-xl border border-slate-300 bg-slate-50 px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-800 hover:bg-slate-100 transition shadow-xs"
            >
              Admin &amp; Management Console
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
