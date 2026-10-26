import React from 'react'

export default function SalesDashboard() {
  return (
    <div className="min-h-screen bg-white text-navy">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="rounded-[2rem] border border-brand-gold/20 bg-cream p-8 shadow-sm">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-brand-maroon">Sales dashboard</p>
              <h1 className="mt-2 text-4xl font-serif font-semibold text-navy">Performance and target tracking</h1>
              <p className="mt-3 text-slate-600">Monitor lead conversion, agent targets, commissions and customer acquisition metrics.</p>
            </div>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              { title: 'New customers', value: '320' },
              { title: 'Conversions', value: '42%' },
              { title: 'Agent target', value: '₹1.8 Cr' }
            ].map((metric) => (
              <div key={metric.title} className="rounded-3xl border border-brand-gold/15 bg-white p-6 shadow-sm">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-600">{metric.title}</p>
                <p className="mt-4 text-3xl font-semibold text-brand-maroon">{metric.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

