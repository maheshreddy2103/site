import React from 'react'
import { LifeBuoy, Mail, Phone, MessageSquare, ShieldCheck } from 'lucide-react'

export default function Support() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 py-16 radial-mesh">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 shadow-sm">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1 text-xs font-semibold tracking-wider text-emerald-700 mb-4 shadow-sm">
            <LifeBuoy className="h-3.5 w-3.5 text-emerald-600" />
            <span>Member Assistance Desk</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Dedicated Customer Success
          </h1>
          <p className="mt-3 text-xs sm:text-sm text-slate-600">
            Our priority concierge team is available 7 days a week for plan advisory, delivery updates, and escrow queries.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center shadow-sm">
              <Mail className="h-6 w-6 text-indigo-600 mx-auto mb-3" />
              <h2 className="text-sm font-bold text-slate-900">Email Concierge</h2>
              <p className="mt-1 text-xs text-slate-500">Response within 2 hours</p>
              <p className="mt-3 text-xs font-bold text-indigo-600">support@savenbuy.in</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center shadow-sm">
              <Phone className="h-6 w-6 text-emerald-600 mx-auto mb-3" />
              <h2 className="text-sm font-bold text-slate-900">Toll-Free Hotline</h2>
              <p className="mt-1 text-xs text-slate-500">Mon - Sun (9 AM to 9 PM)</p>
              <p className="mt-3 text-xs font-bold text-emerald-700">1800-419-SAVENBUY</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center shadow-sm">
              <MessageSquare className="h-6 w-6 text-indigo-600 mx-auto mb-3" />
              <h2 className="text-sm font-bold text-slate-900">Live WhatsApp Chat</h2>
              <p className="mt-1 text-xs text-slate-500">Direct relationship manager</p>
              <p className="mt-3 text-xs font-bold text-indigo-600">+91 98200 12345</p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl bg-slate-50 p-6 border border-slate-200 text-xs text-slate-600 flex items-start gap-3">
            <ShieldCheck className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-slate-900 mb-1">Manufacturer Warranty Claims &amp; Servicing:</p>
              <p className="text-slate-600">
                Because all products are sourced through authorized primary brand distribution networks, warranty repairs and technical queries can also be lodged directly at any Apple Store, Sony Center, Samsung Service Plaza, or Daikin customer care facility across India.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}