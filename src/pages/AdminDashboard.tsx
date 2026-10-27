import React, { useState } from 'react'
import {
  Users,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  FileText,
  Package,
  CreditCard,
  TrendingUp,
  AlertTriangle,
  Layers,
  Search,
  Filter,
  Check,
  X,
  ExternalLink,
  ChevronRight,
  Building2,
  Download,
  RefreshCw,
  Sparkles
} from 'lucide-react'

// Mock Data for Admin Operations
const initialKycQueue = [
  {
    id: 'KYC-8801',
    name: 'Rajesh Kumar Verma',
    email: 'rajesh.verma@gmail.com',
    mobile: '+91 98201 44521',
    plan: 'Prime Platinum Flagship',
    item: 'Sony Bravia 55" 4K Google TV',
    idType: 'Aadhaar + PAN Verified',
    amount: '₹5,000/mo',
    date: '27 Oct 2026, 09:15 AM',
    status: 'PENDING'
  },
  {
    id: 'KYC-8802',
    name: 'Priyanka Sundaram',
    email: 'priyanka.s@outlook.com',
    mobile: '+91 97112 88934',
    plan: 'Sovereign Elite Assets',
    item: 'Tanishq 24K Gold Coin (10g)',
    idType: 'DigiLocker Verified',
    amount: '₹7,500/mo',
    date: '27 Oct 2026, 08:40 AM',
    status: 'PENDING'
  },
  {
    id: 'KYC-8803',
    name: 'Vikram Malhotra',
    email: 'vikram.m@techcorp.in',
    mobile: '+91 99304 11209',
    plan: 'Smart Essentials Gold',
    item: 'Apple iPhone 16 (128GB)',
    idType: 'Passport + PAN Verified',
    amount: '₹6,658/mo',
    date: '26 Oct 2026, 06:12 PM',
    status: 'VERIFIED'
  }
]

const initialOrdersQueue = [
  {
    orderId: 'ORD-9021',
    member: 'Ananya Deshmukh',
    product: 'Apple iPhone 16 (128GB) - Ultramarine',
    brand: 'Apple',
    tenure: '12/12 Months Completed',
    partner: 'Croma Flagship, Lower Parel Mumbai',
    method: 'Store Pickup Ready',
    status: 'READY_FOR_PICKUP'
  },
  {
    orderId: 'ORD-9022',
    member: 'Suresh Narayanan',
    product: 'Daikin 1.5 Ton 5-Star Inverter AC',
    brand: 'Daikin',
    tenure: '9/9 Months Completed',
    partner: 'Tata CLiQ Express Logistics',
    method: 'Doorstep Installation Scheduled',
    status: 'DISPATCHED'
  },
  {
    orderId: 'ORD-9023',
    member: 'Kavita Patel',
    product: 'Tanishq 24K 10g Gold Coin CertiCard',
    brand: 'Tanishq',
    tenure: '12/12 Months Completed',
    partner: 'Tanishq Boutique, Bandra West',
    method: 'Boutique Collection Vault',
    status: 'READY_FOR_PICKUP'
  }
]

const auditLogs = [
  { id: 'LOG-4410', event: 'Escrow Tranche Clearance', detail: '₹14,80,000 settled into Axis Trustee Escrow account #9012', user: 'System Auto-Batch', time: '10 mins ago', status: 'SUCCESS' },
  { id: 'LOG-4409', event: 'KYC Identity Approval', detail: 'Member CUST-1049 approved under CKYC registry check', user: 'Manager (ceo@brand.com)', time: '35 mins ago', status: 'SUCCESS' },
  { id: 'LOG-4408', event: 'Product Allocation Seal', detail: 'Sony Bravia 55" SKU SONY-BRAVIA-55 serial registered for warranty', user: 'Partner Desk (Croma)', time: '1 hour ago', status: 'SUCCESS' },
  { id: 'LOG-4407', event: 'Installment Default Warning', detail: 'Reminder push triggered for CUST-8831 (due 28 Oct)', user: 'SMS/WhatsApp Gateway', time: '2 hours ago', status: 'INFO' }
]

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'kyc' | 'orders' | 'logs'>('overview')
  const [kycQueue, setKycQueue] = useState(initialKycQueue)
  const [ordersQueue, setOrdersQueue] = useState(initialOrdersQueue)
  const [searchFilter, setSearchFilter] = useState('')

  function handleApproveKyc(id: string) {
    setKycQueue(prev => prev.map(k => k.id === id ? { ...k, status: 'VERIFIED' } : k))
  }

  function handleRejectKyc(id: string) {
    setKycQueue(prev => prev.map(k => k.id === id ? { ...k, status: 'REJECTED' } : k))
  }

  function handleMarkFulfilled(orderId: string) {
    setOrdersQueue(prev => prev.map(o => o.orderId === orderId ? { ...o, status: 'DELIVERED' } : o))
  }

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 py-10 radial-mesh">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold text-indigo-400 mb-2">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Institutional Governance &amp; Administration</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              FinTech Command Center
            </h1>
            <p className="mt-1 text-xs text-slate-400">
              Escrow liquidity monitoring, KYC verification queues, partner fulfillment, and compliance audit records.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-2 text-xs font-semibold text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>MongoDB Atlas Connected</span>
            </span>
            <button
              onClick={() => window.location.reload()}
              className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-[#131B2E] px-3.5 py-2 text-xs font-medium text-slate-300 hover:text-white hover:border-white/20 transition cursor-pointer"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              <span>Refresh Metrics</span>
            </button>
          </div>
        </div>

        {/* Executive Metric Cards */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="glass-card rounded-2xl border border-white/10 p-5 shadow-xl">
            <div className="flex items-center justify-between text-slate-400 text-xs">
              <span className="font-semibold uppercase tracking-wider">Gross Portfolio Value</span>
              <TrendingUp className="h-4 w-4 text-emerald-400" />
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-white">₹4.82 Cr</span>
              <span className="text-xs text-emerald-400 font-semibold">+18.4%</span>
            </div>
            <p className="mt-1 text-[11px] text-slate-400">1,482 active milestone subscriptions</p>
          </div>

          <div className="glass-card rounded-2xl border border-white/10 p-5 shadow-xl">
            <div className="flex items-center justify-between text-slate-400 text-xs">
              <span className="font-semibold uppercase tracking-wider">Escrow Trustee Reserve</span>
              <Building2 className="h-4 w-4 text-indigo-400" />
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-indigo-300">₹3.15 Cr</span>
              <span className="text-xs text-slate-400 font-medium">Axis Trustee</span>
            </div>
            <p className="mt-1 text-[11px] text-slate-400">100% RBI Escrow Backed</p>
          </div>

          <div className="glass-card rounded-2xl border border-white/10 p-5 shadow-xl">
            <div className="flex items-center justify-between text-slate-400 text-xs">
              <span className="font-semibold uppercase tracking-wider">Pending KYC Queue</span>
              <Users className="h-4 w-4 text-amber-400" />
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-amber-300">
                {kycQueue.filter(k => k.status === 'PENDING').length}
              </span>
              <span className="text-xs text-amber-400 font-medium">Needs Verification</span>
            </div>
            <p className="mt-1 text-[11px] text-slate-400">Avg. verification time: 24 mins</p>
          </div>

          <div className="glass-card rounded-2xl border border-white/10 p-5 shadow-xl">
            <div className="flex items-center justify-between text-slate-400 text-xs">
              <span className="font-semibold uppercase tracking-wider">Ready for Fulfillment</span>
              <Package className="h-4 w-4 text-emerald-400" />
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-emerald-400">
                {ordersQueue.filter(o => o.status === 'READY_FOR_PICKUP').length}
              </span>
              <span className="text-xs text-emerald-400 font-medium">100% Cleared</span>
            </div>
            <p className="mt-1 text-[11px] text-slate-400">Croma &amp; Tanishq Boutiques</p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mt-10 flex border-b border-white/10 gap-2">
          {[
            { id: 'overview', label: 'Overview & Collections', icon: Layers },
            { id: 'kyc', label: `KYC Approvals (${kycQueue.filter(k => k.status === 'PENDING').length})`, icon: Users },
            { id: 'orders', label: 'Fulfillment & Dispatches', icon: Package },
            { id: 'logs', label: 'Regulatory Audit Trail', icon: FileText }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider transition-all border-b-2 cursor-pointer ${
                activeTab === tab.id
                  ? 'border-indigo-500 text-indigo-400 bg-indigo-500/10 rounded-t-xl'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <tab.icon className="h-4 w-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* TAB CONTENT 1: OVERVIEW & COLLECTION SUMMARY */}
        {activeTab === 'overview' && (
          <div className="mt-6 space-y-6">
            <div className="grid gap-6 lg:grid-cols-3">
              {/* Left 2 Cols: Monthly Inflows & Collection Matrix */}
              <div className="lg:col-span-2 glass-card rounded-2xl border border-white/10 p-6 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-base font-bold text-white">Milestone Inflow Breakdown</h2>
                    <p className="text-xs text-slate-400">Monthly recurring dues distribution by hardware asset class</p>
                  </div>
                  <span className="text-xs text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
                    99.2% Collection Rate
                  </span>
                </div>

                <div className="space-y-4 mt-6">
                  {[
                    { label: 'Smartphones (Apple iPhone 16 & Samsung S24)', amount: '₹1.84 Cr', pct: '48%', color: 'bg-indigo-500' },
                    { label: 'Home Appliances (LG AI Washers & Daikin Split AC)', amount: '₹1.15 Cr', pct: '30%', color: 'bg-emerald-500' },
                    { label: 'Sovereign Bullion (Tanishq 24K Gold Coins)', amount: '₹98.5 Lakh', pct: '26%', color: 'bg-amber-400' },
                    { label: 'Smart TVs & Audio (Sony Bravia 55" 4K)', amount: '₹84.5 Lakh', pct: '22%', color: 'bg-cyan-400' }
                  ].map((row, i) => (
                    <div key={i} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-300 font-medium">{row.label}</span>
                        <span className="text-white font-bold">{row.amount}</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-[#0B0F19]">
                        <div className={`h-2 rounded-full ${row.color}`} style={{ width: row.pct }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right 1 Col: Partner Sourcing Hub */}
              <div className="glass-card rounded-2xl border border-white/10 p-6 shadow-xl space-y-4">
                <h2 className="text-base font-bold text-white">Authorized Partner SLAs</h2>
                <p className="text-xs text-slate-400">Real-time stock reservation and store pickup dispatch performance</p>

                <div className="space-y-3 mt-4">
                  {[
                    { partner: 'Croma (Tata)', role: 'Apple & Electronics', status: 'Optimal (99.8%)', code: 'CRM-BLR-01' },
                    { partner: 'Reliance Digital', role: 'Samsung & LG AI', status: 'Optimal (99.4%)', code: 'REL-MUM-04' },
                    { partner: 'Tanishq Boutiques', role: '24K Gold Vaulting', status: '100% Audited', code: 'TAN-DEL-02' },
                    { partner: 'Daikin Solution Hub', role: 'HVAC Direct Factory', status: 'Optimal (98.9%)', code: 'DKN-HYD-01' }
                  ].map((p, idx) => (
                    <div key={idx} className="rounded-xl border border-white/5 bg-[#0B0F19]/60 p-3 text-xs">
                      <div className="flex items-center justify-between font-semibold text-white">
                        <span>{p.partner}</span>
                        <span className="text-[10px] text-emerald-400 font-mono">{p.status}</span>
                      </div>
                      <div className="mt-1 flex items-center justify-between text-slate-400 text-[11px]">
                        <span>{p.role}</span>
                        <span className="font-mono text-slate-500">{p.code}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB CONTENT 2: KYC APPROVAL QUEUE */}
        {activeTab === 'kyc' && (
          <div className="mt-6 glass-card rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
            <div className="p-5 border-b border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <h2 className="text-base font-bold text-white">Member Onboarding &amp; KYC Verification</h2>
                <p className="text-xs text-slate-400">Validate applicant identity documents and approve enrollment in milestone plans</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Filter by applicant or ID..."
                    value={searchFilter}
                    onChange={e => setSearchFilter(e.target.value)}
                    className="rounded-xl border border-white/10 bg-[#0B0F19] pl-9 pr-3 py-1.5 text-xs text-white placeholder-slate-500 outline-none focus:border-indigo-500"
                  />
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#0B0F19]/80 text-slate-400 uppercase tracking-wider text-[10px] border-b border-white/10">
                  <tr>
                    <th className="py-3 px-4">Applicant ID</th>
                    <th className="py-3 px-4">Member Name</th>
                    <th className="py-3 px-4">Subscribed Asset</th>
                    <th className="py-3 px-4">Document Proof</th>
                    <th className="py-3 px-4">Monthly Dues</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {kycQueue
                    .filter(k => k.name.toLowerCase().includes(searchFilter.toLowerCase()) || k.id.toLowerCase().includes(searchFilter.toLowerCase()))
                    .map((item) => (
                      <tr key={item.id} className="hover:bg-white/[0.02] transition">
                        <td className="py-4 px-4 font-mono text-indigo-300 font-semibold">{item.id}</td>
                        <td className="py-4 px-4">
                          <p className="font-bold text-white">{item.name}</p>
                          <p className="text-[11px] text-slate-400">{item.email} · {item.mobile}</p>
                        </td>
                        <td className="py-4 px-4">
                          <p className="text-slate-200 font-medium">{item.item}</p>
                          <p className="text-[11px] text-indigo-400">{item.plan}</p>
                        </td>
                        <td className="py-4 px-4">
                          <span className="rounded-lg bg-white/5 px-2.5 py-1 text-[11px] text-slate-300 border border-white/5 font-medium">
                            {item.idType}
                          </span>
                        </td>
                        <td className="py-4 px-4 font-extrabold text-emerald-400">{item.amount}</td>
                        <td className="py-4 px-4">
                          <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-bold border ${
                            item.status === 'VERIFIED'
                              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                              : item.status === 'REJECTED'
                              ? 'bg-rose-500/10 text-rose-400 border-rose-500/30'
                              : 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                          }`}>
                            {item.status}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-right space-x-2">
                          {item.status === 'PENDING' ? (
                            <>
                              <button
                                onClick={() => handleApproveKyc(item.id)}
                                className="inline-flex items-center gap-1 rounded-lg bg-emerald-600 px-3 py-1.5 text-[11px] font-bold text-white hover:bg-emerald-500 transition shadow-[0_0_10px_rgba(16,185,129,0.3)] cursor-pointer"
                              >
                                <Check className="h-3 w-3" />
                                <span>Approve</span>
                              </button>
                              <button
                                onClick={() => handleRejectKyc(item.id)}
                                className="inline-flex items-center gap-1 rounded-lg bg-rose-600/80 px-2.5 py-1.5 text-[11px] font-bold text-white hover:bg-rose-500 transition cursor-pointer"
                              >
                                <X className="h-3 w-3" />
                                <span>Reject</span>
                              </button>
                            </>
                          ) : (
                            <span className="text-slate-500 text-[11px]">Audit Stamped</span>
                          )}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB CONTENT 3: FULFILLMENT & DISPATCHES */}
        {activeTab === 'orders' && (
          <div className="mt-6 glass-card rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
            <div className="p-5 border-b border-white/10">
              <h2 className="text-base font-bold text-white">Hardware Release &amp; Partner Store Pickup Registry</h2>
              <p className="text-xs text-slate-400">Authorize manufacturer warrantied dispatch once 100% of tenure milestones are cleared</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#0B0F19]/80 text-slate-400 uppercase tracking-wider text-[10px] border-b border-white/10">
                  <tr>
                    <th className="py-3 px-4">Order ID</th>
                    <th className="py-3 px-4">Member Name</th>
                    <th className="py-3 px-4">Brand Asset</th>
                    <th className="py-3 px-4">Milestone Clearance</th>
                    <th className="py-3 px-4">Pickup / Logistics Partner</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {ordersQueue.map((order) => (
                    <tr key={order.orderId} className="hover:bg-white/[0.02] transition">
                      <td className="py-4 px-4 font-mono text-indigo-300 font-semibold">{order.orderId}</td>
                      <td className="py-4 px-4 font-bold text-white">{order.member}</td>
                      <td className="py-4 px-4 text-slate-200">
                        <span className="font-semibold text-white">{order.brand}:</span> {order.product}
                      </td>
                      <td className="py-4 px-4 text-emerald-400 font-bold">{order.tenure}</td>
                      <td className="py-4 px-4 text-slate-300">
                        <p className="font-medium text-white">{order.partner}</p>
                        <p className="text-[11px] text-slate-400">{order.method}</p>
                      </td>
                      <td className="py-4 px-4">
                        <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-bold border ${
                          order.status === 'DELIVERED'
                            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                            : 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-right">
                        {order.status !== 'DELIVERED' ? (
                          <button
                            onClick={() => handleMarkFulfilled(order.orderId)}
                            className="inline-flex items-center gap-1 rounded-lg bg-indigo-600 px-3 py-1.5 text-[11px] font-bold text-white hover:bg-indigo-500 transition shadow-[0_0_15px_rgba(99,102,241,0.3)] cursor-pointer"
                          >
                            <Package className="h-3 w-3" />
                            <span>Mark Delivered</span>
                          </button>
                        ) : (
                          <span className="text-emerald-400 font-semibold text-[11px] flex items-center justify-end gap-1">
                            <CheckCircle2 className="h-3.5 w-3.5" /> Fulfilled
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB CONTENT 4: REGULATORY AUDIT TRAIL */}
        {activeTab === 'logs' && (
          <div className="mt-6 glass-card rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
            <div className="p-5 border-b border-white/10 flex items-center justify-between">
              <div>
                <h2 className="text-base font-bold text-white">Immutable RBI Compliance &amp; Audit Trail</h2>
                <p className="text-xs text-slate-400">Cryptographically stamped event logs for transactions, approvals, and escrow releases</p>
              </div>
              <button className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-[#0B0F19] px-3 py-1.5 text-xs text-slate-300 hover:text-white transition">
                <Download className="h-3.5 w-3.5" />
                <span>Export Audit CSV</span>
              </button>
            </div>

            <div className="divide-y divide-white/5">
              {auditLogs.map((log) => (
                <div key={log.id} className="p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs hover:bg-white/[0.02] transition">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-indigo-400 font-semibold">{log.id}</span>
                      <span className="font-bold text-white">{log.event}</span>
                    </div>
                    <p className="text-slate-400 text-[11px]">{log.detail}</p>
                  </div>
                  <div className="flex items-center gap-4 text-right text-[11px] text-slate-500">
                    <div>
                      <p className="text-slate-300 font-medium">{log.user}</p>
                      <p>{log.time}</p>
                    </div>
                    <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-400 border border-emerald-500/30">
                      {log.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
