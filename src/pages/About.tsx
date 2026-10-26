import React from 'react'
import { ShieldCheck, Award, Lock, Sparkles, Building2, CheckCircle2 } from 'lucide-react'

export default function About() {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 py-16 radial-mesh">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-[#131B2E]/80 p-8 sm:p-12 shadow-2xl backdrop-blur-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1 text-xs font-semibold tracking-wider text-indigo-400 mb-4">
            <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
            <span>Institutional Overview</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-indigo-300">
            A Disciplined FinTech Architecture for Durable Ownership
          </h1>
          <p className="mt-6 text-sm text-slate-300 leading-relaxed">
            <strong>SaveNBuy</strong> replaces high-interest debt traps and predatory revolving credit lines with an institutional milestone savings platform. We combine the discipline of recurring milestone accumulation with guaranteed fulfillment of authentic branded consumer durables and sovereign physical gold.
          </p>
          <p className="mt-4 text-sm text-slate-300 leading-relaxed">
            Rather than paying 18% to 36% in compounding interest to credit card issuers, members budget for flagship acquisitions — whether an <strong>Apple iPhone 16</strong>, <strong>Sony Bravia 4K TV</strong>, <strong>LG AI Inverter Washer</strong>, or <strong>Tanishq 24K Gold Coin</strong>. Members benefit from guaranteed 0% interest, automated milestone bonuses, and authorized direct brand fulfillment with official warranties.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              {
                icon: ShieldCheck,
                title: 'The Sovereign Mission',
                description: 'Empower forward-thinking households to acquire authentic flagship hardware and gold assets through disciplined, interest-free milestone capital accumulation.'
              },
              {
                icon: Lock,
                title: 'Institutional Integrity',
                description: 'Zero hidden fees, 100% manufacturer warranty, verified authorized retail distribution partners, and bank-grade audit-ready escrow records for every single payment.'
              }
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-[#0B0F19]/60 p-6 backdrop-blur-md">
                <item.icon className="h-6 w-6 text-emerald-400 mb-3" />
                <h2 className="text-base font-bold text-white">{item.title}</h2>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 border-t border-white/10 pt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Regulated Escrow Backing</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> 100% Authentic Brand Seal</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Official Manufacturer Warranty</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Nationwide Doorstep Logistics</span>
          </div>
        </div>
      </div>
    </div>
  )
}
