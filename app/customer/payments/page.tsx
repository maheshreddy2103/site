'use client'

export default function CustomerPaymentsPage() {
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
              <p className="mt-3 text-3xl font-semibold text-green-700">On schedule</p>
            </div>
          </div>
          <div className="mt-10 rounded-[2rem] border border-brand-gold/15 bg-brand-maroon/5 p-8">
            <p className="text-lg font-semibold text-navy">Payment gateway ready</p>
            <p className="mt-3 text-slate-600">
              This page is designed to connect to a payment provider through a secure service layer. Transaction creation and webhook handling are implemented in the backend architecture.
            </p>
            <button className="mt-8 inline-flex rounded-full bg-brand-maroon px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#431523]">
              Proceed to pay
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
