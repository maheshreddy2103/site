import React from 'react'
import { Building2, TrendingUp, Users, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react'

export default function ManagerDashboard() {
  const branches = [
    { city: 'Mumbai Central Flagship', manager: 'Anand Kulkarni', members: 480, revenue: '₹1.62 Cr', compliance: '100%' },
    { city: 'Bengaluru Tech Park Hub', manager: 'Divya Shenoy', members: 395, revenue: '₹1.35 Cr', compliance: '99.5%' },
    { city: 'Delhi NCR Experience Zone', manager: 'Rohit Batra', members: 340, revenue: '₹1.10 Cr', compliance: '99.1%' },
    { city: 'Hyderabad Cyber Hub', manager: 'Kalyan Varma', members: 267, revenue: '₹75.0 Lakh', compliance: '100%' }
  ]

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 py-10 radial-mesh">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="border-b border-white/10 pb-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold text-indigo-400 mb-2">
            <Building2 className="h-3.5 w-3.5" />
            <span>Branch Hierarchy &amp; Regional Operations</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Operations &amp; Branch Management
          </h1>
          <p className="mt-1 text-xs text-slate-400">
            Multi-branch revenue performance, regional retail partner alignment, and staff compliance metrics.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          <div className="glass-card rounded-2xl border border-white/10 p-5">
            <span className="text-xs uppercase tracking-wider text-slate-400">Consolidated Regional Volume</span>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-white">₹4.82 Cr</span>
              <span className="text-xs text-emerald-400 font-semibold">+14.2%</span>
            </div>
            <p className="mt-1 text-[11px] text-slate-400">Across 4 metro operational zones</p>
          </div>

          <div className="glass-card rounded-2xl border border-white/10 p-5">
            <span className="text-xs uppercase tracking-wider text-slate-400">Partner Store Pickups</span>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-indigo-300">89.4%</span>
              <span className="text-xs text-slate-400">Store Direct</span>
            </div>
            <p className="mt-1 text-[11px] text-slate-400">Zero transit damage incidents</p>
          </div>

          <div className="glass-card rounded-2xl border border-white/10 p-5">
            <span className="text-xs uppercase tracking-wider text-slate-400">Customer Satisfaction Score</span>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-emerald-400">4.92 / 5.0</span>
              <span className="text-xs text-emerald-400">Top Tier</span>
            </div>
            <p className="mt-1 text-[11px] text-slate-400">Based on 1,200+ verified post-delivery reviews</p>
          </div>
        </div>

        {/* Branch Performance Table */}
        <div className="mt-8 glass-card rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
          <div className="p-5 border-b border-white/10">
            <h2 className="text-base font-bold text-white">Regional Hub Operations</h2>
            <p className="text-xs text-slate-400">Branch revenue, total enrolled accounts, and compliance auditing</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#0B0F19]/80 text-slate-400 uppercase tracking-wider text-[10px] border-b border-white/10">
                <tr>
                  <th className="py-3 px-4">Branch Zone</th>
                  <th className="py-3 px-4">Regional Manager</th>
                  <th className="py-3 px-4">Active Members</th>
                  <th className="py-3 px-4">Monthly Inflows</th>
                  <th className="py-3 px-4 text-right">Escrow Audit Compliance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {branches.map((b) => (
                  <tr key={b.city} className="hover:bg-white/[0.02] transition">
                    <td className="py-3.5 px-4 font-bold text-white">{b.city}</td>
                    <td className="py-3.5 px-4 text-slate-300">{b.manager}</td>
                    <td className="py-3.5 px-4 text-indigo-300 font-semibold">{b.members} accounts</td>
                    <td className="py-3.5 px-4 text-emerald-400 font-bold">{b.revenue}</td>
                    <td className="py-3.5 px-4 text-right">
                      <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-bold text-emerald-400 border border-emerald-500/30">
                        ✓ {b.compliance} Compliant
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  )
}
