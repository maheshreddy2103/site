import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function CustomerDashboard() {
  const { user } = useAuth()
  const name = user?.name || 'Ananya Patel'

  return (
    <div className="min-h-screen bg-cream text-navy">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="rounded-[2rem] border border-brand-gold/20 bg-white p-8 shadow-lg shadow-brand-maroon/10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-brand-maroon">Welcome back</p>
              <h1 className="mt-2 text-4xl font-serif font-semibold text-navy">Welcome, {name}</h1>
              <p className="mt-3 max-w-2xl text-sm text-slate-600">Your membership progress, upcoming EMI, reward status, and wallet summary in one place.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/customer/membership" className="rounded-full border border-brand-maroon px-5 py-3 text-sm font-semibold text-brand-maroon transition hover:bg-brand-maroon hover:text-white">
                View Membership
              </Link>
              <Link to="/customer/payments" className="rounded-full bg-brand-maroon px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#431523]">
                Pay EMI
              </Link>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-4">
            {[
              { label: 'Membership ID', value: user?.membershipId || 'MEM-1001', detail: 'Active Prime Platinum' },
              { label: 'Next EMI', value: '₹1,000', detail: 'Due 10 August' },
              { label: 'Total Paid', value: '₹4,000', detail: '4 / 12 installments' },
              { label: 'Reward Status', value: 'Eligible', detail: 'Loyalty Tier: Silver' }
            ].map((card) => (
              <div key={card.label} className="rounded-3xl border border-brand-gold/20 bg-brand-cream p-6 shadow-sm">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-600">{card.label}</p>
                <p className="mt-4 text-3xl font-semibold text-navy">{card.value}</p>
                <p className="mt-2 text-sm text-slate-600">{card.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-brand-gold/20 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-navy">Active Membership</h2>
              <p className="mt-4 text-sm text-slate-600">₹12,000 product value · ₹1,000/month · 8 payments remaining</p>
            </div>
            <div className="rounded-3xl border border-brand-gold/20 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-navy">Wallet Balance</h2>
              <p className="mt-4 text-3xl font-semibold text-brand-maroon">₹1,250</p>
              <p className="mt-2 text-sm text-slate-600">Reward and promotional credits</p>
            </div>
            <div className="rounded-3xl border border-brand-gold/20 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-navy">Reward Points</h2>
              <p className="mt-4 text-3xl font-semibold text-brand-maroon">2,450</p>
              <p className="mt-2 text-sm text-slate-600">Earned through on-time payments and engagement</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

