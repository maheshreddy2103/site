export default function CustomerRewardsPage() {
  return (
    <div className="min-h-screen bg-white text-navy">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="rounded-[2rem] border border-brand-gold/20 bg-cream p-8 shadow-sm">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-maroon">Rewards</p>
          <h1 className="mt-4 text-4xl font-serif font-semibold text-navy">Reward points and campaign activity</h1>
          <p className="mt-3 text-slate-600">Browse your points balance, earned rewards, and campaign eligibility with audit-safe visibility.</p>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-brand-gold/15 bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-600">Points balance</p>
              <p className="mt-4 text-3xl font-semibold text-brand-maroon">2,450</p>
            </div>
            <div className="rounded-3xl border border-brand-gold/15 bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-600">Points earned</p>
              <p className="mt-4 text-3xl font-semibold text-navy">3,200</p>
            </div>
            <div className="rounded-3xl border border-brand-gold/15 bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-600">Points redeemed</p>
              <p className="mt-4 text-3xl font-semibold text-navy">750</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
