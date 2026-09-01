import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-cream text-navy">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(197,157,95,0.25),_transparent_40%),_linear-gradient(180deg,_#f6efe6_0%,_#ffffff_100%)] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header is rendered globally via the layout Navbar; removed duplicate here */}

          <div className="mt-20 grid gap-12 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex rounded-full border border-brand-gold/30 bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.28em] text-brand-maroon shadow-sm">
                Trusted membership plans with clear EMI schedules
              </div>
              <h1 className="mt-8 max-w-3xl text-5xl font-serif font-semibold leading-tight tracking-tight text-navy sm:text-6xl">
                Build Today. Own Tomorrow.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
                Flexible membership plans that help you move closer to the products you want, with meaningful rewards along the way.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link href="/plans" className="inline-flex items-center justify-center rounded-full bg-brand-maroon px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-maroon/20 transition hover:bg-[#431523]">
                  Explore Membership Plans
                </Link>
                <Link href="/signup" className="inline-flex items-center justify-center rounded-full border border-brand-maroon bg-white px-6 py-3 text-sm font-semibold text-brand-maroon transition hover:bg-brand-maroon hover:text-white">
                  Become a Member
                </Link>
              </div>
            </div>
            <div className="rounded-[2rem] border border-brand-gold/15 bg-white/80 p-8 shadow-2xl shadow-brand-maroon/10">
              <div className="mb-4 rounded-3xl border border-brand-gold/20 bg-brand-gold/5 p-6 text-sm text-brand-navy">
                <p className="font-semibold text-brand-maroon">Why choose our membership?</p>
                <p className="mt-3 text-slate-600">Transparent EMIs, premium product access, and reward paths built for steady progress.</p>
              </div>
              <div className="grid gap-4">
                {[
                  { title: 'Transparent payments', detail: 'No hidden fees, clear schedules and audit-ready records.' },
                  { title: 'Premium products', detail: 'Electronics, appliances and trusted retail partner offers.' },
                  { title: 'Trusted service', detail: 'Secure onboarding, KYC controls, and role-based support.' }
                ].map((item) => (
                  <div key={item.title} className="rounded-3xl border border-brand-gold/15 bg-white p-5 shadow-sm">
                    <h3 className="text-base font-semibold text-navy">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="howitworks" className="border-t border-brand-gold/20 bg-white py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-maroon">How It Works</p>
            <h2 className="mt-4 text-3xl font-semibold text-navy sm:text-4xl">A membership plan designed for steady progress.</h2>
            <p className="mt-4 text-slate-600">Choose a plan, complete monthly payments, qualify for transparent benefits and receive your product at the end of the term.</p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              { step: '1', title: 'Join a plan', description: 'Select a membership plan with a clear EMI schedule and preferred product.' },
              { step: '2', title: 'Pay monthly', description: 'Make each EMI payment on time through secure gateway integration.' },
              { step: '3', title: 'Earn rewards', description: 'Track progress, qualify for milestone rewards and view membership transparency.' }
            ].map((item) => (
              <div key={item.step} className="rounded-[2rem] border border-brand-gold/15 bg-brand-cream p-8 shadow-sm">
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-brand-maroon text-2xl font-semibold text-white">{item.step}</div>
                <h3 className="mt-6 text-xl font-semibold text-navy">{item.title}</h3>
                <p className="mt-3 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="plans" className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-brand-maroon">Membership Plans</p>
              <h2 className="mt-3 text-3xl font-semibold text-navy">Plans built for trusted progress.</h2>
            </div>
            <Link href="/plans" className="text-sm font-medium text-brand-maroon underline">View full plan list</Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { name: 'Essential Gold', price: '₹8,999', duration: '9 months', feature: 'Premier electronics focus' },
              { name: 'Prime Platinum', price: '₹12,000', duration: '12 months', feature: 'Balanced product and reward access' },
              { name: 'Sovereign Elite', price: '₹18,999', duration: '18 months', feature: 'Higher value plans with premium benefits' }
            ].map((plan) => (
              <div key={plan.name} className="rounded-3xl border border-brand-gold/20 bg-white p-8 shadow-md">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-maroon">{plan.name}</p>
                <p className="mt-6 text-4xl font-semibold text-navy">{plan.price}</p>
                <p className="mt-3 text-sm uppercase tracking-[0.18em] text-slate-600">{plan.duration}</p>
                <p className="mt-6 text-slate-600">{plan.feature}</p>
                <div className="mt-8 space-y-3 text-sm text-slate-700">
                  <p>Transparent EMI schedule</p>
                  <p>Reward campaign eligibility</p>
                  <p>Retail partner access</p>
                </div>
                <Link href="/signup" className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-brand-maroon px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#431523]">
                  Join Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
