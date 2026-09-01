export default function AdminDashboardPage() {
  return (
    <div className="min-h-screen bg-cream text-navy">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="rounded-[2rem] border border-brand-gold/20 bg-white p-8 shadow-lg shadow-brand-maroon/10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-brand-maroon">Admin command center</p>
              <h1 className="mt-2 text-4xl font-serif font-semibold text-navy">Administration and system governance</h1>
              <p className="mt-3 text-slate-600">Manage roles, approvals, branches, policies, and audit logs with secure access.</p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              { title: 'Users', value: '120' },
              { title: 'Pending approvals', value: '7' },
              { title: 'Audit logs', value: '1,354' }
            ].map((metric) => (
              <div key={metric.title} className="rounded-3xl border border-brand-gold/15 bg-brand-cream p-6 shadow-sm">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-600">{metric.title}</p>
                <p className="mt-4 text-3xl font-semibold text-brand-maroon">{metric.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
