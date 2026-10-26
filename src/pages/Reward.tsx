import React from 'react'

export default function Reward() {
  const campaigns = [
    { name: 'Milestone Rewards', status: 'Active', eligibility: 'Pay 6 EMIs on time', reward: '500 points' },
    { name: 'Loyalty Bonus', status: 'Active', eligibility: 'Complete 12 months', reward: '₹750 wallet credit' }
  ]

  return (
    <div className="min-h-screen bg-cream text-navy">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-maroon">Rewards</p>
          <h1 className="mt-4 text-4xl font-serif font-semibold text-navy">Rewards built on progress and transparency.</h1>
          <p className="mt-4 text-slate-600">View campaign eligibility, terms, and reward status while keeping every step auditable.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {campaigns.map((campaign) => (
            <div key={campaign.name} className="rounded-[2rem] border border-brand-gold/20 bg-white p-8 shadow-sm">
              <p className="text-sm uppercase tracking-[0.28em] text-brand-maroon">{campaign.name}</p>
              <p className="mt-4 text-2xl font-semibold text-navy">{campaign.reward}</p>
              <p className="mt-4 text-slate-600">Eligibility: {campaign.eligibility}</p>
              <p className="mt-2 text-sm text-slate-500">Status: {campaign.status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

