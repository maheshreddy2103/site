import { prisma } from '@/lib/server/db'
import { getCurrentUser } from '@/lib/server/user'

export default async function CustomerMembershipPage() {
  const user = await getCurrentUser()
  if (!user || !user.customer || !user.customer.membershipId) {
    return (
      <div className="min-h-screen bg-cream text-navy">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <div className="rounded-[2rem] border border-brand-gold/20 bg-white p-8 shadow-lg text-center">
            <p className="text-xl font-semibold">You don't have an active membership.</p>
            <p className="mt-3 text-slate-600">Browse our membership plans and join to get benefits.</p>
          </div>
        </div>
      </div>
    )
  }

  const membership = await prisma.membership.findUnique({
    where: { membershipId: user.customer.membershipId },
    include: { plan: true }
  })

  if (!membership) {
    return (
      <div className="min-h-screen bg-cream text-navy">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <div className="rounded-[2rem] border border-brand-gold/20 bg-white p-8 shadow-lg text-center">
            <p className="text-xl font-semibold">No membership record found.</p>
          </div>
        </div>
      </div>
    )
  }

  const planName = membership.plan?.name ?? 'Custom Plan'
  const monthly = `₹${membership.monthlyAmount ?? 0}`
  const remaining = `₹${membership.remainingAmount ?? 0}`

  return (
    <div className="min-h-screen bg-cream text-navy">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="rounded-[2rem] border border-brand-gold/20 bg-white p-8 shadow-lg">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-brand-maroon">My membership</p>
              <h1 className="mt-2 text-4xl font-serif font-semibold text-navy">Your plan summary</h1>
              <p className="mt-3 text-slate-600">Track payment progress, remaining installments and reward eligibility with clear terms.</p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              { label: 'Plan', value: planName },
              { label: 'Monthly EMI', value: monthly },
              { label: 'Remaining amount', value: remaining }
            ].map((item) => (
              <div key={item.label} className="rounded-3xl border border-brand-gold/15 bg-brand-cream p-6 shadow-sm">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-600">{item.label}</p>
                <p className="mt-4 text-2xl font-semibold text-navy">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] border border-brand-gold/15 bg-brand-cream p-8">
            <h2 className="text-xl font-semibold text-navy">12-month progress</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: membership.installments ?? 12 }, (_, idx) => {
                const month = idx + 1
                const paidMonths = Math.round(((membership.paidAmount ?? 0) / (membership.totalAmount ?? 1)) * (membership.installments ?? 12))
                const status = month <= paidMonths ? 'Paid' : month === paidMonths + 1 ? 'Current' : 'Pending'
                return (
                  <div key={month} className="rounded-3xl border border-brand-gold/20 bg-white p-4 text-sm">
                    <p className="font-semibold text-navy">Month {month}</p>
                    <p className={`mt-2 ${status === 'Paid' ? 'text-green-700' : status === 'Current' ? 'text-brand-maroon' : 'text-slate-500'}`}>
                      {status}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
