import React, { useState } from 'react'

export default function CustomerPayments() {
  const [paid, setPaid] = useState(false)

  return (
    <div className="min-h-screen bg-white text-navy">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="rounded-[2rem] border border-brand-gold/20 bg-cream p-8 shadow-sm">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-maroon">Pay EMI</p>
          <h1 className="mt-4 text-4xl font-serif font-semibold text-navy">Secure payment orchestration</h1>
          <p className="mt-3 text-slate-600">Prepare your payment and confirm through a gateway-ready integration service layer.</p>
          
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-brand-gold/15 bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-600">Due date</p>
              <p className="mt-3 text-3xl font-semibold text-brand-maroon">10 August</p>
            </div>
            <div className="rounded-3xl border border-brand-gold/15 bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-600">Amount due</p>
              <p className="mt-3 text-3xl font-semibold text-navy">₹1,000</p>
            </div>
            <div className="rounded-3xl border border-brand-gold/15 bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-600">Status</p>
              <p className={`mt-3 text-3xl font-semibold ${paid ? 'text-green-700' : 'text-amber-600'}`}>
                {paid ? 'Payment Received' : 'On schedule'}
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-[2rem] border border-brand-gold/15 bg-brand-maroon/5 p-8">
            <p className="text-lg font-semibold text-navy">Payment gateway</p>
            <p className="mt-3 text-slate-600">
              UPI, NetBanking, Debit/Credit Cards and Lakshmi Wallet are supported for convenient, receipted payments.
            </p>
            {paid ? (
              <div className="mt-6 rounded-2xl bg-green-50 p-4 border border-green-200 text-green-800">
                ✓ Thank you! Your EMI payment of ₹1,000 has been processed successfully. Receipt #REC-{Date.now().toString().slice(-6)}.
              </div>
            ) : (
              <button 
                onClick={() => setPaid(true)}
                className="mt-8 inline-flex rounded-full bg-brand-maroon px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#431523]"
              >
                Proceed to pay ₹1,000
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

