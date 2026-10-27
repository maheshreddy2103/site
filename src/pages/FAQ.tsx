import React from 'react'
import { HelpCircle, ShieldCheck } from 'lucide-react'

export default function FAQ() {
  const faqs = [
    {
      q: 'How does the auto-savings and no-cost EMI platform work?',
      a: 'You set up a small automatic debit (such as ₹50 daily, ₹350 weekly, or ₹2,500 monthly) via UPI AutoPay. Over time, your personal savings fund accumulates. Whenever you need an appliance, you pick it from our catalogue — your fund pays first, and any remaining balance is split into true 0% interest no-cost EMIs.'
    },
    {
      q: 'Is the savings fund 100% my own money?',
      a: 'Yes, unconditionally. The model is deliberately simple: the fund is your own money, with no investment returns, no market risk, and no reward points gimmicks. Its sole value is saving discipline and interest-free buying power. You can withdraw your balance at any time.'
    },
    {
      q: 'How does the 0% No-Cost EMI work on appliances?',
      a: 'When you purchase an appliance (e.g. a ₹17,000 double-door refrigerator) and have ₹5,000 in your savings fund, ₹5,000 is deducted immediately from the purchase price. The remaining ₹12,000 balance is split into equal instalments (e.g. ₹1,000/month across 12 months) with zero interest, zero documentation fees, and zero hidden charges.'
    },
    {
      q: 'Can I pause, modify, or cancel my UPI AutoPay mandate?',
      a: 'Yes. You have complete self-service control from your Customer Web Portal or mobile app. You can pause debits if you need a break, change the debit amount, or cancel the mandate anytime with zero penalties.'
    },
    {
      q: 'What happens if an auto-save debit fails or my bank balance is low?',
      a: 'We use duplicate-safe idempotent payment scheduling with smart retry logic. If a debit fails, we do not levy penalty or bounce charges. You can retry manually via UPI or wait for the next scheduled auto-debit.'
    },
    {
      q: 'Are all appliances genuine and covered by official manufacturer warranties?',
      a: 'Yes. All appliances are sourced directly through authorized retail distributor networks (Croma, Reliance Digital, Vijay Sales, and direct brand depots). You receive an original GST tax invoice in your name, eligible for official pan-India brand warranty and home installation.'
    },
    {
      q: 'How is my money protected?',
      a: 'Customer funds are recorded in an auditable double-entry ledger with bank-grade AES-256 encryption. Manual adjustments and withdrawals require maker-checker dual authorization before payout to ensure zero unauthorized money movement.'
    }
  ]

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 py-16 radial-mesh">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 shadow-sm">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 text-xs font-semibold text-amber-800 mb-4 shadow-sm">
            <HelpCircle className="h-3.5 w-3.5 text-amber-600" />
            <span>Customer Knowledge Base</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
            Everything you need to know about UPI AutoPay micro-savings, fund withdrawals, 0% no-cost EMIs, and genuine brand appliance fulfillment.
          </p>

          <div className="mt-10 space-y-4">
            {faqs.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 hover:bg-slate-50 hover:border-indigo-300 transition-all duration-200"
              >
                <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center justify-between">
                  <span>{item.q}</span>
                </h3>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-slate-50 p-5 border border-slate-200 text-xs text-slate-600 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-emerald-600 shrink-0" />
              <span>Have additional questions or need mandate support?</span>
            </div>
            <a
              href="mailto:support@savenbuy.in"
              className="inline-flex items-center gap-1.5 text-emerald-700 font-bold hover:underline"
            >
              Contact Support Desk →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}