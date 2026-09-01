import Link from 'next/link'

const plans = [
  { name: 'Essential Gold', price: '₹8,999', duration: '9 months', description: 'Membership for essential electronics & home appliances.' },
  { name: 'Prime Platinum', price: '₹12,000', duration: '12 months', description: 'Balanced plan for trusted progress with rewards eligibility.' },
  { name: 'Sovereign Elite', price: '₹18,999', duration: '18 months', description: 'Premium value plan for higher-ticket products.' }
]

export default function PlansPage() {
  return (
    <div className="min-h-screen bg-cream py-16 text-navy">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-maroon">Membership Plans</p>
          <h1 className="mt-4 text-4xl font-serif font-semibold text-navy">Plans designed for long-term confidence.</h1>
          <p className="mt-4 text-slate-600">Select a membership plan with transparent terms, flexible product access and reward pathways.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.name} className="rounded-[2rem] border border-brand-gold/20 bg-white p-8 shadow-sm">
              <p className="text-sm uppercase tracking-[0.28em] text-brand-maroon">{plan.name}</p>
              <p className="mt-4 text-4xl font-semibold text-navy">{plan.price}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-600">{plan.duration}</p>
              <p className="mt-6 text-slate-600">{plan.description}</p>
              <Link href="/signup" className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-brand-maroon px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#431523]">
                Join this plan
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
