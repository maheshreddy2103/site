import React from 'react'
import { Building2, ShieldCheck, CheckCircle2, Sparkles, MapPin } from 'lucide-react'

export default function Partners() {
  const partners = [
    {
      name: 'Croma (A Tata Enterprise)',
      type: 'Electronics & Appliances Network',
      city: 'Pan-India (400+ Megastores)',
      features: 'Full Apple Authorized Reseller, Sony Bravia Experience Zones, On-site Installation.'
    },
    {
      name: 'Reliance Digital',
      type: 'Omnichannel Technology Partner',
      city: 'Pan-India (600+ Stores)',
      features: 'ResQ certified tech support, genuine Samsung & Apple flagship display network.'
    },
    {
      name: 'Vijay Sales',
      type: 'Premium Retail Chain',
      city: 'West & North India (140+ Outlets)',
      features: 'Direct manufacturer brand warranties, zero-hassle exchange & pickup points.'
    },
    {
      name: 'Tanishq Jewellery Boutiques',
      type: 'A Tata Enterprise · Gold & Bullion Partner',
      city: 'Pan-India (450+ Boutiques)',
      features: '100% BIS Hallmarked 24K pure gold coins, tamper-proof CertiCard with buyback guarantee.'
    },
    {
      name: 'Tata CLiQ Luxury & Electronics',
      type: 'Digital Logistics & Fulfillment Partner',
      city: 'Express Doorstep Delivery Across 19,000+ Pincodes',
      features: 'Insured air dispatch, brand warranty registration, scheduled door delivery.'
    },
    {
      name: 'Daikin & LG Solution Centers',
      type: 'Authorized HVAC & Home Appliances Partner',
      city: '150+ Authorized Service Centers',
      features: 'Direct factory engineers, free site inspection and certified copper piping installation.'
    }
  ]

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 py-16 radial-mesh">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-[#131B2E]/80 p-8 sm:p-12 shadow-2xl backdrop-blur-xl">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1 text-xs font-semibold tracking-wider text-indigo-400 mb-3">
              <Building2 className="h-3.5 w-3.5 text-indigo-400" />
              <span>Authorized Distribution Network</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-indigo-300">
              Trusted Retail Partners Across India
            </h1>
            <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-300">
              SaveNBuy collaborates directly with India's most respected retail chains and authorized corporate brand distributors. Every asset acquired is 100% original, brand-sealed, and registered with official manufacturer warranties.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="rounded-2xl border border-white/10 bg-[#0B0F19]/60 p-6 backdrop-blur-md hover:border-indigo-500/40 transition-all duration-200"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-base font-bold text-white">{partner.name}</h2>
                    <p className="text-xs font-medium text-indigo-400 mt-1">{partner.type}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-bold text-emerald-400 border border-emerald-500/30">
                    <ShieldCheck className="h-3 w-3" />
                    <span>Verified</span>
                  </span>
                </div>
                <p className="mt-3 text-xs text-slate-400 flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-slate-500" />
                  <span>{partner.city}</span>
                </p>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">{partner.features}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-[#0B0F19]/80 p-5 border border-white/10 text-xs text-slate-300">
            <p className="font-semibold text-white mb-1">Flexible Fulfillment Guarantee:</p>
            Members can select either complimentary insured doorstep delivery or personally collect their brand-sealed asset directly from their nearest authorized partner store (Croma, Reliance Digital, or Tanishq) immediately upon plan milestone completion.
          </div>
        </div>
      </div>
    </div>
  )
}
