import React from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, ShieldCheck, CheckCircle2, ArrowRight, CreditCard, Gift, Wallet, Package } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

export default function CustomerDashboard() {
  const { user } = useAuth()
  const name = user?.name || 'Member'

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 py-10 radial-mesh">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Welcome Banner */}
        <div className="rounded-3xl border border-white/10 bg-[#131B2E]/80 p-8 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-400 mb-3">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Active Member Portfolio</span>
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Welcome back, {name}
              </h1>
              <p className="mt-2 text-xs sm:text-sm text-slate-300">
                Track your milestone savings progress, upcoming installment schedule, and earned reward points.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <Link
                to="/orders"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-[#0B0F19] px-5 py-3 text-xs font-bold text-white hover:bg-white/5 transition"
              >
                <Package className="h-4 w-4 text-indigo-400" />
                <span>Track Fulfillment</span>
              </Link>
              <Link
                to="/customer/payments"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-5 py-3 text-xs font-bold text-black shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:from-emerald-400 hover:to-emerald-500 transition"
              >
                <CreditCard className="h-4 w-4" />
                <span>Pay Upcoming Installment</span>
              </Link>
            </div>
          </div>

          {/* KPI Cards */}
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="glass-card rounded-2xl border border-white/10 p-5">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">Membership ID</span>
              <p className="mt-2 text-2xl font-mono font-extrabold text-indigo-300">{user?.membershipId || 'MEM-8820'}</p>
              <p className="mt-1 text-xs text-emerald-400 font-medium">Prime Platinum Tier</p>
            </div>

            <div className="glass-card rounded-2xl border border-white/10 p-5">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">Next Milestone Due</span>
              <p className="mt-2 text-2xl font-extrabold text-white">₹5,000</p>
              <p className="mt-1 text-xs text-slate-400">Due 10th of next month</p>
            </div>

            <div className="glass-card rounded-2xl border border-white/10 p-5">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">Accumulated Principal</span>
              <p className="mt-2 text-2xl font-extrabold text-emerald-400">₹20,000</p>
              <p className="mt-1 text-xs text-slate-400">4 of 12 installments cleared</p>
            </div>

            <div className="glass-card rounded-2xl border border-white/10 p-5">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">Reward Points</span>
              <p className="mt-2 text-2xl font-extrabold text-amber-300">1,250 Pts</p>
              <p className="mt-1 text-xs text-slate-400">Redeemable for brand accessories</p>
            </div>
          </div>

          {/* Subscribed Hardware Card */}
          <div className="mt-8 rounded-2xl border border-white/10 bg-[#0B0F19]/60 p-6 backdrop-blur-md">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Subscribed Flagship Hardware</span>
                <h2 className="mt-1 text-lg font-bold text-white">Sony Bravia 55" 4K Google TV (KD-55X74L)</h2>
                <p className="mt-1 text-xs text-slate-400">Total Plan Value: ₹57,990 · Official 2-Year Manufacturer Warranty</p>
              </div>
              <div className="text-left sm:text-right">
                <span className="text-xs text-slate-400 block">Installment Progress</span>
                <div className="mt-1 text-lg font-extrabold text-emerald-400">33.3% Complete</div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-4 h-2 w-full rounded-full bg-slate-800 overflow-hidden">
              <div className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-teal-400 to-emerald-400" style={{ width: '33.3%' }} />
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between text-xs text-slate-400 pt-3 border-t border-white/5">
              <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-emerald-400" /> Axis Trustee Escrow Protected</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Croma Store Pickup Eligible at Term Completion</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
