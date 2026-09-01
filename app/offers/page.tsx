export default function OffersPage() {
  return (
    <div className="min-h-screen bg-white text-navy">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="rounded-[2rem] border border-brand-gold/20 bg-cream p-10 shadow-lg">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-maroon">Offers</p>
          <h1 className="mt-4 text-4xl font-serif font-semibold text-navy">Carefully selected offers for members.</h1>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              { title: 'Premium electronics', description: 'Special member pricing and warranty packages for curated products.' },
              { title: 'Reward credits', description: 'Campaign-based credits for consistent EMI performance.' }
            ].map((offer) => (
              <div key={offer.title} className="rounded-3xl border border-brand-gold/15 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-navy">{offer.title}</h2>
                <p className="mt-3 text-slate-600">{offer.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
