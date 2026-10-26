import React from 'react'
import { HelpCircle, ChevronDown, Sparkles, ShieldCheck } from 'lucide-react'

export default function FAQ() {
  const faqs = [
    {
      q: 'How does the SaveNBuy milestone savings plan work?',
      a: 'You select your desired authentic hardware or gold asset, choose an installment tenure (6, 9, 12, or 18 months), and make recurring zero-interest payments into an escrow-backed account. Once your term finishes, your brand-new sealed asset is dispatched directly or made ready for collection at partner outlets like Croma or Tanishq.'
    },
    {
      q: 'Are all products 100% original and covered by manufacturer warranty?',
      a: 'Yes, unconditionally. We source exclusively from authorized corporate distributors (Apple India, Samsung India, Sony India, Tanishq Tata, LG Electronics, Daikin India). Every product comes with an official tax invoice in your name and complete manufacturer warranty coverage valid at all authorized service centers across India.'
    },
    {
      q: 'Can I exit or request a refund midway through a plan?',
      a: 'Yes. Unlike rigid loans with prepayment penalties, SaveNBuy offers transparent early settlement terms. You can request a settlement or convert your accumulated capital into store vouchers with zero penalty.'
    },
    {
      q: 'How do milestone reward points work?',
      a: 'Every on-time monthly payment awards bonus milestone points. Points can be redeemed for accessories (such as Apple chargers, cases, soundbars) or applied toward your final installment dues.'
    },
    {
      q: 'Are there any hidden interest charges, processing fees, or GST surprises?',
      a: 'None whatsoever. The monthly dues displayed in our FinTech calculator are completely interest-free (0% APR). Transparent pricing is the core principle of our platform.'
    }
  ]

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 py-16 radial-mesh">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-[#131B2E]/80 p-8 sm:p-12 shadow-2xl backdrop-blur-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1 text-xs font-semibold tracking-wider text-indigo-400 mb-4">
            <HelpCircle className="h-3.5 w-3.5 text-indigo-400" />
            <span>Knowledge Base</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-indigo-300">
            Frequently Asked Questions
          </h1>
          <p className="mt-3 text-xs sm:text-sm text-slate-400">
            Clear answers about milestone tenures, escrow protections, and authorized brand fulfillment.
          </p>

          <div className="mt-10 space-y-4">
            {faqs.map((item) => (
              <div
                key={item.q}
                className="rounded-2xl border border-white/10 bg-[#0B0F19]/60 p-6 backdrop-blur-md hover:border-indigo-500/40 transition-all duration-200"
              >
                <p className="text-base font-bold text-white flex items-center justify-between">
                  <span>{item.q}</span>
                </p>
                <p className="mt-3 text-xs leading-relaxed text-slate-300">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-[#0B0F19]/80 p-5 border border-white/10 text-xs text-slate-400 flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-emerald-400 shrink-0" />
            <span>Have specific questions? Reach out to our 24/7 Member Concierge desk at <strong className="text-white">concierge@savenbuy.in</strong>.</span>
          </div>
        </div>
      </div>
    </div>
  )
}
