import React from 'react'
import { LifeBuoy, Mail, Phone, MessageSquare, ShieldCheck, Clock } from 'lucide-react'

export default function Support() {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 py-16 radial-mesh">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-[#131B2E]/80 p-8 sm:p-12 shadow-2xl backdrop-blur-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-xs font-semibold tracking-wider text-emerald-400 mb-4">
            <LifeBuoy className="h-3.5 w-3.5 text-emerald-400" />
            <span>Member Assistance Desk</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-indigo-300">
            Dedicated Customer Success
          </h1>
          <p className="mt-3 text-xs sm:text-sm text-slate-400">
            Our priority concierge team is available 7 days a week for plan advisory, delivery updates, and escrow queries.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-[#0B0F19]/60 p-6 text-center backdrop-blur-md">
              <Mail className="h-6 w-6 text-indigo-400 mx-auto mb-3" />
              <h2 className="text-sm font-bold text-white">Email Concierge</h2>
              <p className="mt-1 text-xs text-slate-400">Response within 2 hours</p>
              <p className="mt-3 text-xs font-semibold text-indigo-300">support@savenbuy.in</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#0B0F19]/60 p-6 text-center backdrop-blur-md">
              <Phone className="h-6 w-6 text-emerald-400 mx-auto mb-3" />
              <h2 className="text-sm font-bold text-white">Toll-Free Hotline</h2>
              <p className="mt-1 text-xs text-slate-400">Mon - Sun (9 AM to 9 PM)</p>
              <p className="mt-3 text-xs font-semibold text-emerald-400">1800-419-SAVENBUY</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#0B0F19]/60 p-6 text-center backdrop-blur-md">
              <MessageSquare className="h-6 w-6 text-indigo-400 mx-auto mb-3" />
              <h2 className="text-sm font-bold text-white">Live WhatsApp Chat</h2>
              <p className="mt-1 text-xs text-slate-400">Direct relationship manager</p>
              <p className="mt-3 text-xs font-semibold text-indigo-300">+91 98200 12345</p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl bg-[#0B0F19]/80 p-6 border border-white/10 text-xs text-slate-300 flex items-start gap-3">
            <ShieldCheck className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-white mb-1">Manufacturer Warranty Claims &amp; Servicing:</p>
              <p className="text-slate-400">
                Because all products are sourced through authorized primary brand distribution networks, warranty repairs and technical queries can also be lodged directly at any Apple Store, Sony Center, Samsung Service Plaza, or Daikin customer care facility across India.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
