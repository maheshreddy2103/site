import React, { useState } from 'react'
import {
  BarChart3,
  Users,
  Package,
  Sliders,
  RefreshCw,
  CreditCard,
  Truck,
  ArrowDownLeft,
  Megaphone,
  FileSpreadsheet,
  ShieldAlert,
  Search,
  Filter,
  CheckCircle2,
  AlertCircle,
  XCircle,
  ShieldCheck,
  Plus,
  ArrowUpRight,
  Send,
  Download,
  Lock,
  Eye,
  Check,
  RotateCcw,
  Clock,
  Sparkles,
  Layers,
  ChevronRight
} from 'lucide-react'
import { productsData } from '../data/products'

export default function AdminDashboard() {
  const [activeModule, setActiveModule] = useState<
    | 'business'
    | 'customers'
    | 'catalogue'
    | 'plans'
    | 'collections'
    | 'emi-book'
    | 'orders'
    | 'withdrawals'
    | 'content'
    | 'reports'
    | 'audit'
  >('business')

  const [toastMessage, setToastMessage] = useState<string | null>(null)
  function showToast(msg: string) {
    setToastMessage(msg)
    setTimeout(() => setToastMessage(null), 3000)
  }

  // --- 1. Business Dashboard State ---
  const businessKpis = {
    totalFundBalance: '₹8.4L',
    activeSavers: 1260,
    orders: 94,
    emiBookValue: '₹42.8L',
    overduesCount: 3,
    overdueAmount: '₹3,000'
  }

  // --- 2. Customers & KYC State ---
  const [customerSearch, setCustomerSearch] = useState('')
  const [customers, setCustomers] = useState([
    {
      id: 'CUST-1049',
      name: 'Priya Sundaram',
      mobile: '+91 98201 44521',
      email: 'priya.sundaram@gmail.com',
      fundBalance: 5000,
      activeAppliance: 'Whirlpool 265L Refrigerator',
      emiDue: '₹1,000 / mo (4/12 paid)',
      kycStatus: 'VERIFIED',
      accountStatus: 'ACTIVE'
    },
    {
      id: 'CUST-1050',
      name: 'Rajesh Kumar Verma',
      mobile: '+91 97112 88934',
      email: 'rajesh.verma@techcorp.in',
      fundBalance: 12400,
      activeAppliance: 'Daikin 1.5T 5-Star AC',
      emiDue: '₹3,749 / mo (1/12 paid)',
      kycStatus: 'PENDING_REVIEW',
      accountStatus: 'ACTIVE'
    },
    {
      id: 'CUST-1051',
      name: 'Ananya Deshmukh',
      mobile: '+91 99304 11209',
      email: 'ananya.d@outlook.com',
      fundBalance: 3200,
      activeAppliance: 'Kent Grand Plus RO',
      emiDue: '₹1,375 / mo (8/12 paid)',
      kycStatus: 'VERIFIED',
      accountStatus: 'ACTIVE'
    },
    {
      id: 'CUST-1052',
      name: 'Karan Mehra',
      mobile: '+91 98450 23112',
      email: 'karan.m@gmail.com',
      fundBalance: 850,
      activeAppliance: 'None (Saving phase)',
      emiDue: 'None',
      kycStatus: 'REJECTED',
      accountStatus: 'ACTIVE'
    }
  ])

  function handleUpdateKyc(id: string, status: 'VERIFIED' | 'REJECTED') {
    setCustomers((prev) =>
      prev.map((c) => (c.id === id ? { ...c, kycStatus: status } : c))
    )
    showToast(`KYC status for ${id} updated to ${status}!`)
  }

  function handleToggleAccountFreeze(id: string) {
    setCustomers((prev) =>
      prev.map((c) =>
        c.id === id
          ? { ...c, accountStatus: c.accountStatus === 'FROZEN' ? 'ACTIVE' : 'FROZEN' }
          : c
      )
    )
    showToast(`Account status updated for ${id}.`)
  }

  // --- 3. Catalogue & Pricing State ---
  const [catalogue, setCatalogue] = useState(productsData)
  const [catalogueSearch, setCatalogueSearch] = useState('')

  function handleToggleStock(sku: string) {
    setCatalogue((prev) =>
      prev.map((p) =>
        p.sku === sku
          ? {
              ...p,
              availability: p.availability.includes('Out') ? 'In Stock' : 'Out of Stock'
            }
          : p
      )
    )
    showToast(`Stock availability toggled for item ${sku}.`)
  }

  // --- 4. Plans & Rules Engine State ---
  const [rules, setRules] = useState({
    dailyMin: 25,
    weeklyMin: 100,
    monthlyMin: 500,
    maxDailyDebit: 2000,
    tenuresEnabled: { 3: true, 6: true, 9: true, 12: true },
    eligibilityMinFund: 2000,
    withdrawalSettlementHours: 24,
    exitFeePercent: 0
  })

  // --- 5. Collections & Reconciliation State ---
  const [mandates, setMandates] = useState([
    {
      id: 'MAND-901',
      customer: 'Priya Sundaram',
      amount: '₹50 / day',
      gateway: 'UPI AutoPay (Axis)',
      status: 'ACTIVE',
      lastDebit: 'Today, 09:00 AM',
      reconciled: 'MATCHED'
    },
    {
      id: 'MAND-902',
      customer: 'Rajesh Kumar Verma',
      amount: '₹350 / week',
      gateway: 'UPI AutoPay (HDFC)',
      status: 'ACTIVE',
      lastDebit: '26 Oct, 09:00 AM',
      reconciled: 'MATCHED'
    },
    {
      id: 'MAND-903',
      customer: 'Amitabh Sharma',
      amount: '₹50 / day',
      gateway: 'e-NACH (SBI)',
      status: 'FAILED',
      lastDebit: 'Today, 09:00 AM (Low Balance)',
      reconciled: 'RETRY_SCHEDULED'
    }
  ])

  // --- 6. EMI Book & Overdues State ---
  const [emiBook, setEmiBook] = useState([
    {
      id: 'EMI-7701',
      customer: 'Priya Sundaram',
      item: 'Whirlpool 265L Refrigerator',
      totalTenure: '12 Mos',
      paidTenure: '4 Mos',
      amountDue: 1000,
      dueDate: '10 Nov 2026',
      status: 'UPCOMING'
    },
    {
      id: 'EMI-7702',
      customer: 'Suresh Narayanan',
      item: 'Daikin 1.5T 5-Star AC',
      totalTenure: '9 Mos',
      paidTenure: '6 Mos',
      amountDue: 3749,
      dueDate: '25 Oct 2026',
      status: 'OVERDUE'
    },
    {
      id: 'EMI-7703',
      customer: 'Rohit Batra',
      item: 'Sony Bravia 55" 4K TV',
      totalTenure: '12 Mos',
      paidTenure: '12 Mos',
      amountDue: 0,
      dueDate: 'Completed',
      status: 'CLEARED'
    }
  ])

  // --- 7. Orders & Fulfilment State ---
  const [orders, setOrders] = useState([
    {
      orderId: 'ORD-9021',
      customer: 'Priya Sundaram',
      appliance: 'Whirlpool 265L Double-Door Refrigerator',
      vendor: 'Croma Megastore Lower Parel',
      status: 'DELIVERED',
      orderDate: '15 Jul 2026'
    },
    {
      orderId: 'ORD-9022',
      customer: 'Rajesh Kumar Verma',
      appliance: 'Daikin 1.5 Ton Inverter AC',
      vendor: 'Tata CLiQ Logistics Depot',
      status: 'DISPATCHED',
      orderDate: '26 Oct 2026'
    },
    {
      orderId: 'ORD-9023',
      customer: 'Ananya Deshmukh',
      appliance: 'Kent Grand Plus RO Water Purifier',
      vendor: 'Reliance Digital Connaught Place',
      status: 'PROCESSING',
      orderDate: '27 Oct 2026'
    }
  ])

  function handleUpdateOrderStatus(orderId: string, newStatus: string) {
    setOrders((prev) =>
      prev.map((o) => (o.orderId === orderId ? { ...o, status: newStatus } : o))
    )
    showToast(`Order ${orderId} updated to ${newStatus}.`)
  }

  // --- 8. Withdrawals & Refunds State ---
  const [withdrawals, setWithdrawals] = useState([
    {
      id: 'WDR-4401',
      customer: 'Sunil Joshi',
      amount: 4500,
      accountNumber: '••••••••8819 (HDFC Bank)',
      makerStatus: 'VERIFIED',
      checkerStatus: 'PENDING_APPROVAL',
      date: '27 Oct 2026, 10:15 AM'
    },
    {
      id: 'WDR-4402',
      customer: 'Meenakshi Iyer',
      amount: 1200,
      accountNumber: '••••••••2340 (ICICI Bank)',
      makerStatus: 'PENDING_VERIFY',
      checkerStatus: 'WAITING_MAKER',
      date: '27 Oct 2026, 09:30 AM'
    }
  ])

  function handleMakerApprove(id: string) {
    setWithdrawals((prev) =>
      prev.map((w) =>
        w.id === id ? { ...w, makerStatus: 'VERIFIED', checkerStatus: 'PENDING_APPROVAL' } : w
      )
    )
    showToast(`Maker approved withdrawal ${id}. Awaiting Checker second sign-off.`)
  }

  function handleCheckerConfirm(id: string) {
    setWithdrawals((prev) =>
      prev.map((w) =>
        w.id === id ? { ...w, checkerStatus: 'APPROVED_AND_SETTLED' } : w
      )
    )
    showToast(`Checker authorized payout for ${id}! Bank IMPS transfer initiated.`)
  }

  // --- 9. Content & Announcements State ---
  const [announcementChannel, setAnnouncementChannel] = useState<'push' | 'sms' | 'whatsapp'>('whatsapp')
  const [announcementText, setAnnouncementText] = useState(
    'Festive Diwali 0% EMI unlocked! Use your savings fund on refrigerators & ACs with zero processing fee.'
  )

  // --- 11. Audit Logs State ---
  const [auditLogs, setAuditLogs] = useState([
    {
      id: 'AUD-8891',
      user: 'Super Admin (admin@lakshmi.com)',
      action: 'Rule Modification',
      detail: 'Adjusted daily auto-save minimum threshold to ₹25',
      time: '12 mins ago',
      ip: '103.21.144.10'
    },
    {
      id: 'AUD-8890',
      user: 'Maker (vikram.m@lakshmi.in)',
      action: 'Withdrawal Maker Sign-off',
      detail: 'Approved principal release ₹4,500 for CUST-1042',
      time: '45 mins ago',
      ip: '103.21.144.18'
    },
    {
      id: 'AUD-8889',
      user: 'System Reconciler',
      action: 'Daily Gateway Recon',
      detail: 'Reconciled 1,248 UPI AutoPay collections against Axis escrow',
      time: '2 hours ago',
      ip: '10.0.4.1'
    }
  ])

  // Navigation Items for the 11 Modules in Image 6
  const navModules = [
    { id: 'business', label: 'Business Dashboard', icon: <BarChart3 className="h-4 w-4" /> },
    { id: 'customers', label: 'Customer & KYC', icon: <Users className="h-4 w-4" /> },
    { id: 'catalogue', label: 'Catalogue & Pricing', icon: <Package className="h-4 w-4" /> },
    { id: 'plans', label: 'Plans & Rules', icon: <Sliders className="h-4 w-4" /> },
    { id: 'collections', label: 'Collections & Recon', icon: <RefreshCw className="h-4 w-4" /> },
    { id: 'emi-book', label: 'EMI Book & Overdues', icon: <CreditCard className="h-4 w-4" /> },
    { id: 'orders', label: 'Orders & Fulfilment', icon: <Truck className="h-4 w-4" /> },
    { id: 'withdrawals', label: 'Withdrawals & Refunds', icon: <ArrowDownLeft className="h-4 w-4" /> },
    { id: 'content', label: 'Content & Announcements', icon: <Megaphone className="h-4 w-4" /> },
    { id: 'reports', label: 'Reports & Exports', icon: <FileSpreadsheet className="h-4 w-4" /> },
    { id: 'audit', label: 'Roles & Audit Log', icon: <ShieldAlert className="h-4 w-4" /> }
  ]

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 py-8 radial-mesh">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Toast Alert */}
        {toastMessage && (
          <div className="fixed top-20 right-6 z-50 flex items-center gap-2 rounded-2xl bg-emerald-500 text-black px-4 py-3 font-bold text-xs shadow-2xl animate-bounce">
            <Check className="h-4 w-4" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-200 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3.5 py-1 text-xs font-semibold text-indigo-700 mb-2 shadow-sm">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Admin &amp; Operations Console · Line Item 2</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Operations Control Room
            </h1>
            <p className="mt-1 text-xs text-slate-500">
              Your team’s command center to run auto-save collections, KYC, catalogue, EMI book, and reconciliation every day.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-3.5 py-2 text-xs font-semibold text-emerald-700">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Single Core Engine Active</span>
            </span>

            <button
              onClick={() => showToast('Syncing real-time database ledgers & gateway webhooks...')}
              className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 shadow-sm cursor-pointer"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              <span>Reconcile Now</span>
            </button>
          </div>
        </div>

        {/* 11 Modules Horizontal Navigation Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none border-b border-slate-200">
          {navModules.map((mod) => (
            <button
              key={mod.id}
              onClick={() => setActiveModule(mod.id as any)}
              className={`flex items-center gap-2 whitespace-nowrap rounded-xl px-3.5 py-2.5 text-xs font-bold transition cursor-pointer ${
                activeModule === mod.id
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {mod.icon}
              <span>{mod.label}</span>
            </button>
          ))}
        </div>

        {/* MODULE 1: BUSINESS DASHBOARD (Matches Image 6 Mini-Mockup) */}
        {activeModule === 'business' && (
          <div className="space-y-6">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-700 to-indigo-900 p-5 shadow-sm text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-200 block">
                  Total Fund Balance
                </span>
                <div className="mt-2 text-3xl font-extrabold text-white">
                  {businessKpis.totalFundBalance}
                </div>
                <p className="mt-1 text-[11px] text-emerald-300 font-medium">
                  +18.2% MoM growth in savings fund
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  Active Auto-Savers
                </span>
                <div className="mt-2 text-3xl font-extrabold text-emerald-400">
                  {businessKpis.activeSavers}
                </div>
                <p className="mt-1 text-[11px] text-slate-500">
                  UPI AutoPay active mandates across India
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  Appliance Orders
                </span>
                <div className="mt-2 text-3xl font-extrabold text-amber-400">
                  {businessKpis.orders}
                </div>
                <p className="mt-1 text-[11px] text-slate-500">
                  Fund applied + balance on 0% EMI
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  Active EMI Book &amp; Overdues
                </span>
                <div className="mt-2 text-3xl font-extrabold text-indigo-300">
                  {businessKpis.emiBookValue}
                </div>
                <p className="mt-1 text-[11px] text-rose-400 font-bold">
                  {businessKpis.overduesCount} overdue accounts ({businessKpis.overdueAmount})
                </p>
              </div>
            </div>

            {/* Illustrative Admin Console Chart from Proposal */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-slate-200 pb-4">
                <div>
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <BarChart3 className="h-4 w-4 text-indigo-400" />
                    Consolidated Collections Trend &amp; Growth Curve
                  </h3>
                  <span className="text-xs text-slate-500">
                    Live mirror of <code className="text-indigo-300">admin.yourbrand.in/dashboard</code>
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-400 border border-emerald-500/20">
                    99.8% Gateway Recon Rate
                  </span>
                </div>
              </div>

              {/* Vector Trendline SVG mimicking image */}
              <div className="relative h-48 w-full overflow-hidden rounded-2xl bg-slate-50 p-4 flex items-end">
                <svg className="w-full h-36" viewBox="0 0 500 120" fill="none" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#6366F1" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#6366F1" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 100 Q 80 80, 160 85 T 300 40 T 420 30 T 500 10 L 500 120 L 0 120 Z"
                    fill="url(#chartGradient)"
                  />
                  <path
                    d="M0 100 Q 80 80, 160 85 T 300 40 T 420 30 T 500 10"
                    stroke="#6366F1"
                    strokeWidth="3"
                    fill="none"
                  />
                </svg>
                <div className="absolute top-4 left-4 text-xs font-mono text-slate-500">
                  Monthly Collections Momentum
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MODULE 2: CUSTOMER & KYC */}
        {activeModule === 'customers' && (
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <Users className="h-4 w-4 text-emerald-400" />
                  Customer Accounts &amp; KYC Verification
                </h3>
                <p className="text-xs text-slate-500">Search customers, review KYC, freeze or close accounts</p>
              </div>

              <div className="relative min-w-[240px]">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search name, mobile, email..."
                  value={customerSearch}
                  onChange={(e) => setCustomerSearch(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 pl-9 pr-3 py-2 text-xs text-slate-900 placeholder-slate-400 outline-none focus:bg-white focus:border-indigo-500"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider text-[10px] border-b border-slate-200">
                  <tr>
                    <th className="py-3 px-4">Customer ID &amp; Name</th>
                    <th className="py-3 px-4">Contact</th>
                    <th className="py-3 px-4">Fund Balance</th>
                    <th className="py-3 px-4">Active Appliance &amp; EMI</th>
                    <th className="py-3 px-4">KYC Review</th>
                    <th className="py-3 px-4 text-right">Account Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {customers
                    .filter(
                      (c) =>
                        c.name.toLowerCase().includes(customerSearch.toLowerCase()) ||
                        c.email.toLowerCase().includes(customerSearch.toLowerCase()) ||
                        c.id.toLowerCase().includes(customerSearch.toLowerCase())
                    )
                    .map((c) => (
                      <tr key={c.id} className="hover:bg-slate-50/70">
                        <td className="py-3.5 px-4">
                          <div className="font-bold text-slate-900">{c.name}</div>
                          <div className="text-[10px] font-mono text-indigo-300">{c.id}</div>
                        </td>
                        <td className="py-3.5 px-4 text-slate-600">
                          <div>{c.mobile}</div>
                          <div className="text-[10px] text-slate-500">{c.email}</div>
                        </td>
                        <td className="py-3.5 px-4 font-bold text-amber-400">
                          ₹{c.fundBalance.toLocaleString('en-IN')}
                        </td>
                        <td className="py-3.5 px-4">
                          <div className="text-slate-900 font-medium">{c.activeAppliance}</div>
                          <div className="text-[10px] text-emerald-400">{c.emiDue}</div>
                        </td>
                        <td className="py-3.5 px-4">
                          {c.kycStatus === 'VERIFIED' ? (
                            <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-400 border border-emerald-500/30">
                              ✓ Verified
                            </span>
                          ) : c.kycStatus === 'PENDING_REVIEW' ? (
                            <div className="flex gap-1.5">
                              <button
                                onClick={() => handleUpdateKyc(c.id, 'VERIFIED')}
                                className="rounded bg-emerald-500 px-2 py-0.5 text-[10px] font-bold text-black"
                              >
                                Approve
                              </button>
                              <button
                                onClick={() => handleUpdateKyc(c.id, 'REJECTED')}
                                className="rounded bg-rose-500/20 px-2 py-0.5 text-[10px] font-bold text-rose-300 border border-rose-500/30"
                              >
                                Reject
                              </button>
                            </div>
                          ) : (
                            <span className="rounded-full bg-rose-500/10 px-2 py-0.5 text-[10px] font-bold text-rose-400 border border-rose-500/30">
                              ✕ Rejected
                            </span>
                          )}
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <button
                            onClick={() => handleToggleAccountFreeze(c.id)}
                            className={`rounded-lg px-2.5 py-1 text-[11px] font-semibold border ${
                              c.accountStatus === 'FROZEN'
                                ? 'bg-amber-50 text-amber-800 border-amber-200'
                                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                            }`}
                          >
                            {c.accountStatus === 'FROZEN' ? 'Unfreeze' : 'Freeze'}
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* MODULE 3: CATALOGUE & PRICING */}
        {activeModule === 'catalogue' && (
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <Package className="h-4 w-4 text-indigo-400" />
                  Appliance Catalogue &amp; Pricing Management
                </h3>
                <p className="text-xs text-slate-500">Add and edit appliances, prices, stock status, and brand details</p>
              </div>

              <button
                onClick={() => showToast('Opening Add New Appliance Form...')}
                className="inline-flex items-center gap-1.5 rounded-xl bg-indigo-600 px-3.5 py-2 text-xs font-bold text-slate-900 hover:bg-indigo-500"
              >
                <Plus className="h-3.5 w-3.5" />
                <span>Add Appliance</span>
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider text-[10px] border-b border-slate-200">
                  <tr>
                    <th className="py-3 px-4">Appliance</th>
                    <th className="py-3 px-4">Brand &amp; Category</th>
                    <th className="py-3 px-4">Catalogue Price</th>
                    <th className="py-3 px-4">12-Mo 0% EMI</th>
                    <th className="py-3 px-4">Stock Status</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {catalogue.map((p) => (
                    <tr key={p.sku} className="hover:bg-slate-50/70">
                      <td className="py-3 px-4 font-bold text-slate-900 flex items-center gap-2">
                        <img src={p.image} alt={p.name} className="h-8 w-8 rounded object-cover" />
                        <span className="truncate max-w-xs">{p.name}</span>
                      </td>
                      <td className="py-3 px-4 text-slate-600">{p.brand} · {p.category}</td>
                      <td className="py-3 px-4 font-bold text-slate-900">{p.formattedPrice}</td>
                      <td className="py-3 px-4 text-emerald-400 font-semibold">₹{p.monthlyEmi12}/mo</td>
                      <td className="py-3 px-4">
                        <span
                          className={`rounded-full px-2 py-0.5 text-[10px] font-bold border ${
                            p.availability.includes('In Stock')
                              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                              : 'bg-rose-500/10 text-rose-400 border-rose-500/30'
                          }`}
                        >
                          {p.availability}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <button
                          onClick={() => handleToggleStock(p.sku)}
                          className="rounded-lg bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 cursor-pointer"
                        >
                          Toggle Stock
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* MODULE 4: PLANS & RULES */}
        {activeModule === 'plans' && (
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-6">
            <div>
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Sliders className="h-4 w-4 text-amber-400" />
                Plans &amp; Rules Configuration (Zero-Code Rule Engine)
              </h3>
              <p className="text-xs text-slate-500">
                Set auto-save minimums, frequencies, EMI tenures, eligibility, and withdrawal policy — no code changes.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl bg-slate-50 p-5 border border-slate-100 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
                  Mandate Thresholds
                </span>
                <div>
                  <label className="text-[11px] text-slate-500 block mb-1">Daily Minimum Debit (₹)</label>
                  <input
                    type="number"
                    value={rules.dailyMin}
                    onChange={(e) => setRules({ ...rules, dailyMin: Number(e.target.value) })}
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-900"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-slate-500 block mb-1">Weekly Minimum Debit (₹)</label>
                  <input
                    type="number"
                    value={rules.weeklyMin}
                    onChange={(e) => setRules({ ...rules, weeklyMin: Number(e.target.value) })}
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-900"
                  />
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 p-5 border border-slate-100 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                  0% EMI Tenures Enabled
                </span>
                <div className="space-y-2 text-xs">
                  {[3, 6, 9, 12].map((m) => (
                    <label key={m} className="flex items-center gap-2 text-slate-700 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={rules.tenuresEnabled[m as 3 | 6 | 9 | 12]}
                        onChange={() => {
                          const current = rules.tenuresEnabled[m as 3 | 6 | 9 | 12]
                          setRules({
                            ...rules,
                            tenuresEnabled: { ...rules.tenuresEnabled, [m]: !current }
                          })
                        }}
                        className="rounded accent-emerald-500"
                      />
                      <span>{m} Months Tenure (0% Interest)</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 p-5 border border-slate-100 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                  Withdrawal &amp; Eligibility Policy
                </span>
                <div>
                  <label className="text-[11px] text-slate-500 block mb-1">Eligibility Minimum Fund (₹)</label>
                  <input
                    type="number"
                    value={rules.eligibilityMinFund}
                    onChange={(e) => setRules({ ...rules, eligibilityMinFund: Number(e.target.value) })}
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-900"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-slate-500 block mb-1">Settlement Turnaround (Hours)</label>
                  <input
                    type="number"
                    value={rules.withdrawalSettlementHours}
                    onChange={(e) => setRules({ ...rules, withdrawalSettlementHours: Number(e.target.value) })}
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-900"
                  />
                </div>
              </div>
            </div>

            <button
              onClick={() => showToast('Rules policy saved and deployed across shared core platform!')}
              className="rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-5 py-3 text-xs font-bold text-black"
            >
              Save &amp; Deploy Rule Changes
            </button>
          </div>
        )}

        {/* MODULE 5: COLLECTIONS & RECONCILIATION */}
        {activeModule === 'collections' && (
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <RefreshCw className="h-4 w-4 text-cyan-400" />
                  Collections &amp; Payment Gateway Reconciliation
                </h3>
                <p className="text-xs text-slate-500">
                  Auto-save &amp; EMI mandate status, failed debits, retries and daily matching with gateway settlements
                </p>
              </div>

              <button
                onClick={() => showToast('Automated retry triggered for failed mandate debits!')}
                className="rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2 text-xs font-bold text-slate-700 hover:text-slate-900 hover:bg-slate-100 cursor-pointer"
              >
                Trigger Failed Retries
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-600 uppercase tracking-wider text-[10px] border-b border-slate-200">
                  <tr>
                    <th className="py-3 px-4">Mandate ID</th>
                    <th className="py-3 px-4">Customer</th>
                    <th className="py-3 px-4">Amount &amp; Frequency</th>
                    <th className="py-3 px-4">Gateway Mandate</th>
                    <th className="py-3 px-4">Last Debit Run</th>
                    <th className="py-3 px-4">Reconciliation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {mandates.map((m) => (
                    <tr key={m.id} className="hover:bg-slate-50/70">
                      <td className="py-3 px-4 font-mono font-bold text-indigo-600">{m.id}</td>
                      <td className="py-3 px-4 text-slate-900 font-medium">{m.customer}</td>
                      <td className="py-3 px-4 font-bold text-amber-600">{m.amount}</td>
                      <td className="py-3 px-4 text-slate-600">{m.gateway}</td>
                      <td className="py-3 px-4 text-slate-500">{m.lastDebit}</td>
                      <td className="py-3 px-4">
                        {m.reconciled === 'MATCHED' ? (
                          <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700 border border-emerald-200">
                            ✓ Matched (₹0 Discrepancy)
                          </span>
                        ) : (
                          <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-bold text-amber-800 border border-amber-200">
                            Retry Scheduled (No Bounces)
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

        {/* MODULE 6: EMI BOOK & OVERDUES */}
        {activeModule === 'emi-book' && (
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <CreditCard className="h-4 w-4 text-emerald-600" />
                  EMI Book &amp; Overdue Tracking
                </h3>
                <p className="text-xs text-slate-500">
                  Every active EMI in one view — due and overdue tracking, reminder workflows, follow-up queue
                </p>
              </div>

              <button
                onClick={() => showToast('Triggered automated WhatsApp & SMS payment reminder notifications!')}
                className="rounded-xl bg-indigo-600 hover:bg-indigo-700 px-3.5 py-2 text-xs font-bold text-white cursor-pointer"
              >
                Send Automated Reminders
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-600 uppercase tracking-wider text-[10px] border-b border-slate-200">
                  <tr>
                    <th className="py-3 px-4">EMI ID</th>
                    <th className="py-3 px-4">Customer</th>
                    <th className="py-3 px-4">Appliance</th>
                    <th className="py-3 px-4">Tenure Progress</th>
                    <th className="py-3 px-4">Monthly Dues</th>
                    <th className="py-3 px-4">Due Date</th>
                    <th className="py-3 px-4 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {emiBook.map((e) => (
                    <tr key={e.id} className="hover:bg-slate-50/70">
                      <td className="py-3 px-4 font-mono text-indigo-600 font-bold">{e.id}</td>
                      <td className="py-3 px-4 text-slate-900 font-medium">{e.customer}</td>
                      <td className="py-3 px-4 text-slate-600">{e.item}</td>
                      <td className="py-3 px-4 font-semibold text-slate-900">
                        {e.paidTenure} / {e.totalTenure}
                      </td>
                      <td className="py-3 px-4 font-bold text-emerald-600">
                        ₹{e.amountDue.toLocaleString('en-IN')}
                      </td>
                      <td className="py-3 px-4 text-slate-500">{e.dueDate}</td>
                      <td className="py-3 px-4 text-right">
                        {e.status === 'OVERDUE' ? (
                          <span className="rounded-full bg-rose-50 px-2 py-0.5 text-[10px] font-bold text-rose-700 border border-rose-200">
                            Overdue (Reminder Sent)
                          </span>
                        ) : e.status === 'UPCOMING' ? (
                          <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-[10px] font-bold text-indigo-700 border border-indigo-200">
                            Due in 14 Days
                          </span>
                        ) : (
                          <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700 border border-emerald-200">
                            Cleared
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

        {/* MODULE 7: ORDERS & FULFILMENT */}
        {activeModule === 'orders' && (
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
            <div>
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Truck className="h-4 w-4 text-amber-400" />
                Orders &amp; Partner Retail Fulfilment Queue
              </h3>
              <p className="text-xs text-slate-500">
                Order queue, vendor or dispatch assignment, delivery status, and returns handling
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider text-[10px] border-b border-slate-200">
                  <tr>
                    <th className="py-3 px-4">Order ID</th>
                    <th className="py-3 px-4">Customer</th>
                    <th className="py-3 px-4">Appliance</th>
                    <th className="py-3 px-4">Assigned Partner / Logistics</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {orders.map((o) => (
                    <tr key={o.orderId} className="hover:bg-slate-50/70">
                      <td className="py-3 px-4 font-mono font-bold text-indigo-300">{o.orderId}</td>
                      <td className="py-3 px-4 text-slate-900 font-medium">{o.customer}</td>
                      <td className="py-3 px-4 text-slate-600">{o.appliance}</td>
                      <td className="py-3 px-4 text-slate-500">{o.vendor}</td>
                      <td className="py-3 px-4">
                        <span
                          className={`rounded-full px-2 py-0.5 text-[10px] font-bold border ${
                            o.status === 'DELIVERED'
                              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                              : o.status === 'DISPATCHED'
                              ? 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30'
                              : 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                          }`}
                        >
                          {o.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <select
                          value={o.status}
                          onChange={(e) => handleUpdateOrderStatus(o.orderId, e.target.value)}
                          className="rounded-lg border border-slate-200 bg-slate-50 px-2 py-1 text-[11px] text-slate-200 outline-none"
                        >
                          <option value="PROCESSING">Processing</option>
                          <option value="DISPATCHED">Dispatched</option>
                          <option value="DELIVERED">Delivered</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* MODULE 8: WITHDRAWALS & REFUNDS (Maker-Checker Workflow) */}
        {activeModule === 'withdrawals' && (
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
            <div>
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <ArrowDownLeft className="h-4 w-4 text-rose-400" />
                Withdrawals &amp; Refunds (Maker-Checker Dual Controls)
              </h3>
              <p className="text-xs text-slate-500">
                Approval workflow with maker-checker controls on every customer payout before money movement
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider text-[10px] border-b border-slate-200">
                  <tr>
                    <th className="py-3 px-4">Request ID</th>
                    <th className="py-3 px-4">Customer</th>
                    <th className="py-3 px-4">Amount Requested</th>
                    <th className="py-3 px-4">Target Bank Account</th>
                    <th className="py-3 px-4">Maker Step</th>
                    <th className="py-3 px-4 text-right">Checker Step</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {withdrawals.map((w) => (
                    <tr key={w.id} className="hover:bg-slate-50/70">
                      <td className="py-3 px-4 font-mono font-bold text-indigo-300">{w.id}</td>
                      <td className="py-3 px-4 text-slate-900 font-medium">{w.customer}</td>
                      <td className="py-3 px-4 font-bold text-emerald-400">
                        ₹{w.amount.toLocaleString('en-IN')}
                      </td>
                      <td className="py-3 px-4 text-slate-600">{w.accountNumber}</td>
                      <td className="py-3 px-4">
                        {w.makerStatus === 'VERIFIED' ? (
                          <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-400 border border-emerald-500/30">
                            ✓ Verified by Maker
                          </span>
                        ) : (
                          <button
                            onClick={() => handleMakerApprove(w.id)}
                            className="rounded bg-indigo-600 px-2.5 py-1 text-[10px] font-bold text-slate-900"
                          >
                            Verify as Maker
                          </button>
                        )}
                      </td>
                      <td className="py-3 px-4 text-right">
                        {w.checkerStatus === 'APPROVED_AND_SETTLED' ? (
                          <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-400 border border-emerald-500/30">
                            ✓ Settled via IMPS
                          </span>
                        ) : w.checkerStatus === 'PENDING_APPROVAL' ? (
                          <button
                            onClick={() => handleCheckerConfirm(w.id)}
                            className="rounded bg-emerald-500 px-2.5 py-1 text-[10px] font-bold text-black"
                          >
                            Checker Authorize
                          </button>
                        ) : (
                          <span className="text-slate-500 text-[11px]">Waiting Maker</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* MODULE 9: CONTENT & ANNOUNCEMENTS */}
        {activeModule === 'content' && (
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-6">
            <div>
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Megaphone className="h-4 w-4 text-amber-400" />
                Content Management &amp; Customer Announcements
              </h3>
              <p className="text-xs text-slate-500">
                Manage banners and product highlights; send push, SMS, or WhatsApp messages to customer segments
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-5 border border-slate-100 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
                  Broadcast Direct Message
                </span>

                <div>
                  <label className="text-[11px] text-slate-500 block mb-1">Broadcast Channel</label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['whatsapp', 'sms', 'push'] as const).map((ch) => (
                      <button
                        key={ch}
                        type="button"
                        onClick={() => setAnnouncementChannel(ch)}
                        className={`rounded-xl py-2 text-xs font-bold uppercase ${
                          announcementChannel === ch
                            ? 'bg-indigo-600 text-white'
                            : 'bg-slate-50 text-slate-500'
                        }`}
                      >
                        {ch}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-[11px] text-slate-500 block mb-1">Message Text</label>
                  <textarea
                    rows={4}
                    value={announcementText}
                    onChange={(e) => setAnnouncementText(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white p-3 text-xs text-slate-900 outline-none focus:border-indigo-500"
                  />
                </div>

                <button
                  onClick={() =>
                    showToast(
                      `Broadcast sent to 1,260 active savers via ${announcementChannel.toUpperCase()} gateway!`
                    )
                  }
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 py-3 text-xs font-bold text-white shadow-sm cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                  <span>Send Broadcast to 1,260 Savers</span>
                </button>
              </div>

              <div className="rounded-2xl bg-slate-50 p-5 border border-slate-100 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                  Active Web Banners
                </span>
                <div className="space-y-2 text-xs">
                  <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-slate-900">Top Banner: "Save a little. Bring home a lot."</div>
                      <div className="text-[10px] text-emerald-700 font-medium">Status: Active on Homepage</div>
                    </div>
                    <span className="rounded bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 text-[10px] font-bold">Live</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-slate-900">Promotional: "Whirlpool Double-Door Fridge at ₹1,000/mo"</div>
                      <div className="text-[10px] text-slate-500">Target: All Customers with fund &gt; ₹3,000</div>
                    </div>
                    <span className="rounded bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 text-[10px] font-bold">Live</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MODULE 10: REPORTS & EXPORTS */}
        {activeModule === 'reports' && (
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-6">
            <div>
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <FileSpreadsheet className="h-4 w-4 text-emerald-600" />
                Reports &amp; Data Exports (CSV / Excel)
              </h3>
              <p className="text-xs text-slate-500">
                Fund, collections, EMI, sales, and customer reports with instant CSV and Excel download
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { name: 'Double-Entry Fund Ledger Report', desc: 'All debit & credit journal entries' },
                { name: 'UPI AutoPay Collections Master', desc: 'Gateway settlement & mandate breakdown' },
                { name: 'Active EMI Book & Schedule Report', desc: 'Instalment schedule and repayments' },
                { name: 'Overdues & Default Analysis Report', desc: 'Risk tracking and reminders queue' },
                { name: 'Appliance Sales & Fulfilment Master', desc: 'Delivered vs in-transit orders' },
                { name: 'Customer KYC & Accounts Directory', desc: 'Full KYC & contact master list' }
              ].map((rep) => (
                <div
                  key={rep.name}
                  className="rounded-2xl bg-slate-50 p-5 border border-slate-200 flex flex-col justify-between space-y-3"
                >
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{rep.name}</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">{rep.desc}</p>
                  </div>
                  <button
                    onClick={() => showToast(`Generating and exporting ${rep.name} (CSV)...`)}
                    className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-white py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 cursor-pointer shadow-sm"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>Export CSV</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* MODULE 11: ROLES & AUDIT LOG */}
        {activeModule === 'audit' && (
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
            <div>
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <ShieldAlert className="h-4 w-4 text-indigo-400" />
                Roles &amp; Immutable Audit Log
              </h3>
              <p className="text-xs text-slate-500">
                Role-based access for your team with a complete, time-stamped audit trail
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider text-[10px] border-b border-slate-200">
                  <tr>
                    <th className="py-3 px-4">Audit ID</th>
                    <th className="py-3 px-4">Authorized User &amp; Role</th>
                    <th className="py-3 px-4">Action Executed</th>
                    <th className="py-3 px-4">Detail Record</th>
                    <th className="py-3 px-4">Timestamp</th>
                    <th className="py-3 px-4 text-right">Client IP</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {auditLogs.map((log) => (
                    <tr key={log.id} className="hover:bg-slate-50/70">
                      <td className="py-3 px-4 font-mono font-bold text-indigo-600">{log.id}</td>
                      <td className="py-3 px-4 text-slate-900 font-medium">{log.user}</td>
                      <td className="py-3 px-4 font-semibold text-emerald-700">{log.action}</td>
                      <td className="py-3 px-4 text-slate-600">{log.detail}</td>
                      <td className="py-3 px-4 text-slate-500">{log.time}</td>
                      <td className="py-3 px-4 text-right font-mono text-slate-500">{log.ip}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
