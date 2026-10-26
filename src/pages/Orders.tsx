import React from 'react'

export default function Orders() {
  const orders = [
    {
      id: 'ORD-1024',
      product: 'Sony Bravia 55" 4K Google TV (KD-55X74L)',
      brand: 'Sony',
      status: 'Active Plan · Installment 4/12',
      amount: '₹57,990',
      monthly: '₹4,832 / month',
      dueDate: '10 August'
    },
    {
      id: 'ORD-1042',
      product: 'Apple iPhone 15 (128GB) - Blue',
      brand: 'Apple',
      status: 'Delivered · Warranty Active',
      amount: '₹69,900',
      monthly: '12/12 Completed',
      dueDate: 'Fulfilled 24 July via Croma Mumbai'
    }
  ]

  return (
    <div className="min-h-screen bg-cream text-navy py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-8 rounded-[2rem] border border-brand-gold/20 bg-white p-8 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-maroon">My Orders &amp; Delivery</p>
          <h1 className="mt-2 text-3xl font-serif font-bold text-navy">Your Membership Acquisitions</h1>
          <p className="mt-3 text-xs text-slate-600">Track installment progress, partner fulfillment, and official manufacturer warranty for your products.</p>
        </div>
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="rounded-[2rem] border border-brand-gold/20 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-maroon">{order.brand}</span>
                    <span className="text-[11px] text-slate-400">· {order.id}</span>
                  </div>
                  <h2 className="mt-1 text-lg font-bold text-navy">{order.product}</h2>
                </div>
                <div className="text-left md:text-right">
                  <p className="text-xs text-slate-500">Total Value</p>
                  <p className="text-xl font-bold text-brand-maroon">{order.amount}</p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-slate-600 pt-4 border-t border-slate-100">
                <span className="rounded-full bg-brand-cream px-3 py-1 font-semibold text-slate-700 border border-brand-gold/20">
                  {order.status}
                </span>
                <span className="rounded-full bg-slate-50 px-3 py-1 font-medium text-slate-600 border border-slate-200">
                  {order.dueDate}
                </span>
                <span className="text-[11px] text-emerald-700 font-semibold ml-auto">
                  ✓ Official Manufacturer Sealed
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
