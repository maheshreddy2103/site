import React from 'react'
import { Building2, ShieldCheck, MapPin } from 'lucide-react'

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
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 py-16 radial-mesh">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 shadow-sm">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1 text-xs font-semibold tracking-wider text-indigo-700 mb-3 shadow-sm">
              <Building2 className="h-3.5 w-3.5 text-indigo-600" />
              <span>Authorized Distribution Network</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Trusted Retail Partners Across India
            </h1>
            <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-600">
              SaveNBuy collaborates directly with India's most respected retail chains and authorized corporate brand distributors. Every asset acquired is 100% original, brand-sealed, and registered with official manufacturer warranties.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6 hover:border-indigo-300 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-base font-bold text-slate-900">{partner.name}</h2>
                    <p className="text-xs font-medium text-indigo-600 mt-1">{partner.type}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700 border border-emerald-200">
                    <ShieldCheck className="h-3 w-3" />
                    <span>Verified</span>
                  </span>
                </div>
                <p className="mt-3 text-xs text-slate-500 flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-slate-400" />
                  <span>{partner.city}</span>
                </p>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{partner.features}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-slate-50 p-5 border border-slate-200 text-xs text-slate-600">
            <p className="font-semibold text-slate-900 mb-1">Flexible Fulfillment Guarantee:</p>
            Members can select either complimentary insured doorstep delivery or personally collect their brand-sealed asset directly from their nearest authorized partner store (Croma, Reliance Digital, or Tanishq) immediately upon plan milestone completion.
          </div>
        </div>
      </div>
    </div>
  )
}