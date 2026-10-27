import React, { useState } from 'react'
import {
  TrendingUp,
  DollarSign,
  Building2,
  FileText,
  ShieldCheck,
  ArrowUpRight,
  ArrowDownRight,
  Download,
  Calendar,
  CreditCard
} from 'lucide-react'

export default function FinanceDashboard() {
  const transactions = [
    { id: 'TXN-9941', member: 'Rajesh Kumar Verma', plan: 'Prime Platinum (Installment 4/12)', amount: '₹5,000', method: 'UPI Autopay', date: 'Today, 09:30 AM', status: 'SETTLED' },
    { id: 'TXN-9940', member: 'Priyanka Sundaram', plan: 'Sovereign Elite (Installment 1/12)', amount: '₹7,500', method: 'HDFC NetBanking', date: 'Today, 08:45 AM', status: 'SETTLED' },
    { id: 'TXN-9939', member: 'Amitabh Sen', plan: 'Smart Essentials (Installment 9/9)', amount: '₹3,000', method: 'ICICI UPI', date: 'Yesterday', status: 'SETTLED' },
    { id: 'TXN-9938', member: 'Meera Nambiar', plan: 'Prime Platinum (Installment 6/12)', amount: '₹5,000', method: 'Axis Mandate', date: 'Yesterday', status: 'SETTLED' }
  ]

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 py-10 radial-mesh">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-400 mb-2">
              <CreditCard className="h-3.5 w-3.5" />
              <span>Treasury &amp; Escrow Reconciliation</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Finance &amp; Collections Desk
            </h1>
            <p className="mt-1 text-xs text-slate-400">
              Real-time recurring milestone dues clearance, bank trustee balances, and vendor payouts.
            </p>
          </div>

          <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-4 py-2.5 text-xs font-bold text-black shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:from-emerald-400 hover:to-emerald-500 transition cursor-pointer">
            <Download className="h-4 w-4" />
            <span>Download Bank Settlement MT940</span>
          </button>
        </div>

        {/* Metrics Grid */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="glass-card rounded-2xl border border-white/10 p-5">
            <span className="text-xs uppercase tracking-wider text-slate-400 block">Total MTD Inflows</span>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-white">₹74.8 Lakh</span>
              <span className="text-xs text-emerald-400 font-semibold flex items-center">
                <ArrowUpRight className="h-3 w-3" /> +12.3%
              </span>
            </div>
            <p className="mt-1 text-[11px] text-slate-400">Target: ₹80.0 Lakh</p>
          </div>

          <div className="glass-card rounded-2xl border border-white/10 p-5">
            <span className="text-xs uppercase tracking-wider text-slate-400 block">Escrow Net Liquid Assets</span>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-indigo-300">₹3.15 Cr</span>
              <span className="text-xs text-slate-400 font-medium">100% Ring-fenced</span>
            </div>
            <p className="mt-1 text-[11px] text-slate-400">Audited by KPMG India</p>
          </div>

          <div className="glass-card rounded-2xl border border-white/10 p-5">
            <span className="text-xs uppercase tracking-wider text-slate-400 block">Vendor Payable Pipeline</span>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-amber-300">₹18.4 Lakh</span>
              <span className="text-xs text-amber-400 font-medium">Due for Release</span>
            </div>
            <p className="mt-1 text-[11px] text-slate-400">Croma &amp; Tanishq Boutiques</p>
          </div>

          <div className="glass-card rounded-2xl border border-white/10 p-5">
            <span className="text-xs uppercase tracking-wider text-slate-400 block">Overdue Default Ratio</span>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-emerald-400">0.8%</span>
              <span className="text-xs text-emerald-400 font-medium">Industry Low</span>
            </div>
            <p className="mt-1 text-[11px] text-slate-400">Supported by mandate retries</p>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="mt-10 glass-card rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
          <div className="p-5 border-b border-white/10 flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-white">Live Milestone Collection Stream</h2>
              <p className="text-xs text-slate-400">Real-time settlement webhook entries from Razorpay / NPCI NACH Mandates</p>
            </div>
            <span className="rounded-lg bg-emerald-500/10 px-2.5 py-1 text-xs text-emerald-400 font-semibold border border-emerald-500/20">
              Automated NACH Active
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#0B0F19]/80 text-slate-400 uppercase tracking-wider text-[10px] border-b border-white/10">
                <tr>
                  <th className="py-3 px-4">Txn ID</th>
                  <th className="py-3 px-4">Member Name</th>
                  <th className="py-3 px-4">Plan &amp; Tenure Stage</th>
                  <th className="py-3 px-4">Amount</th>
                  <th className="py-3 px-4">Payment Rail</th>
                  <th className="py-3 px-4">Timestamp</th>
                  <th className="py-3 px-4 text-right">Settlement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {transactions.map((tx) => (
                  <tr key={tx.id} className="hover:bg-white/[0.02] transition">
                    <td className="py-3.5 px-4 font-mono text-indigo-300 font-semibold">{tx.id}</td>
                    <td className="py-3.5 px-4 font-bold text-white">{tx.member}</td>
                    <td className="py-3.5 px-4 text-slate-300">{tx.plan}</td>
                    <td className="py-3.5 px-4 font-extrabold text-emerald-400">{tx.amount}</td>
                    <td className="py-3.5 px-4 text-slate-400">{tx.method}</td>
                    <td className="py-3.5 px-4 text-slate-400 text-[11px]">{tx.date}</td>
                    <td className="py-3.5 px-4 text-right">
                      <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-bold text-emerald-400 border border-emerald-500/30">
                        {tx.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  )
}
