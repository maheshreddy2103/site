import React from 'react'

export default function Orders() {
  const orders = [
    { id: 'ORD-1024', product: 'Regal Smart LED TV', status: 'Payment in progress', amount: '₹12,000', dueDate: '10 Aug' },
    { id: 'ORD-1042', product: 'Sampada Smartphone', status: 'Delivered', amount: '₹9,499', dueDate: '24 Jul' }
  ]

  return (
    <div className="min-h-screen bg-white text-navy">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="mb-8 rounded-[2rem] border border-brand-gold/20 bg-cream p-8 shadow-sm">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-maroon">Orders</p>
          <h1 className="mt-4 text-4xl font-serif font-semibold text-navy">Your purchase history</h1>
          <p className="mt-4 text-slate-600">Track order status, payment progress and delivery details for your membership purchases.</p>
        </div>
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="rounded-[2rem] border border-brand-gold/20 bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-brand-maroon">{order.id}</p>
                  <h2 className="mt-2 text-xl font-semibold text-navy">{order.product}</h2>
                </div>
                <div className="text-right">
                  <p className="text-sm text-slate-600">Amount</p>
                  <p className="mt-1 text-lg font-semibold text-brand-maroon">{order.amount}</p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-600">
                <span className="rounded-full border border-brand-gold/30 bg-brand-cream px-3 py-2">Status: {order.status}</span>
                <span className="rounded-full border border-brand-gold/30 bg-brand-cream px-3 py-2">Due: {order.dueDate}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

