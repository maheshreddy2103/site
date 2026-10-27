import React from 'react'
import { ShieldCheck, Lock, Sparkles, CheckCircle2 } from 'lucide-react'

export default function About() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 py-16 radial-mesh">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 shadow-sm">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1 text-xs font-semibold tracking-wider text-indigo-700 mb-4 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-indigo-600" />
            <span>Institutional Overview</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            A Disciplined FinTech Architecture for Durable Ownership
          </h1>
          <p className="mt-6 text-sm text-slate-600 leading-relaxed">
            <strong>SaveNBuy</strong> replaces high-interest debt traps and predatory revolving credit lines with an institutional auto-savings and 0% no-cost EMI platform. We combine the discipline of recurring UPI AutoPay micro-debits with guaranteed delivery of authentic branded home appliances.
          </p>
          <p className="mt-4 text-sm text-slate-600 leading-relaxed">
            Rather than paying 18% to 36% in compounding interest to credit card issuers, Indian households save a little every day to build their own savings fund. Whenever they need an appliance, their savings fund pays first, and the remaining balance is split into transparent, true 0% interest no-cost EMIs with authorized brand warranty.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              {
                icon: ShieldCheck,
                title: 'The Sovereign Mission',
                description: 'Empower forward-thinking households across India to acquire authentic branded appliances through disciplined, interest-free auto-savings and zero-cost financing.'
              },
              {
                icon: Lock,
                title: 'Institutional Integrity',
                description: 'Zero hidden fees, 100% manufacturer warranty, verified authorized retail distribution partners, and bank-grade double-entry escrow records for every single payment.'
              }
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <item.icon className="h-6 w-6 text-emerald-600 mb-3" />
                <h2 className="text-base font-bold text-slate-900">{item.title}</h2>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 border-t border-slate-100 pt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Regulated Escrow Backing</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> 100% Authentic Brand Seal</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Official Manufacturer Warranty</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Nationwide Doorstep Logistics</span>
          </div>
        </div>
      </div>
    </div>
  )
}