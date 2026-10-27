import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Building2,
  TrendingUp,
  Users,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
  ShieldCheck,
  Search,
  Filter,
  Package,
  Layers,
  RefreshCw
} from 'lucide-react'
import { useAuth } from '../context/AuthContext'

interface Branch {
  id: string
  city: string
  zone: string
  manager: string
  email: string
  members: number
  activeTenures: number
  revenue: string
  growth: string
  compliance: string
  status: 'OPTIMAL' | 'AUDIT_PENDING' | 'ACTION_REQUIRED'
  pickupPoint: string
}

export default function ManagerDashboard() {
  const { user } = useAuth()
  const managerName = user?.name || 'Vikram Malhotra'
  const managerRole = user?.role || 'Operations Director'

  const [activeTab, setActiveTab] = useState<'all' | 'west' | 'north' | 'south'>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null)

  const branches: Branch[] = [
    {
      id: 'BR-MUM-01',
      city: 'Mumbai Central Flagship',
      zone: 'west',
      manager: 'Anand Kulkarni',
      email: 'anand.k@lakshmi.in',
      members: 480,
      activeTenures: 412,
      revenue: '₹1.62 Cr',
      growth: '+18.4%',
      compliance: '100%',
      status: 'OPTIMAL',
      pickupPoint: 'Croma Megastore, Lower Parel'
    },
    {
      id: 'BR-BLR-02',
      city: 'Bengaluru Tech Park Hub',
      zone: 'south',
      manager: 'Divya Shenoy',
      email: 'divya.s@lakshmi.in',
      members: 395,
      activeTenures: 350,
      revenue: '₹1.35 Cr',
      growth: '+14.1%',
      compliance: '99.5%',
      status: 'OPTIMAL',
      pickupPoint: 'Tata CLiQ Lounge, Indiranagar'
    },
    {
      id: 'BR-DEL-03',
      city: 'Delhi NCR Experience Zone',
      zone: 'north',
      manager: 'Rohit Batra',
      email: 'rohit.b@lakshmi.in',
      members: 340,
      activeTenures: 298,
      revenue: '₹1.10 Cr',
      growth: '+11.8%',
      compliance: '99.1%',
      status: 'AUDIT_PENDING',
      pickupPoint: 'Reliance Digital Hub, Connaught Place'
    },
    {
      id: 'BR-HYD-04',
      city: 'Hyderabad Cyber Hub',
      zone: 'south',
      manager: 'Kalyan Varma',
      email: 'kalyan.v@lakshmi.in',
      members: 267,
      activeTenures: 240,
      revenue: '₹75.0 Lakh',
      growth: '+9.3%',
      compliance: '100%',
      status: 'OPTIMAL',
      pickupPoint: 'Boutique Collection Vault, HITEC City'
    }
  ]

  const filteredBranches = branches.filter((b) => {
    const matchesTab = activeTab === 'all' || b.zone === activeTab
    const matchesSearch =
      b.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.manager.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.pickupPoint.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesTab && matchesSearch
  })

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 py-10 radial-mesh">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-200 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3.5 py-1 text-xs font-semibold text-indigo-700 mb-2 shadow-sm">
              <Building2 className="h-3.5 w-3.5" />
              <span>Regional Operations &amp; Branch Hub</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Operations Command Desk
            </h1>
            <p className="mt-1 text-xs text-slate-600">
              Welcome back, <span className="text-indigo-600 font-semibold">{managerName}</span> ({managerRole}). Supervising 4 metro operational zones &amp; partner retail hubs.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/admin/dashboard"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition shadow-sm"
            >
              <Layers className="h-4 w-4 text-indigo-600" />
              <span>Full Admin Suite</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-slate-400" />
            </Link>

            <Link
              to="/finance/dashboard"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition shadow-sm"
            >
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              <span>Escrow Ledger</span>
            </Link>

            <button
              onClick={() => window.location.reload()}
              className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs font-medium text-slate-700 hover:bg-slate-50 transition cursor-pointer shadow-sm"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              <span>Sync</span>
            </button>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Regional Inflows</span>
              <div className="rounded-lg bg-emerald-50 p-2 text-emerald-700 border border-emerald-200">
                <TrendingUp className="h-4 w-4" />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-2xl font-extrabold text-slate-900">₹4.82 Cr</span>
              <span className="text-xs text-emerald-700 font-bold flex items-center">
                +14.2% <ArrowUpRight className="h-3 w-3 inline" />
              </span>
            </div>
            <p className="mt-1 text-[11px] text-slate-500">Total milestone collections across zones</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Active Members</span>
              <div className="rounded-lg bg-indigo-50 p-2 text-indigo-700 border border-indigo-200">
                <Users className="h-4 w-4" />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-2xl font-extrabold text-indigo-600">1,482</span>
              <span className="text-xs text-slate-500">across 4 hubs</span>
            </div>
            <p className="mt-1 text-[11px] text-slate-500">1,300 active ongoing tenures</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Partner Pickups</span>
              <div className="rounded-lg bg-teal-50 p-2 text-teal-700 border border-teal-200">
                <Package className="h-4 w-4" />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-2xl font-extrabold text-teal-700">89.4%</span>
              <span className="text-xs text-emerald-700 font-medium">Store Direct</span>
            </div>
            <p className="mt-1 text-[11px] text-slate-500">Zero transit damages reported</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Escrow Audit Rate</span>
              <div className="rounded-lg bg-emerald-50 p-2 text-emerald-700 border border-emerald-200">
                <CheckCircle2 className="h-4 w-4" />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-2xl font-extrabold text-emerald-700">99.6%</span>
              <span className="text-xs text-emerald-700">Compliant</span>
            </div>
            <p className="mt-1 text-[11px] text-slate-500">Verified by Axis Trustee Services</p>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-2 overflow-x-auto">
            <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5 mr-2">
              <Filter className="h-3.5 w-3.5" /> Zone:
            </span>
            {(['all', 'west', 'north', 'south'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-xl px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider transition cursor-pointer ${
                  activeTab === tab
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-slate-50 text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tab === 'all' ? 'All Zones' : `${tab} Zone`}
              </button>
            ))}
          </div>

          <div className="relative min-w-[260px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search branch, manager, partner..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 pl-9 pr-4 py-2 text-xs text-slate-900 placeholder-slate-400 outline-none focus:bg-white focus:border-indigo-500"
            />
          </div>
        </div>

        {/* Branch Operations Table */}
        <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm">
          <div className="p-5 border-b border-slate-100 flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Building2 className="h-4 w-4 text-indigo-600" />
                Regional Hub Network ({filteredBranches.length})
              </h2>
              <p className="text-xs text-slate-500">Live operational oversight, account volumes, and retail fulfillment channels</p>
            </div>
            <span className="text-xs text-emerald-700 font-semibold flex items-center gap-1 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              <ShieldCheck className="h-3.5 w-3.5" /> All Hubs Active
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-600 uppercase tracking-wider text-[10px] border-b border-slate-200">
                <tr>
                  <th className="py-3.5 px-4">Branch &amp; Code</th>
                  <th className="py-3.5 px-4">Regional Manager</th>
                  <th className="py-3.5 px-4">Retail Partner Point</th>
                  <th className="py-3.5 px-4">Members</th>
                  <th className="py-3.5 px-4">Revenue</th>
                  <th className="py-3.5 px-4">Escrow Audit</th>
                  <th className="py-3.5 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredBranches.map((b) => (
                  <tr key={b.id} className="hover:bg-slate-50/70 transition">
                    <td className="py-4 px-4">
                      <div className="font-bold text-slate-900 text-sm">{b.city}</div>
                      <div className="text-[10px] font-mono text-indigo-600 font-bold">{b.id} · {b.zone.toUpperCase()} REGION</div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="text-slate-800 font-medium">{b.manager}</div>
                      <div className="text-[10px] text-slate-500">{b.email}</div>
                    </td>
                    <td className="py-4 px-4 text-slate-700">
                      <div className="flex items-center gap-1.5 font-medium text-slate-800">
                        <Package className="h-3.5 w-3.5 text-indigo-600" />
                        <span>{b.pickupPoint}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="text-slate-900 font-semibold">{b.members} accounts</div>
                      <div className="text-[10px] text-emerald-700 font-medium">{b.activeTenures} in active savings</div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="text-emerald-700 font-bold">{b.revenue}</div>
                      <div className="text-[10px] text-emerald-600 font-medium">{b.growth} MoM</div>
                    </td>
                    <td className="py-4 px-4">
                      {b.status === 'OPTIMAL' ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700 border border-emerald-200">
                          <CheckCircle2 className="h-3 w-3" /> {b.compliance} Compliant
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-0.5 text-[10px] font-bold text-amber-800 border border-amber-200">
                          <AlertCircle className="h-3 w-3" /> Audit In Review
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-right">
                      <button
                        onClick={() => setSelectedBranch(b)}
                        className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-[11px] font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition cursor-pointer"
                      >
                        Inspect
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Selected Branch Details Modal */}
        {selectedBranch && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
            <div className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{selectedBranch.city}</h3>
                  <p className="text-xs font-mono text-indigo-600 font-bold">{selectedBranch.id}</p>
                </div>
                <button
                  onClick={() => setSelectedBranch(null)}
                  className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  ✕ Close
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="rounded-xl bg-slate-50 p-3 border border-slate-200">
                  <span className="text-slate-500 block text-[10px] uppercase font-semibold">Regional Director</span>
                  <span className="font-bold text-slate-900 text-sm mt-0.5 block">{selectedBranch.manager}</span>
                  <span className="text-[11px] text-slate-500">{selectedBranch.email}</span>
                </div>
                <div className="rounded-xl bg-slate-50 p-3 border border-slate-200">
                  <span className="text-slate-500 block text-[10px] uppercase font-semibold">Monthly Inflow</span>
                  <span className="font-bold text-emerald-700 text-sm mt-0.5 block">{selectedBranch.revenue}</span>
                  <span className="text-[11px] text-emerald-600 font-medium">{selectedBranch.growth} vs prior month</span>
                </div>
                <div className="rounded-xl bg-slate-50 p-3 border border-slate-200">
                  <span className="text-slate-500 block text-[10px] uppercase font-semibold">Active Portfolios</span>
                  <span className="font-bold text-slate-900 text-sm mt-0.5 block">{selectedBranch.members} Accounts</span>
                  <span className="text-[11px] text-indigo-600">{selectedBranch.activeTenures} Milestone Tenures</span>
                </div>
                <div className="rounded-xl bg-slate-50 p-3 border border-slate-200">
                  <span className="text-slate-500 block text-[10px] uppercase font-semibold">Trustee Escrow Status</span>
                  <span className="font-bold text-emerald-700 text-sm mt-0.5 block">{selectedBranch.compliance} Pass</span>
                  <span className="text-[11px] text-slate-500">Axis Trustee Certified</span>
                </div>
              </div>

              <div className="rounded-xl bg-slate-50 p-3 border border-slate-200 text-xs">
                <span className="text-slate-500 block text-[10px] uppercase font-semibold">Authorized Retail Partner</span>
                <p className="text-slate-800 mt-1 font-medium">{selectedBranch.pickupPoint}</p>
                <p className="text-[11px] text-slate-500 mt-0.5">Certified for zero-markup handover and verification upon milestone maturity.</p>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  onClick={() => setSelectedBranch(null)}
                  className="rounded-xl bg-indigo-600 px-4 py-2 text-xs font-bold text-white hover:bg-indigo-700 transition cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}