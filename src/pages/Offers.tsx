import React from 'react'
import { Link } from 'react-router-dom'
import { Gift, ArrowRight } from 'lucide-react'

export default function Offers() {
  const brandOffers = [
    {
      brand: 'Apple Official',
      title: 'iPhone 16 Exclusive Launch Bundle',
      tag: 'Limited Festive Offer',
      description: 'Join the iPhone 16 membership plan this month and receive a complimentary Apple 20W USB-C Fast Charger + ₹2,000 accessory credit voucher.',
      code: 'APPLE16FEST'
    },
    {
      brand: 'Sony Bravia Cinematic',
      title: 'Sony 55" 4K Google TV + Soundbar Perk',
      tag: 'Member Favorite',
      description: 'Members enrolling in the Sony Bravia 55" 4K Google TV plan qualify for a subsidized Sony HT-S20R 5.1 Channel Soundbar upgrade upon completing 6 consecutive on-time installments.',
      code: 'SONYBRAVIA'
    },
    {
      brand: 'Tanishq (Tata)',
      title: 'Sovereign Bullion Harvest Perk',
      tag: 'Auspicious Bonus',
      description: 'Complete your 12-month Tanishq 24K Gold Coin membership on time and receive an additional 250mg 24K pure gold coin bonus credited to your certified vault account.',
      code: 'TANISHQGOLD'
    },
    {
      brand: 'LG & Samsung Living',
      title: 'Free Extended Warranty & Installation',
      tag: 'Protection Shield',
      description: 'Get an extra 1-year comprehensive brand warranty plus complimentary copper piping and VIP installation kit on all LG & Samsung Smart Refrigerator, Washer, and Split AC plans.',
      code: 'APPLIANCEPRO'
    }
  ]

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 py-16 radial-mesh">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 shadow-sm">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1 text-xs font-semibold tracking-wider text-emerald-700 mb-3 shadow-sm">
              <Gift className="h-3.5 w-3.5 text-emerald-600" />
              <span>Institutional Member Perks</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Exclusive Brand Bundles &amp; Rewards
            </h1>
            <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
              In direct collaboration with authorized manufacturers, SaveNBuy members unlock complimentary official accessories, milestone cashbacks, and extended warranty protections.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {brandOffers.map((offer) => (
              <div
                key={offer.title}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/80 p-7 hover:border-indigo-300 hover:shadow-md transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                      {offer.brand}
                    </span>
                    <span className="rounded-full bg-indigo-50 px-3 py-0.5 text-[10px] font-bold text-indigo-700 border border-indigo-200">
                      {offer.tag}
                    </span>
                  </div>
                  <h2 className="mt-3 text-lg font-bold text-slate-900">{offer.title}</h2>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">{offer.description}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200 font-bold">
                    CODE: {offer.code}
                  </span>
                  <Link
                    to="/signup"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-indigo-700 transition"
                  >
                    <span>Claim Perk</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}