import React from 'react'
import { Link } from 'react-router-dom'
import { Package, ShieldCheck, CheckCircle2, Clock, Truck, ArrowRight, Percent, Download } from 'lucide-react'

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
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 py-16 radial-mesh">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="rounded-3xl border border-white/10 bg-[#131B2E]/90 p-8 shadow-2xl backdrop-blur-xl flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold text-indigo-400 mb-2">
              <Package className="h-3.5 w-3.5" />
              <span>Orders &amp; Appliance Fulfillment</span>
            </div>
            <h1 className="text-3xl font-extrabold text-white">Your Appliance Orders</h1>
            <p className="mt-1 text-xs sm:text-sm text-slate-300">
              Track delivery progress, fund allocation, and active 0% no-cost EMI repayment schedules.
            </p>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-5 py-3 text-xs font-bold text-black shadow-lg shadow-emerald-500/20 hover:from-emerald-400 hover:to-teal-400 transition"
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
              className="rounded-2xl border border-white/10 bg-[#131B2E]/70 p-6 backdrop-blur-md hover:border-indigo-500/40 transition-all duration-200 space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 font-mono">
                      {order.id}
                    </span>
                    <span className="text-xs text-slate-400">· {order.brand}</span>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold border ${
                        order.deliveryStatus === 'Delivered'
                          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                          : order.deliveryStatus === 'Dispatched'
                          ? 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30'
                          : 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                      }`}
                    >
                      {order.deliveryStatus}
                    </span>
                  </div>
                  <h2 className="mt-1.5 text-lg font-bold text-white">{order.appliance}</h2>
                  <p className="text-xs text-slate-400">
                    Fulfillment: <span className="text-slate-200">{order.fulfillmentPartner}</span> (Waybill: <code className="text-indigo-300">{order.trackingCode}</code>)
                  </p>
                </div>

                <div className="text-left sm:text-right">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Total Appliance Value</span>
                  <span className="text-2xl font-extrabold text-white">{order.totalPrice}</span>
                  <span className="text-[11px] text-emerald-400 block font-semibold">0% No-Cost EMI</span>
                </div>
              </div>

              {/* Fund Split Breakdown Bar */}
              <div className="rounded-xl bg-[#0B0F19]/80 p-4 border border-white/5 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-amber-400 font-bold">● {order.fundApplied} paid from Savings Fund</span>
                  <span className="text-indigo-400 font-bold">● {order.balanceEmi} on 0% EMI</span>
                </div>

                <div className="flex items-center justify-between text-xs pt-2 border-t border-white/5 text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-emerald-400" />
                    Repayment Schedule: <strong className="text-white">{order.emiSchedule}</strong>
                  </span>
                  <span className="text-slate-400">{order.warranty}</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs pt-1 text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <ShieldCheck className="h-4 w-4" />
                  Official Tax Invoice &amp; Manufacturer Warranty Included
                </span>

                <button
                  onClick={() => alert(`Downloading Tax Invoice for ${order.id}...`)}
                  className="inline-flex items-center gap-1 text-slate-300 hover:text-white transition cursor-pointer"
                >
                  <Download className="h-3.5 w-3.5 text-indigo-400" />
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
