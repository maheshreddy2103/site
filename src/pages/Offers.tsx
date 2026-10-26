import React from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, Gift, Tag, ArrowRight } from 'lucide-react'

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
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 py-16 radial-mesh">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-[#131B2E]/80 p-8 sm:p-12 shadow-2xl backdrop-blur-xl">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-xs font-semibold tracking-wider text-emerald-400 mb-3">
              <Gift className="h-3.5 w-3.5 text-emerald-400" />
              <span>Institutional Member Perks</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-indigo-300">
              Exclusive Brand Bundles &amp; Rewards
            </h1>
            <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
              In direct collaboration with authorized manufacturers, SaveNBuy members unlock complimentary official accessories, milestone cashbacks, and extended warranty protections.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {brandOffers.map((offer) => (
              <div
                key={offer.title}
                className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0B0F19]/60 p-7 backdrop-blur-md hover:border-indigo-500/40 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                      {offer.brand}
                    </span>
                    <span className="rounded-full bg-indigo-500/10 px-3 py-0.5 text-[10px] font-bold text-indigo-300 border border-indigo-500/20">
                      {offer.tag}
                    </span>
                  </div>
                  <h2 className="mt-3 text-lg font-bold text-white">{offer.title}</h2>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300">{offer.description}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/30">
                    CODE: {offer.code}
                  </span>
                  <Link
                    to="/signup"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 px-4 py-2 text-xs font-bold text-white shadow-[0_0_15px_rgba(99,102,241,0.3)] hover:from-indigo-600 hover:to-indigo-700 transition"
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
