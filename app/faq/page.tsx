export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white text-navy">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="rounded-[2rem] border border-brand-gold/20 bg-cream p-10 shadow-lg">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-maroon">FAQs</p>
          <h1 className="mt-4 text-4xl font-serif font-semibold text-navy">Frequently asked questions</h1>
          <div className="mt-8 space-y-6 text-slate-600">
            {[
              { q: 'How does membership work?', a: 'You choose a plan, pay monthly EMIs, and receive the product once the term completes under approved terms.' },
              { q: 'Can I stop midway?', a: 'Discontinuation is handled under settlement terms defined in our policies and reviewed by the team.' },
              { q: 'Are rewards guaranteed?', a: 'Rewards are subject to campaign eligibility and terms set by the company. They are transparent and auditable.' }
            ].map((item) => (
              <div key={item.q}>
                <p className="text-lg font-semibold text-navy">{item.q}</p>
                <p className="mt-2 text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
