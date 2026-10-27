import React from 'react'
import { Link } from 'react-router-dom'
import { Package, ShieldCheck, Clock, ArrowRight, Download } from 'lucide-react'

export default function Orders() {
  const orders = [
    {
      id: 'ORD-9021',
      appliance: 'Whirlpool 265L 3-Star Double-Door Refrigerator',
      brand: 'Whirlpool',
      category: 'Refrigerators',
      totalPrice: '₹17,000',
      fundApplied: '₹5,000',
      balanceEmi: '₹12,000',
      emiSchedule: '₹1,000 / month × 12 (4/12 paid)',
      deliveryStatus: 'Delivered',
      deliveryDate: '15 Jul 2026',
      fulfillmentPartner: 'Croma Megastore, Lower Parel',
      trackingCode: 'CR-MUM-88401',
      warranty: '10-Year Manufacturer Warranty Active'
    },
    {
      id: 'ORD-9022',
      appliance: 'Daikin 1.5 Ton 5-Star Inverter Split AC',
      brand: 'Daikin',
      category: 'Air Conditioners',
      totalPrice: '₹44,990',
      fundApplied: '₹10,000',
      balanceEmi: '₹34,990',
      emiSchedule: '₹3,887 / month × 9 (1/9 paid)',
      deliveryStatus: 'Dispatched',
      deliveryDate: 'Estimated 29 Oct 2026',
      fulfillmentPartner: 'Tata CLiQ Express Logistics',
      trackingCode: 'TC-EXP-99214',
      warranty: 'Free Standard Delivery & Installation Booked'
    },
    {
      id: 'ORD-9023',
      appliance: 'Kent Grand Plus RO + UV Water Purifier',
      brand: 'Kent',
      category: 'Water Purifiers',
      totalPrice: '₹16,500',
      fundApplied: '₹5,000',
      balanceEmi: '₹11,500',
      emiSchedule: '₹958 / month × 12 (0/12 paid)',
      deliveryStatus: 'Processing',
      deliveryDate: 'Order Confirmed · Dispatch in 24 hrs',
      fulfillmentPartner: 'Kent Authorized Depot',
      trackingCode: 'KNT-DEL-10492',
      warranty: '1 Year Warranty + 3 Years Service Covered'
    }
  ]

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 py-16 radial-mesh">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3.5 py-1 text-xs font-semibold text-indigo-700 mb-2 shadow-sm">
              <Package className="h-3.5 w-3.5" />
              <span>Orders &amp; Appliance Fulfillment</span>
            </div>
            <h1 className="text-3xl font-extrabold text-slate-900">Your Appliance Orders</h1>
            <p className="mt-1 text-xs sm:text-sm text-slate-600">
              Track delivery progress, fund allocation, and active 0% no-cost EMI repayment schedules.
            </p>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-xs font-bold text-white shadow-sm hover:bg-emerald-700 transition"
          >
            <span>Shop New Appliance</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Orders List */}
        <div className="space-y-5">
          {orders.map((order) => (
            <div
              key={order.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-indigo-300 hover:shadow-md transition-all duration-200 space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 font-mono">
                      {order.id}
                    </span>
                    <span className="text-xs text-slate-500">· {order.brand}</span>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold border ${
                        order.deliveryStatus === 'Delivered'
                          ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                          : order.deliveryStatus === 'Dispatched'
                          ? 'bg-indigo-50 text-indigo-700 border-indigo-200'
                          : 'bg-amber-50 text-amber-800 border-amber-200'
                      }`}
                    >
                      {order.deliveryStatus}
                    </span>
                  </div>
                  <h2 className="mt-1.5 text-lg font-bold text-slate-900">{order.appliance}</h2>
                  <p className="text-xs text-slate-500">
                    Fulfillment: <span className="text-slate-800 font-medium">{order.fulfillmentPartner}</span> (Waybill: <code className="text-indigo-600 font-mono">{order.trackingCode}</code>)
                  </p>
                </div>

                <div className="text-left sm:text-right">
                  <span className="text-[10px] uppercase font-bold text-slate-500 block">Total Appliance Value</span>
                  <span className="text-2xl font-extrabold text-slate-900">{order.totalPrice}</span>
                  <span className="text-[11px] text-emerald-700 block font-semibold">0% No-Cost EMI</span>
                </div>
              </div>

              {/* Fund Split Breakdown Bar */}
              <div className="rounded-xl bg-slate-50 p-4 border border-slate-200 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-amber-800 font-bold">● {order.fundApplied} paid from Savings Fund</span>
                  <span className="text-indigo-700 font-bold">● {order.balanceEmi} on 0% EMI</span>
                </div>

                <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-200 text-slate-700">
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-emerald-600" />
                    Repayment Schedule: <strong className="text-slate-900">{order.emiSchedule}</strong>
                  </span>
                  <span className="text-slate-500">{order.warranty}</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs pt-1 text-slate-500">
                <span className="flex items-center gap-1.5 text-emerald-700 font-medium">
                  <ShieldCheck className="h-4 w-4" />
                  Official Tax Invoice &amp; Manufacturer Warranty Included
                </span>

                <button
                  onClick={() => alert(`Downloading Tax Invoice for ${order.id}...`)}
                  className="inline-flex items-center gap-1 text-slate-600 hover:text-slate-900 transition cursor-pointer font-medium"
                >
                  <Download className="h-3.5 w-3.5 text-indigo-600" />
                  <span>Download Invoice</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}