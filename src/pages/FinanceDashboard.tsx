import React from 'react'
import {
  ArrowUpRight,
  Download,
  CreditCard
} from 'lucide-react'

export default function FinanceDashboard() {
  const transactions = [
    { id: 'TXN-9941', member: 'Rajesh Kumar Verma', plan: 'Double-Door Fridge (Installment 4/12)', amount: '₹1,000', method: 'UPI AutoPay (Axis)', date: 'Today, 09:30 AM', status: 'SETTLED' },
    { id: 'TXN-9940', member: 'Priya Sundaram', plan: 'Double-Door Fridge (Installment 4/12)', amount: '₹1,000', method: 'HDFC NetBanking', date: 'Today, 08:45 AM', status: 'SETTLED' },
    { id: 'TXN-9939', member: 'Amitabh Sen', plan: 'Kent Water Purifier (Installment 9/9)', amount: '₹958', method: 'ICICI UPI', date: 'Yesterday', status: 'SETTLED' },
    { id: 'TXN-9938', member: 'Meera Nambiar', plan: 'Daikin 1.5T AC (Installment 1/9)', amount: '₹3,887', method: 'Axis Mandate', date: 'Yesterday', status: 'SETTLED' }
  ]

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 py-10 radial-mesh">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-200 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-semibold text-emerald-700 mb-2 shadow-sm">
              <CreditCard className="h-3.5 w-3.5" />
              <span>Treasury &amp; Escrow Reconciliation</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Finance &amp; Collections Desk
            </h1>
            <p className="mt-1 text-xs text-slate-600">
              Real-time recurring milestone dues clearance, bank trustee balances, and vendor payouts.
            </p>
          </div>

          <button
            onClick={() => alert('Downloading official MT940 Bank Settlement statement...')}
            className="flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-emerald-700 transition cursor-pointer"
          >
            <Download className="h-4 w-4" />
            <span>Download Bank Settlement MT940</span>
          </button>
        </div>

        {/* Metrics Grid */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <span className="text-xs uppercase tracking-wider text-slate-500 block font-semibold">Total MTD Inflows</span>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-slate-900">₹74.8 Lakh</span>
              <span className="text-xs text-emerald-700 font-semibold flex items-center">
                <ArrowUpRight className="h-3 w-3" /> +12.3%
              </span>
            </div>
            <p className="mt-1 text-[11px] text-slate-500">Target: ₹80.0 Lakh</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <span className="text-xs uppercase tracking-wider text-slate-500 block font-semibold">Escrow Net Liquid Assets</span>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-indigo-600">₹3.15 Cr</span>
              <span className="text-xs text-slate-500 font-medium">100% Ring-fenced</span>
            </div>
            <p className="mt-1 text-[11px] text-slate-500">Audited by KPMG India</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <span className="text-xs uppercase tracking-wider text-slate-500 block font-semibold">Vendor Payable Pipeline</span>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-amber-800">₹18.4 Lakh</span>
              <span className="text-xs text-amber-700 font-medium">Due for Release</span>
            </div>
            <p className="mt-1 text-[11px] text-slate-500">Croma &amp; Authorized Depots</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <span className="text-xs uppercase tracking-wider text-slate-500 block font-semibold">Overdue Default Ratio</span>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-emerald-700">0.8%</span>
              <span className="text-xs text-emerald-700 font-medium">Industry Low</span>
            </div>
            <p className="mt-1 text-[11px] text-slate-500">Supported by mandate retries</p>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm">
          <div className="p-5 border-b border-slate-100 flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-slate-900">Live Milestone Collection Stream</h2>
              <p className="text-xs text-slate-500">Real-time settlement webhook entries from Razorpay / NPCI NACH Mandates</p>
            </div>
            <span className="rounded-lg bg-emerald-50 px-2.5 py-1 text-xs text-emerald-700 font-semibold border border-emerald-200">
              Automated NACH Active
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-600 uppercase tracking-wider text-[10px] border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4">Txn ID</th>
                  <th className="py-3 px-4">Member Name</th>
                  <th className="py-3 px-4">Plan &amp; Tenure Stage</th>
                  <th className="py-3 px-4">Amount</th>
                  <th className="py-3 px-4">Payment Rail</th>
                  <th className="py-3 px-4">Timestamp</th>
                  <th className="py-3 px-4 text-right">Settlement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {transactions.map((tx) => (
                  <tr key={tx.id} className="hover:bg-slate-50/70 transition">
                    <td className="py-3.5 px-4 font-mono text-indigo-600 font-semibold">{tx.id}</td>
                    <td className="py-3.5 px-4 font-bold text-slate-900">{tx.member}</td>
                    <td className="py-3.5 px-4 text-slate-600">{tx.plan}</td>
                    <td className="py-3.5 px-4 font-extrabold text-emerald-700">{tx.amount}</td>
                    <td className="py-3.5 px-4 text-slate-500">{tx.method}</td>
                    <td className="py-3.5 px-4 text-slate-500 text-[11px]">{tx.date}</td>
                    <td className="py-3.5 px-4 text-right">
                      <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700 border border-emerald-200">
                        {tx.status}
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