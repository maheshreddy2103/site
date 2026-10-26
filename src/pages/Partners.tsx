import React from 'react'

export default function Partners() {
  const partners = [
    {
      name: 'Croma (A Tata Enterprise)',
      type: 'Electronics & Appliances Partner',
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
    <div className="min-h-screen bg-cream text-navy py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="rounded-[2.5rem] border border-brand-gold/20 bg-white p-10 shadow-lg">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-maroon">
              Authorized Partner Network
            </p>
            <h1 className="mt-3 text-4xl font-serif font-bold text-navy">
              Trusted Retail Partners Across India
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Lakshmi Club collaborates directly with India’s largest authorized retail chains and official brand outlets. Every product you earn or acquire through your membership is 100% original, sealed, and backed by full manufacturer warranty.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="rounded-3xl border border-brand-gold/15 bg-brand-cream/60 p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-lg font-bold text-navy">{partner.name}</h2>
                    <p className="text-xs font-semibold text-brand-maroon mt-1">{partner.type}</p>
                  </div>
                  <span className="rounded-full bg-brand-maroon/10 px-3 py-1 text-[11px] font-bold text-brand-maroon">
                    Verified
                  </span>
                </div>
                <p className="mt-3 text-xs font-medium text-slate-700">📍 {partner.city}</p>
                <p className="mt-2 text-xs leading-5 text-slate-600">{partner.features}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl bg-brand-maroon/5 p-6 border border-brand-gold/20 text-xs text-slate-600">
            <p className="font-semibold text-navy text-sm mb-1">Store Pickup Option:</p>
            Members can choose either complimentary insured doorstep delivery or personally collect their brand-sealed product directly from their nearest authorized partner store (Croma, Reliance Digital, or Tanishq) upon membership completion.
          </div>
        </div>
      </div>
    </div>
  )
}
