export default function EmployeeLeadsPage() {
  const leads = [
    { id: 'LEAD-7001', name: 'Rohit Mehta', status: 'Contacted', source: 'Branch walk-in' },
    { id: 'LEAD-7002', name: 'Sneha Rao', status: 'Qualified', source: 'Referral' }
  ]

  return (
    <div className="min-h-screen bg-cream text-navy">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="rounded-[2rem] border border-brand-gold/20 bg-white p-8 shadow-sm">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-maroon">My leads</p>
          <h1 className="mt-4 text-4xl font-serif font-semibold text-navy">Lead pipeline</h1>
          <p className="mt-3 text-slate-600">Manage new leads, applications, and follow-ups in a role-specific queue.</p>
          <div className="mt-10 space-y-4">
            {leads.map((lead) => (
              <div key={lead.id} className="rounded-3xl border border-brand-gold/15 bg-brand-cream p-6 shadow-sm">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.28em] text-brand-maroon">{lead.id}</p>
                    <h2 className="mt-2 text-xl font-semibold text-navy">{lead.name}</h2>
                  </div>
                  <span className="rounded-full bg-white px-3 py-2 text-sm text-slate-600">{lead.status}</span>
                </div>
                <p className="mt-4 text-slate-600">Source: {lead.source}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
