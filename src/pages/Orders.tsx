import React from 'react'
import { Package, ShieldCheck, CheckCircle2, Clock } from 'lucide-react'

export default function Orders() {
  const orders = [
    {
      id: 'ORD-1024',
      product: 'Sony Bravia 55" 4K Google TV (KD-55X74L)',
      brand: 'Sony',
      status: 'Active Plan · Installment 4/12',
      amount: '₹57,990',
      monthly: '₹4,832 / month',
      dueDate: 'Due 10th of every month',
      isActive: true
    },
    {
      id: 'ORD-1042',
      product: 'Apple iPhone 16 (128GB) - Ultramarine Blue',
      brand: 'Apple',
      status: 'Delivered · Official Warranty Active',
      amount: '₹79,900',
      monthly: '12/12 Completed',
      dueDate: 'Fulfilled via Croma Flagship Mumbai',
      isActive: false
    }
  ]

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 py-16 radial-mesh">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-8 rounded-3xl border border-white/10 bg-[#131B2E]/80 p-8 shadow-2xl backdrop-blur-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold text-indigo-400 mb-2">
            <Package className="h-3.5 w-3.5" />
            <span>Fulfillment &amp; Milestone Tracking</span>
          </div>
          <h1 className="text-3xl font-extrabold text-white">Your Hardware Acquisitions</h1>
          <p className="mt-2 text-xs text-slate-400">
            Monitor real-time installment clearance, escrow settlement, and direct partner store pickup certificates.
          </p>
        </div>

        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="rounded-2xl border border-white/10 bg-[#131B2E]/70 p-6 backdrop-blur-md hover:border-indigo-500/40 transition-all duration-200"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">{order.brand}</span>
                    <span className="text-xs text-slate-500 font-mono">· {order.id}</span>
                  </div>
                  <h2 className="mt-1 text-base font-bold text-white">{order.product}</h2>
                </div>
                <div className="text-left md:text-right">
                  <p className="text-[10px] uppercase tracking-wider text-slate-400">Full Valuation</p>
                  <p className="text-xl font-extrabold text-emerald-400">{order.amount}</p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-slate-300 pt-4 border-t border-white/10">
                <span className={`rounded-xl px-3 py-1 font-semibold border ${
                  order.isActive
                    ? 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30'
                    : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                }`}>
                  {order.status}
                </span>
                <span className="rounded-xl bg-white/5 px-3 py-1 text-slate-400 border border-white/5">
                  {order.dueDate}
                </span>
                <span className="text-xs text-emerald-400 font-semibold ml-auto flex items-center gap-1">
                  <ShieldCheck className="h-3.5 w-3.5" /> Official Brand Seal Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
