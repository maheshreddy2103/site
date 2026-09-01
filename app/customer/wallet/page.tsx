export default function WalletPage() {
  return (
    <div className="min-h-screen bg-cream text-navy">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="rounded-[2rem] border border-brand-gold/20 bg-white p-8 shadow-lg">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-brand-maroon">Wallet</p>
              <h1 className="mt-2 text-4xl font-serif font-semibold text-navy">Customer wallet summary</h1>
              <p className="mt-3 text-slate-600">Track wallet balance, promotional credits, and transaction records separately from EMI obligations.</p>
            </div>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              { label: 'Balance', value: '₹1,250' },
              { label: 'Reward credits', value: '₹550' },
              { label: 'Promotional credits', value: '₹700' }
            ].map((item) => (
              <div key={item.label} className="rounded-3xl border border-brand-gold/15 bg-brand-cream p-6 shadow-sm">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-600">{item.label}</p>
                <p className="mt-4 text-3xl font-semibold text-navy">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
