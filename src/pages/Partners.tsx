import React from 'react'

export default function Partners() {
  return (
    <div className="min-h-screen bg-cream text-navy">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="rounded-[2rem] border border-brand-gold/20 bg-white p-10 shadow-lg">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-maroon">Retail Partners</p>
          <h1 className="mt-4 text-4xl font-serif font-semibold text-navy">Trusted retailers across regions.</h1>
          <p className="mt-4 text-slate-600">Our curated partner network offers quality products and reliable delivery through verified stores.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              { name: 'Lakshmi Central Store', city: 'Mumbai' },
              { name: 'Heritage Appliances', city: 'Ahmedabad' },
              { name: 'Royal Electronics', city: 'Bengaluru' },
              { name: 'Tradition Home', city: 'Chennai' }
            ].map((partner) => (
              <div key={partner.name} className="rounded-3xl border border-brand-gold/15 bg-brand-cream p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-navy">{partner.name}</h2>
                <p className="mt-3 text-slate-600">{partner.city}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

