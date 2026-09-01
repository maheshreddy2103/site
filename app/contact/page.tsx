export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-navy">
      <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <div className="rounded-[2rem] border border-brand-gold/20 bg-cream p-10 shadow-lg">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-maroon">Contact Us</p>
          <h1 className="mt-4 text-4xl font-serif font-semibold text-navy">We are here for your questions.</h1>
          <p className="mt-4 text-slate-600">Reach our support team for membership info, payments, product inquiries and partner assistance.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-brand-gold/15 bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-brand-maroon">Customer support</p>
              <p className="mt-3 text-slate-600">help@brand.com</p>
              <p className="mt-1 text-slate-600">+91 22 1234 5678</p>
            </div>
            <div className="rounded-3xl border border-brand-gold/15 bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-brand-maroon">Branch support</p>
              <p className="mt-3 text-slate-600">branches@brand.com</p>
              <p className="mt-1 text-slate-600">+91 22 4321 8765</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
