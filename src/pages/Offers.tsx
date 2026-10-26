import React from 'react'
import { Link } from 'react-router-dom'

export default function Offers() {
  const brandOffers = [
    {
      brand: 'Apple Special',
      title: 'iPhone 16 Exclusive Launch Bundle',
      tag: 'Limited Festive Offer',
      description: 'Join the iPhone 16 membership plan this month and receive a complimentary Apple 20W USB-C Fast Charger + ₹2,000 accessory voucher for Apple AirPods.',
      code: 'APPLE16FEST'
    },
    {
      brand: 'Sony Bravia Home Theatre',
      title: 'Sony 55" 4K Google TV + Soundbar Perk',
      tag: 'Member Favorite',
      description: 'Members enrolling in the Sony Bravia 55" 4K Google TV plan qualify for a subsidized Sony HT-S20R 5.1 Channel Soundbar upgrade upon completing 6 consecutive on-time EMIs.',
      code: 'SONYBRAVIA'
    },
    {
      brand: 'Tanishq (A Tata Enterprise)',
      title: 'Akshaya Tritiya Gold Harvest Perk',
      tag: 'Auspicious Bonus',
      description: 'Complete your 12-month Tanishq 24K Gold Coin membership on time and receive an additional 250mg 24K pure gold coin bonus credited to your certified safe custody account.',
      code: 'TANISHQGOLD'
    },
    {
      brand: 'LG & Samsung Home Living',
      title: 'Free Extended Warranty & Installation',
      tag: 'Protection Shield',
      description: 'Get an extra 1-year comprehensive brand warranty plus complimentary copper pipe and VIP installation kit on all LG & Samsung Smart Refrigerator, Washer, and Split AC plans.',
      code: 'APPLIANCEPRO'
    }
  ]

  return (
    <div className="min-h-screen bg-cream text-navy py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="rounded-[2.5rem] border border-brand-gold/20 bg-white p-10 shadow-lg">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-maroon">Member Perks &amp; Promotions</p>
            <h1 className="mt-3 text-4xl font-serif font-bold text-navy">Exclusive Brand Offers</h1>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              In partnership with leading brands and retail chains, Lakshmi Club members receive special bundle perks, milestone bonuses, and manufacturer warranty upgrades.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {brandOffers.map((offer) => (
              <div
                key={offer.title}
                className="flex flex-col justify-between rounded-3xl border border-brand-gold/20 bg-brand-cream/60 p-7 shadow-sm hover:shadow-md transition"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-maroon">
                      {offer.brand}
                    </span>
                    <span className="rounded-full bg-brand-maroon/10 px-3 py-1 text-[11px] font-bold text-brand-maroon">
                      {offer.tag}
                    </span>
                  </div>
                  <h2 className="mt-3 text-xl font-bold text-navy">{offer.title}</h2>
                  <p className="mt-3 text-xs leading-6 text-slate-600">{offer.description}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-gold/15 flex items-center justify-between">
                  <span className="text-[11px] font-mono font-semibold text-slate-500 bg-white px-2.5 py-1 rounded-lg border border-slate-200">
                    Promo Code: {offer.code}
                  </span>
                  <Link
                    to="/signup"
                    className="rounded-full bg-brand-maroon px-4 py-2 text-xs font-bold text-white hover:bg-[#431523] transition"
                  >
                    Claim Perk
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
