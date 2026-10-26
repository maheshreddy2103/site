import React from 'react'
import { Link } from 'react-router-dom'
import { productsData } from '../data/products'

export default function Home() {
  const featuredProducts = productsData.slice(0, 4) // iPhone 16, Samsung S24, OnePlus 12R, Sony Bravia

  return (
    <div className="min-h-screen bg-cream text-navy">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(197,157,95,0.25),_transparent_40%),_linear-gradient(180deg,_#f6efe6_0%,_#ffffff_100%)] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.25em] text-brand-maroon shadow-sm">
                <span>🏛️</span>
                <span>Zero Interest · Authentic Famous Brands · Trusted Savings</span>
              </div>
              <h1 className="mt-6 max-w-3xl text-4xl sm:text-6xl font-serif font-bold leading-tight tracking-tight text-navy">
                Build Today. <br />
                <span className="text-brand-maroon">Own Tomorrow.</span>
              </h1>
              <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-700">
                Turn your dreams into reality with disciplined monthly installments. Own authentic products from <strong>Apple</strong>, <strong>Sony</strong>, <strong>Samsung</strong>, <strong>LG</strong>, and <strong>Tanishq Gold</strong> with 0% interest and milestone rewards.
              </p>
              
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center rounded-full bg-brand-maroon px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-brand-maroon/25 transition hover:bg-[#431523]"
                >
                  Explore Brand Catalog
                </Link>
                <Link
                  to="/plans"
                  className="inline-flex items-center justify-center rounded-full border border-brand-maroon bg-white px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-brand-maroon transition hover:bg-brand-maroon hover:text-white"
                >
                  View Membership Plans
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-slate-600 border-t border-brand-gold/20 pt-6">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-700 font-bold text-base">✓</span>
                  <span>100% Original Manufacturer Sealed</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-700 font-bold text-base">✓</span>
                  <span>0% Interest · Zero Processing Fee</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-700 font-bold text-base">✓</span>
                  <span>Insured Pan-India Doorstep Delivery</span>
                </div>
              </div>
            </div>

            {/* Hero Interactive Card */}
            <div className="rounded-[2.5rem] border border-brand-gold/25 bg-white/90 p-8 shadow-2xl shadow-brand-maroon/10">
              <div className="rounded-2xl border border-brand-gold/20 bg-brand-gold/5 p-5 text-xs text-brand-navy">
                <p className="font-bold text-brand-maroon uppercase tracking-wider">How Lakshmi Club Works</p>
                <p className="mt-1.5 text-slate-600 leading-5">
                  Save a fixed monthly installment towards your chosen product. Complete your tenure and receive your brand-new product with official warranty and loyalty perks.
                </p>
              </div>

              <div className="mt-6 space-y-3">
                {[
                  {
                    brand: 'Apple',
                    title: 'iPhone 16 (128GB)',
                    price: '₹79,900',
                    emi: '₹6,658 / mo (12 mos)',
                    tag: 'Most Popular'
                  },
                  {
                    brand: 'Sony',
                    title: 'Bravia 55" 4K Google TV',
                    price: '₹57,990',
                    emi: '₹4,832 / mo (12 mos)',
                    tag: 'Top Rated'
                  },
                  {
                    brand: 'Tanishq',
                    title: '24K 10g Pure Gold Coin',
                    price: '₹79,500',
                    emi: '₹6,625 / mo (12 mos)',
                    tag: 'Auspicious'
                  }
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center justify-between rounded-2xl border border-brand-gold/15 bg-white p-4 shadow-sm hover:border-brand-maroon/40 transition"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-brand-maroon">
                          {item.brand}
                        </span>
                        <span className="rounded bg-brand-cream px-1.5 py-0.5 text-[9px] font-semibold text-slate-600">
                          {item.tag}
                        </span>
                      </div>
                      <h3 className="text-xs font-bold text-navy mt-1">{item.title}</h3>
                      <p className="text-[11px] text-slate-500 mt-0.5">MRP: {item.price}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-bold text-brand-maroon block">{item.emi}</span>
                      <span className="text-[10px] text-emerald-700 font-semibold">0% Interest</span>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/signup"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-brand-maroon px-5 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md transition hover:bg-[#431523]"
              >
                Join Today &amp; Start Saving
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Showcase */}
      <section className="bg-white py-16 sm:py-20 border-t border-brand-gold/15">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-maroon">Trending Brands</p>
              <h2 className="mt-2 text-3xl font-serif font-bold text-navy">Flagship Products You Love</h2>
              <p className="mt-2 text-sm text-slate-600">Direct from authorized brand partners: Apple, Sony, Samsung, and OnePlus.</p>
            </div>
            <Link
              to="/products"
              className="text-xs font-bold uppercase tracking-wider text-brand-maroon hover:underline flex items-center gap-1"
            >
              View Full 12+ Brand Catalog →
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <div
                key={product.sku}
                className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-brand-gold/20 bg-cream/30 shadow-sm hover:shadow-lg transition"
              >
                <div>
                  <div className="relative aspect-video w-full overflow-hidden bg-white">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute top-2 left-2 rounded-full bg-brand-maroon/90 px-2.5 py-0.5 text-[10px] font-bold text-white">
                      {product.brand}
                    </span>
                  </div>
                  <div className="p-5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-maroon">
                      {product.category}
                    </span>
                    <h3 className="mt-1 text-sm font-bold text-navy line-clamp-1">{product.name}</h3>
                    <p className="mt-1 text-xs text-slate-500 line-clamp-2">{product.description}</p>
                  </div>
                </div>
                <div className="p-5 pt-0">
                  <div className="border-t border-brand-gold/15 pt-3 flex items-baseline justify-between mb-3">
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase block">Monthly EMI</span>
                      <span className="text-lg font-bold text-brand-maroon">
                        ₹{product.monthlyEmi12.toLocaleString()}
                      </span>
                      <span className="text-[10px] text-slate-600"> /mo</span>
                    </div>
                    <span className="text-xs font-semibold text-slate-700">{product.formattedPrice}</span>
                  </div>
                  <Link
                    to={`/products/${product.sku}`}
                    className="inline-flex w-full items-center justify-center rounded-full bg-brand-maroon px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:bg-[#431523] transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Authorized Partners Bar */}
      <section className="bg-brand-cream/60 py-10 border-y border-brand-gold/15">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500 mb-6">
            Fulfilled Through India’s Most Trusted Retail Networks
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-sm font-serif font-bold text-slate-700">
            <span className="hover:text-brand-maroon transition cursor-default">Croma · A Tata Enterprise</span>
            <span className="hover:text-brand-maroon transition cursor-default">Reliance Digital</span>
            <span className="hover:text-brand-maroon transition cursor-default">Vijay Sales</span>
            <span className="hover:text-brand-maroon transition cursor-default">Tanishq Boutiques</span>
            <span className="hover:text-brand-maroon transition cursor-default">Tata CLiQ Luxury</span>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="howitworks" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-maroon">How It Works</p>
            <h2 className="mt-3 text-3xl font-serif font-bold text-navy sm:text-4xl">
              A Membership Plan Built for Steady Ownership
            </h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              No credit score barriers, no compounding debt. Just honest monthly progress towards the genuine products you and your family deserve.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                step: '1',
                title: 'Choose Brand & Plan',
                description: 'Pick your favourite smartphone, TV, appliance or gold coin and select a tenure of 6, 9, 12, or 18 months.'
              },
              {
                step: '2',
                title: 'Save Monthly at 0%',
                description: 'Make predictable monthly payments through UPI, Cards, or NetBanking. Earn bonus reward points for on-time dues.'
              },
              {
                step: '3',
                title: 'Receive Genuine Product',
                description: 'Upon completing your plan, receive your sealed brand-new product via insured delivery or collect at partner stores.'
              }
            ].map((item) => (
              <div key={item.step} className="rounded-[2rem] border border-brand-gold/15 bg-brand-cream p-8 shadow-sm">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-maroon text-xl font-serif font-bold text-white shadow-md">
                  {item.step}
                </div>
                <h3 className="mt-6 text-lg font-bold text-navy">{item.title}</h3>
                <p className="mt-2 text-xs leading-6 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
