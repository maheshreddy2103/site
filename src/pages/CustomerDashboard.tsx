import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  CreditCard,
  Package,
  Zap,
  RefreshCw,
  Plus,
  Pause,
  Play,
  ArrowRight,
  Download,
  AlertCircle,
  Clock,
  Check,
  Percent,
  Wallet
} from 'lucide-react'
import { useAuth } from '../context/AuthContext'

export default function CustomerDashboard() {
  const { user } = useAuth()
  const name = user?.name?.split(' ')[0] || 'Priya'

  // Interactive states
  const [savingsFund, setSavingsFund] = useState(5000)
  const [isMandatePaused, setIsMandatePaused] = useState(false)
  const [dailyDebitAmount, setDailyDebitAmount] = useState(50)
  const [showTopUpModal, setShowTopUpModal] = useState(false)
  const [topUpAmount, setTopUpAmount] = useState('500')
  const [toastMessage, setToastMessage] = useState<string | null>(null)

  function showToast(msg: string) {
    setToastMessage(msg)
    setTimeout(() => setToastMessage(null), 3000)
  }

  function handleAddTopUp() {
    const val = Number(topUpAmount)
    if (val > 0) {
      setSavingsFund((prev) => prev + val)
      setShowTopUpModal(false)
      showToast(`Successfully deposited ₹${val.toLocaleString('en-IN')} into your Savings Fund via UPI!`)
    }
  }

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 py-10 radial-mesh">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Toast Alert */}
        {toastMessage && (
          <div className="fixed top-20 right-6 z-50 flex items-center gap-2 rounded-2xl bg-emerald-500 text-black px-4 py-3 font-bold text-xs shadow-2xl animate-bounce">
            <Check className="h-4 w-4" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Top Header Card */}
        <div className="rounded-3xl border border-white/10 bg-[#131B2E]/90 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold text-amber-300 mb-2">
                <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                <span>Customer Web Portal · Active Fund</span>
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Good morning, {name}
              </h1>
              <p className="mt-1 text-xs sm:text-sm text-slate-300">
                Manage your automatic debits, live savings fund balance, and active 0% no-cost EMI schedules.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setShowTopUpModal(true)}
                className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-2.5 text-xs font-bold text-black shadow-lg shadow-emerald-500/20 hover:from-emerald-400 hover:to-teal-400 transition cursor-pointer"
              >
                <Plus className="h-4 w-4" />
                <span>Instant Top-Up</span>
              </button>

              <Link
                to="/products"
                className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-[#0B0F19] px-4 py-2.5 text-xs font-bold text-white hover:bg-white/5 transition"
              >
                <span>Shop Appliances</span>
                <ArrowRight className="h-4 w-4 text-slate-400" />
              </Link>
            </div>
          </div>

          {/* 4 Metric Cards */}
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            
            {/* 1. My Savings Fund Card (Matches Proposal Blue Gradient) */}
            <div className="rounded-2xl bg-gradient-to-br from-blue-700 via-indigo-700 to-indigo-900 p-5 text-white shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-200">
                  MY SAVINGS FUND
                </span>
                <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-300 border border-emerald-400/30">
                  Auditable
                </span>
              </div>
              <div className="mt-2 text-3xl font-extrabold tracking-tight">
                ₹{savingsFund.toLocaleString('en-IN')}
              </div>
              <div className="mt-2 flex items-center justify-between text-[11px] text-indigo-200 pt-2 border-t border-white/10">
                <span>100% your money</span>
                <button
                  onClick={() => showToast('Withdrawal request initialized. Funds transfer to bank in 24 hrs.')}
                  className="underline hover:text-white cursor-pointer"
                >
                  Withdrawal
                </button>
              </div>
            </div>

            {/* 2. Auto-Save Status */}
            <div className="glass-card rounded-2xl border border-white/10 p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Auto-Save Mandate
                  </span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-bold border ${
                      isMandatePaused
                        ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                        : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                    }`}
                  >
                    {isMandatePaused ? 'PAUSED' : 'ACTIVE'}
                  </span>
                </div>
                <div className="mt-2 text-2xl font-extrabold text-white">
                  ₹{dailyDebitAmount}{' '}
                  <span className="text-xs font-normal text-slate-400">/ day</span>
                </div>
                <p className="mt-1 text-[11px] text-slate-400">
                  {isMandatePaused
                    ? 'Mandate paused. No debits will occur.'
                    : 'Next UPI AutoPay debit tomorrow 9:00 AM'}
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => {
                    setIsMandatePaused(!isMandatePaused)
                    showToast(isMandatePaused ? 'Auto-save mandate resumed!' : 'Auto-save mandate paused.')
                  }}
                  className="flex items-center gap-1 text-[11px] font-bold text-indigo-300 hover:text-white cursor-pointer"
                >
                  {isMandatePaused ? <Play className="h-3 w-3" /> : <Pause className="h-3 w-3" />}
                  <span>{isMandatePaused ? 'Resume Mandate' : 'Pause Mandate'}</span>
                </button>
              </div>
            </div>

            {/* 3. Upcoming EMI Due */}
            <div className="glass-card rounded-2xl border border-white/10 p-5">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">
                Next 0% EMI Instalment
              </span>
              <div className="mt-2 text-2xl font-extrabold text-white">₹1,000</div>
              <p className="mt-1 text-xs text-emerald-400 font-medium">Due 10th November 2026</p>
              <div className="mt-3 pt-2 border-t border-white/5 text-[11px] text-slate-400">
                Auto-debited via registered HDFC account
              </div>
            </div>

            {/* 4. Active EMI Progress */}
            <div className="glass-card rounded-2xl border border-white/10 p-5">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">
                Total EMIs Cleared
              </span>
              <div className="mt-2 text-2xl font-extrabold text-emerald-400">4 / 12 Months</div>
              <p className="mt-1 text-xs text-slate-400">₹4,000 of ₹12,000 repaid</p>
              <div className="mt-3 pt-2 border-t border-white/5 text-[11px] text-slate-400 flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                <span>Zero interest paid ever</span>
              </div>
            </div>

          </div>

          {/* Active Appliance Purchased (Matches Proposal Refrigerator Example) */}
          <div className="mt-8 rounded-2xl border border-white/10 bg-[#0B0F19]/80 p-6 backdrop-blur-md space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-white/5 pb-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-2xl">
                  ❄️
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400">
                    Active Appliance Purchased
                  </span>
                  <h3 className="text-lg font-bold text-white">Whirlpool 265L Double-Door Refrigerator</h3>
                  <p className="text-xs text-slate-400">
                    Total Price: ₹17,000 · Delivered to your address on 15 July 2026
                  </p>
                </div>
              </div>

              <div className="text-left sm:text-right">
                <span className="text-xs text-slate-400 block">Balance on 0% EMI</span>
                <span className="text-lg font-extrabold text-indigo-300">₹8,000 Remaining</span>
              </div>
            </div>

            {/* Progress Split Bar */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-amber-400">● ₹5,000 paid from Savings Fund</span>
                <span className="text-emerald-400">● ₹4,000 EMIs Repaid (4 mos)</span>
                <span className="text-indigo-400">● ₹8,000 Pending (8 mos × ₹1,000)</span>
              </div>
              <div className="h-3 w-full rounded-full bg-slate-800 flex overflow-hidden p-0.5 border border-white/10">
                <div className="h-full bg-amber-400 rounded-l-full w-[29.4%]" title="Fund applied" />
                <div className="h-full bg-emerald-400 w-[23.5%]" title="EMIs repaid" />
                <div className="h-full bg-indigo-500 rounded-r-full w-[47.1%]" title="Pending EMIs" />
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between text-xs text-slate-400 pt-2">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                Axis Trustee Audited Double-Entry Escrow
              </span>
              <span className="flex items-center gap-1.5">
                <Percent className="h-4 w-4 text-emerald-400" />
                True 0% Interest · No Hidden Processing Dues
              </span>
            </div>
          </div>

          {/* Double-Entry Ledger Recent Activity */}
          <div className="mt-8 glass-card rounded-2xl border border-white/10 p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Clock className="h-4 w-4 text-indigo-400" />
                  Savings Fund &amp; EMI Ledger Activity
                </h3>
                <p className="text-xs text-slate-400">
                  Every rupee in and out recorded as balanced, double-entry auditable transactions
                </p>
              </div>

              <button
                type="button"
                onClick={() => showToast('Downloading Official Tax Invoice & Ledger PDF Statement...')}
                className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-200 hover:text-white hover:bg-white/10 transition cursor-pointer"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Download Statement</span>
              </button>
            </div>

            <div className="divide-y divide-white/5 text-xs">
              <div className="py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20 font-bold">
                    ↓
                  </div>
                  <div>
                    <div className="font-bold text-white">Auto-save debit successful</div>
                    <div className="text-[11px] text-slate-400">Today, 09:00 AM · UPI AutoPay (Axis Bank)</div>
                  </div>
                </div>
                <span className="font-mono font-bold text-emerald-400 text-sm">+₹50</span>
              </div>

              <div className="py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20 font-bold">
                    ↓
                  </div>
                  <div>
                    <div className="font-bold text-white">Instant Fund Top-up</div>
                    <div className="text-[11px] text-slate-400">Yesterday, 04:15 PM · UPI App Payment</div>
                  </div>
                </div>
                <span className="font-mono font-bold text-indigo-300 text-sm">+₹500</span>
              </div>

              <div className="py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 border border-amber-500/20 font-bold">
                    ↑
                  </div>
                  <div>
                    <div className="font-bold text-white">No-Cost EMI Instalment (Month 4/12)</div>
                    <div className="text-[11px] text-slate-400">10 Oct 2026 · Whirlpool Refrigerator Mandate</div>
                  </div>
                </div>
                <span className="font-mono font-bold text-slate-300 text-sm">-₹1,000</span>
              </div>

              <div className="py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20 font-bold">
                    ↓
                  </div>
                  <div>
                    <div className="font-bold text-white">Auto-save debit successful</div>
                    <div className="text-[11px] text-slate-400">09 Oct 2026, 09:00 AM · UPI AutoPay</div>
                  </div>
                </div>
                <span className="font-mono font-bold text-emerald-400 text-sm">+₹50</span>
              </div>
            </div>
          </div>

        </div>

        {/* Instant Top-Up Modal */}
        {showTopUpModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
            <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#131B2E] p-6 shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Plus className="h-4 w-4 text-emerald-400" />
                  Instant Savings Fund Top-Up
                </h3>
                <button
                  onClick={() => setShowTopUpModal(false)}
                  className="rounded-lg bg-white/5 px-2 py-1 text-xs text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              <p className="text-xs text-slate-300">
                One-tap extra deposit into your fund via UPI, debit cards, or net banking.
              </p>

              <div>
                <label className="text-xs uppercase font-bold text-slate-400 block mb-1">
                  Amount to Deposit (₹)
                </label>
                <input
                  type="number"
                  value={topUpAmount}
                  onChange={(e) => setTopUpAmount(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-[#0B0F19] px-4 py-3 text-lg font-bold text-white outline-none focus:border-emerald-500"
                />
              </div>

              <div className="flex gap-2">
                {[500, 1000, 2000, 5000].map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => setTopUpAmount(String(amt))}
                    className="flex-1 rounded-lg border border-white/10 bg-white/5 py-1.5 text-xs font-semibold text-slate-300 hover:bg-white/10"
                  >
                    +₹{amt}
                  </button>
                ))}
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowTopUpModal(false)}
                  className="flex-1 rounded-xl border border-white/10 bg-white/5 py-2.5 text-xs font-bold text-slate-300 hover:bg-white/10"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleAddTopUp}
                  className="flex-1 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 py-2.5 text-xs font-bold text-black hover:from-emerald-400 hover:to-teal-400 transition"
                >
                  Authorize UPI Deposit
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
