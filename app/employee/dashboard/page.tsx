import { getCurrentUser } from '@/lib/server/user'

export default async function EmployeeDashboardPage() {
  const user = await getCurrentUser()
  const name = user?.employee?.firstName || user?.employee?.email || 'Team Member'
  const role = user?.role?.name || 'Employee'

  return (
    <div className="min-h-screen bg-cream text-navy">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="rounded-[2rem] border border-brand-gold/20 bg-white p-8 shadow-lg shadow-brand-maroon/10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-brand-maroon">Employee dashboard</p>
              <h1 className="mt-2 text-4xl font-serif font-semibold text-navy">Hello, {name}</h1>
              <p className="mt-3 text-sm text-slate-600">You are signed in as {role}. Manage customers, applications, collections, and support with role-based controls.</p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-4">
            {[
              { title: 'My leads', value: '24' },
              { title: 'Pending approvals', value: '6' },
              { title: 'Overdue EMIs', value: '12' },
              { title: 'Support tickets', value: '8' }
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-brand-gold/15 bg-brand-cream p-6 shadow-sm">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-600">{item.title}</p>
                <p className="mt-4 text-3xl font-semibold text-brand-maroon">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
