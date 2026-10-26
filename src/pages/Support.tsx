import React from 'react'

export default function Support() {
  return (
    <div className="min-h-screen bg-white text-navy">
      <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <div className="rounded-[2rem] border border-brand-gold/20 bg-cream p-10 shadow-lg">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-maroon">Customer support</p>
          <h1 className="mt-4 text-4xl font-serif font-semibold text-navy">Support when you need it</h1>
          <p className="mt-4 text-slate-600">Open a ticket, track requests, and get help for payments, membership, orders and rewards.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              { title: 'Payment', description: 'Assistance with EMI payments and settlement terms.' },
              { title: 'Membership', description: 'Help with plan details, eligibility and progress.' },
              { title: 'Orders', description: 'Track deliveries, returns, and order status.' },
              { title: 'Rewards', description: 'Clarify campaign rules, points and benefits.' }
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-brand-gold/15 bg-white p-6 shadow-sm">
                <p className="text-lg font-semibold text-navy">{item.title}</p>
                <p className="mt-3 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

