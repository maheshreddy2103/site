import React from 'react'

export default function About() {
  return (
    <div className="min-h-screen bg-cream text-navy">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="rounded-[2.5rem] border border-brand-gold/20 bg-white p-10 shadow-lg">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-maroon">About Lakshmi Club</p>
          <h1 className="mt-3 text-4xl font-serif font-bold text-navy">
            A Trusted Path to Aspirational Ownership
          </h1>
          <p className="mt-6 text-sm text-slate-600 leading-8">
            <strong>Lakshmi Club</strong> was founded on the timeless Indian principles of disciplined savings, transparent trust, and celebration of prosperity. We modernise the beloved Indian tradition of installment membership schemes (such as jewellery and festive electronics clubs) into a clean, audited digital platform.
          </p>
          <p className="mt-4 text-sm text-slate-600 leading-8">
            Rather than high-interest personal loans or credit card debt, our members plan ahead for what they love — whether that is an <strong>Apple iPhone 16</strong>, a <strong>Sony Bravia 4K TV</strong>, an <strong>LG AI Washing Machine</strong>, or a <strong>Tanishq 24K Gold Coin</strong>. Members pay zero-interest monthly installments, earn milestone bonus reward points, and take delivery with 100% genuine manufacturer seals and official warranties.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              {
                title: 'Our Mission',
                description: 'Enable families across India to own genuine branded electronics, home upgrades and pure gold through honest, zero-interest savings memberships.'
              },
              {
                title: 'Our Integrity Promise',
                description: 'Zero hidden fees, 100% manufacturer warranty, verified authorized retail distribution partners, and bank-grade audit-ready records for every single payment.'
              }
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-brand-gold/15 bg-brand-cream/60 p-6 shadow-sm">
                <h2 className="text-lg font-bold text-navy">{item.title}</h2>
                <p className="mt-3 text-xs leading-6 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
