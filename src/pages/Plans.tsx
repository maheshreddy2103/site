import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Calendar,
  Clock,
  RefreshCw,
  Wallet,
  Lock,
  Percent
} from 'lucide-react'
import BuyNowCalculator from '../components/BuyNowCalculator'

const autoSavePlans = [
  {
    name: 'Daily Habit Auto-Save',
    frequency: 'Daily UPI AutoPay',
    amount: '₹50',
    unit: '/ day',
    monthlyEquiv: '₹1,500 monthly fund accumulation',
    badge: 'Most Popular Habit',
    highlight: true,
    target: 'Refrigerators, Water Purifiers, Microwave Ovens',
    description: 'Set a tiny ₹50 morning debit. Effortlessly builds ₹18,000+ a year without straining your everyday wallet.',
    features: [
      'Automatic ₹50 debit via UPI AutoPay every morning at 9:00 AM',
      'Pause, resume, or modify mandate amount anytime in 1 tap',
      'Double-entry auditable ledger updated in real time',
      'Immediate 0% no-cost EMI checkout on any appliance',
      'Withdraw accumulated fund balance anytime with zero penalties',
      'Automated retry logic for missed debits (zero bank bounce charges)'
    ],
    ctaText: 'Start ₹50/Day Auto-Save'
  },
  {
    name: 'Weekly Growth Mandate',
    frequency: 'Weekly Debit (Every Monday)',
    amount: '₹350',
    unit: '/ week',
    monthlyEquiv: '₹1,500 monthly fund accumulation',
    badge: 'Weekly Steady Saver',
    highlight: false,
    target: 'Washing Machines, Air Conditioners, 43" 4K Smart TVs',
    description: 'Perfect for weekly household budgeters and gig professionals aligning with weekly payout schedules.',
    features: [
      'Auto-debit every Monday via UPI AutoPay or e-NACH',
      'Instant top-up anytime via UPI, debit card, or net banking',
      'Shop anytime — fund pays first, balance converted to 0% EMI',
      'Zero processing fee, zero compounding debt, zero hidden markups',
      'Full bank-grade encryption with maker-checker security',
      'Instant monthly statement download in PDF format'
    ],
    ctaText: 'Start ₹350/Week Auto-Save'
  },
  {
    name: 'Monthly Household Anchor',
    frequency: 'Monthly Salary Debit',
    amount: '₹2,500',
    unit: '/ month',
    monthlyEquiv: '₹30,000 annual appliance fund',
    badge: 'Salary Cycle Aligned',
    highlight: false,
    target: '1.5 Ton 5-Star ACs, Double-Door Fridges, 55" OLED TVs',
    description: 'Aligned with your monthly salary credit. Builds heavy purchasing power for major seasonal home upgrades.',
    features: [
      'Auto-debits on your chosen salary date (1st, 5th, or 10th)',
      'Customizable debit amounts from ₹1,000 to ₹15,000/month',
      '100% principal safety backed by Axis Trustee Escrow account',
      'Pre-approved 0% interest tenures across 3, 6, 9 or 12 months',
      'Free doorstep delivery & brand authorized installation',
      'Priority concierge support for service & delivery coordination'
    ],
    ctaText: 'Start Monthly Auto-Save'
  }
]

export default function Plans() {
  const [customAmount, setCustomAmount] = useState(100)
  const [customFreq, setCustomFreq] = useState<'daily' | 'weekly' | 'monthly'>('daily')

  return (
    <div className="min-h-screen bg-[#0B0F19] py-16 text-slate-100 radial-mesh">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold text-amber-300">
            <Zap className="h-3.5 w-3.5 text-amber-400" />
            <span>UPI AutoPay Mandates</span>
          </div>
          <h1 className="text-4xl font-extrabold sm:text-5xl text-white tracking-tight">
            Save a little every day.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-emerald-400">
              Own home appliances at 0% EMI.
            </span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            The fund is your own money — with no investment risks and no reward points gimmicks. Its value is pure savings discipline and interest-free buying.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" /> 100% Customer Owned Fund
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" /> Zero Interest on Balance EMI
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" /> Pause or Withdraw Anytime
            </span>
          </div>
        </div>

        {/* 3 Core Auto-Save Frequency Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {autoSavePlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col justify-between rounded-3xl border transition-all duration-300 p-8 ${
                plan.highlight
                  ? 'border-amber-500/80 bg-gradient-to-b from-[#1E293B] to-[#0F172A] shadow-2xl shadow-amber-500/10'
                  : 'border-white/10 bg-[#131B2E]/60 hover:border-white/20'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-1 text-[11px] font-extrabold uppercase tracking-wider text-black shadow-lg">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {plan.frequency}
                  </span>
                  {!plan.highlight && (
                    <span className="rounded-full bg-white/5 px-2.5 py-0.5 text-[10px] font-semibold text-slate-400">
                      {plan.badge}
                    </span>
                  )}
                </div>

                <h3 className="mt-2 text-2xl font-extrabold text-white">{plan.name}</h3>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed">{plan.description}</p>

                {/* Amount Callout */}
                <div className="mt-6 rounded-2xl bg-[#0B0F19]/80 p-4 border border-white/5">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-amber-400">{plan.amount}</span>
                    <span className="text-sm font-semibold text-slate-400">{plan.unit}</span>
                  </div>
                  <span className="mt-1 block text-[11px] font-mono text-emerald-400">
                    {plan.monthlyEquiv}
                  </span>
                </div>

                <div className="mt-4 text-xs">
                  <span className="text-slate-400 font-semibold block mb-1">Recommended For:</span>
                  <p className="text-indigo-300 font-medium">{plan.target}</p>
                </div>

                {/* Feature Bullet Checklist */}
                <div className="mt-6 space-y-3 pt-6 border-t border-white/10">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    What's Included:
                  </span>
                  {plan.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5">
                <Link
                  to="/signup"
                  className={`w-full inline-flex items-center justify-center gap-2 rounded-xl py-3.5 text-xs font-bold uppercase tracking-wider transition ${
                    plan.highlight
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-black shadow-lg shadow-orange-500/25 hover:from-amber-400 hover:to-orange-400'
                      : 'bg-white/10 text-white hover:bg-white/15'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Auto-Save Mandate Calculator */}
        <div className="rounded-3xl border border-white/10 bg-[#131B2E]/90 p-8 shadow-2xl backdrop-blur-xl">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
              Personalized Saving Setup
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Create a custom auto-save amount tailored to your income
            </h2>
            <p className="text-xs text-slate-400">
              Save on your own terms. Adjust the amount or frequency anytime from your web portal or mobile app.
            </p>
          </div>

          <div className="max-w-xl mx-auto space-y-6">
            <div className="grid grid-cols-3 gap-2 rounded-2xl bg-[#0B0F19] p-1.5 border border-white/10">
              {(['daily', 'weekly', 'monthly'] as const).map((freq) => (
                <button
                  key={freq}
                  type="button"
                  onClick={() => setCustomFreq(freq)}
                  className={`rounded-xl py-2 text-xs font-bold uppercase tracking-wider transition ${
                    customFreq === freq
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {freq}
                </button>
              ))}
            </div>

            <div className="rounded-2xl bg-[#0B0F19] p-6 border border-white/5 text-center space-y-3">
              <span className="text-xs uppercase text-slate-400 font-semibold block">
                Selected {customFreq} auto-debit
              </span>
              <div className="text-4xl font-extrabold text-amber-400">
                ₹{customAmount.toLocaleString('en-IN')}{' '}
                <span className="text-sm font-normal text-slate-400">/ {customFreq}</span>
              </div>
              <input
                type="range"
                min={customFreq === 'daily' ? 25 : customFreq === 'weekly' ? 100 : 500}
                max={customFreq === 'daily' ? 500 : customFreq === 'weekly' ? 2500 : 15000}
                step={customFreq === 'daily' ? 25 : customFreq === 'weekly' ? 50 : 500}
                value={customAmount}
                onChange={(e) => setCustomAmount(Number(e.target.value))}
                className="w-full h-2 rounded-lg bg-slate-800 accent-amber-400 cursor-pointer"
              />
              <div className="text-xs text-emerald-400 font-medium">
                Annual Savings Fund:{' '}
                <strong className="text-white">
                  ₹
                  {(
                    customAmount *
                    (customFreq === 'daily' ? 365 : customFreq === 'weekly' ? 52 : 12)
                  ).toLocaleString('en-IN')}
                </strong>{' '}
                ready to buy appliances at 0% EMI
              </div>
            </div>

            <Link
              to="/signup"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 py-4 text-xs font-bold uppercase tracking-wider text-black shadow-lg shadow-emerald-500/20 hover:from-emerald-400 hover:to-emerald-500 transition"
            >
              <span>Set Up This Mandate via UPI AutoPay</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Embedded Calculator */}
        <BuyNowCalculator />

      </div>
    </div>
  )
}
