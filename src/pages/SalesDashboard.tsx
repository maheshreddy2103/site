import React from 'react'
import { TrendingUp, Users, Target, Award, ArrowUpRight, CheckCircle2 } from 'lucide-react'

export default function SalesDashboard() {
  const topPerformers = [
    { name: 'Kavita Menon', branch: 'Mumbai Central', leads: 42, conversions: 28, rate: '66.7%', commission: '₹42,000' },
    { name: 'Rohan Sharma', branch: 'Bengaluru Tech Park', leads: 38, conversions: 24, rate: '63.2%', commission: '₹36,000' },
    { name: 'Sneha Reddy', branch: 'Hyderabad Cyber Hub', leads: 35, conversions: 21, rate: '60.0%', commission: '₹31,500' },
    { name: 'Aditya Gupta', branch: 'Delhi NCR Hub', leads: 29, conversions: 19, rate: '65.5%', commission: '₹28,500' }
  ]

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 py-10 radial-mesh">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="border-b border-white/10 pb-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold text-indigo-400 mb-2">
            <Target className="h-3.5 w-3.5" />
            <span>Member Acquisition &amp; Conversion</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Sales &amp; Lead Conversion Desk
          </h1>
          <p className="mt-1 text-xs text-slate-400">
            Field agent conversion metrics, campaign enrollment funnels, and milestone commissions.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="mt-8 grid gap-5 sm:grid-cols-4">
          <div className="glass-card rounded-2xl border border-white/10 p-5">
            <span className="text-xs uppercase tracking-wider text-slate-400">Monthly New Enrollments</span>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-white">218</span>
              <span className="text-xs text-emerald-400 font-semibold">+22.4%</span>
            </div>
            <p className="mt-1 text-[11px] text-slate-400">Target: 200 members</p>
          </div>

          <div className="glass-card rounded-2xl border border-white/10 p-5">
            <span className="text-xs uppercase tracking-wider text-slate-400">Average Lead Conversion</span>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-emerald-400">63.8%</span>
              <span className="text-xs text-slate-400">High Trust</span>
            </div>
            <p className="mt-1 text-[11px] text-slate-400">Driven by 0% interest guarantee</p>
          </div>

          <div className="glass-card rounded-2xl border border-white/10 p-5">
            <span className="text-xs uppercase tracking-wider text-slate-400">Top Acquisition Product</span>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-xl font-extrabold text-indigo-300">Apple iPhone 16</span>
            </div>
            <p className="mt-1 text-[11px] text-slate-400">38% of all new member plans</p>
          </div>

          <div className="glass-card rounded-2xl border border-white/10 p-5">
            <span className="text-xs uppercase tracking-wider text-slate-400">Commissions Paid Out</span>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-amber-300">₹3.27 Lakh</span>
            </div>
            <p className="mt-1 text-[11px] text-slate-400">100% On-time clearance</p>
          </div>
        </div>

        {/* Leaderboard Table */}
        <div className="mt-8 glass-card rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
          <div className="p-5 border-b border-white/10">
            <h2 className="text-base font-bold text-white">Relationship Manager Leaderboard</h2>
            <p className="text-xs text-slate-400">Agent conversion performance and earned milestone incentives</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#0B0F19]/80 text-slate-400 uppercase tracking-wider text-[10px] border-b border-white/10">
                <tr>
                  <th className="py-3 px-4">Relationship Manager</th>
                  <th className="py-3 px-4">Branch</th>
                  <th className="py-3 px-4">Leads Assigned</th>
                  <th className="py-3 px-4">Enrolled Accounts</th>
                  <th className="py-3 px-4">Conversion Rate</th>
                  <th className="py-3 px-4 text-right">Earned Incentives</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {topPerformers.map((agent) => (
                  <tr key={agent.name} className="hover:bg-white/[0.02] transition">
                    <td className="py-3.5 px-4 font-bold text-white">{agent.name}</td>
                    <td className="py-3.5 px-4 text-slate-400">{agent.branch}</td>
                    <td className="py-3.5 px-4 text-slate-300">{agent.leads}</td>
                    <td className="py-3.5 px-4 text-indigo-300 font-bold">{agent.conversions}</td>
                    <td className="py-3.5 px-4 text-emerald-400 font-semibold">{agent.rate}</td>
                    <td className="py-3.5 px-4 text-right font-extrabold text-amber-300">{agent.commission}</td>
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
