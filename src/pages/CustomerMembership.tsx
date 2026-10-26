import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function CustomerMembership() {
  const { user } = useAuth()
  const membershipId = user?.membershipId || 'MEM-1001'
  const planName = 'Prime Platinum'
  const monthly = '₹1,000'
  const remaining = '₹8,000'
  const totalAmount = '₹12,000'
  const installments = 12
  const paidMonths = 4

  return (
    <div className="min-h-screen bg-cream text-navy">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="rounded-[2rem] border border-brand-gold/20 bg-white p-8 shadow-lg">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-brand-maroon">My membership · {membershipId}</p>
              <h1 className="mt-2 text-4xl font-serif font-semibold text-navy">Your plan summary</h1>
              <p className="mt-3 text-slate-600">Track payment progress, remaining installments and reward eligibility with clear terms.</p>
            </div>
            <Link to="/customer/payments" className="rounded-full bg-brand-maroon px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#431523]">
              Pay Next EMI
            </Link>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              { label: 'Plan', value: planName },
              { label: 'Monthly EMI', value: monthly },
              { label: 'Remaining amount', value: `${remaining} of ${totalAmount}` }
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
              {Array.from({ length: installments }, (_, idx) => {
                const month = idx + 1
                const status = month <= paidMonths ? 'Paid' : month === paidMonths + 1 ? 'Current' : 'Pending'
                return (
                  <div key={month} className="rounded-3xl border border-brand-gold/20 bg-white p-4 text-sm">
                    <p className="font-semibold text-navy">Month {month}</p>
                    <p className={`mt-2 font-medium ${status === 'Paid' ? 'text-green-700' : status === 'Current' ? 'text-brand-maroon' : 'text-slate-500'}`}>
                      {status === 'Paid' ? '✓ Paid' : status === 'Current' ? '⏳ Due Soon' : '○ Pending'}
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

