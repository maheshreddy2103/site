export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream text-navy">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="rounded-[2rem] border border-brand-gold/20 bg-white p-10 shadow-lg">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-maroon">About Us</p>
          <h1 className="mt-4 text-4xl font-serif font-semibold text-navy">A trusted path to premium ownership.</h1>
          <p className="mt-6 text-slate-600 leading-8">
            [BRAND NAME] was founded on the principles of transparency, steady progress and responsible membership financing. We combine traditional Indian heritage with modern financial discipline to help customers access premium products without compromising clarity.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              { title: 'Our mission', description: 'Enable meaningful product ownership through clear EMI plans and rewards.' },
              { title: 'Our promise', description: 'Transparent terms, secure service and audit-ready records for every member.' }
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-brand-gold/15 bg-cream p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-navy">{item.title}</h2>
                <p className="mt-3 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
