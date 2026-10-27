import React from 'react'
import { Link } from 'react-router-dom'
import { ShieldCheck, CheckCircle2, Lock, ArrowUpRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-600">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:px-8 lg:grid-cols-4">
        {/* Brand Column */}
        <div className="space-y-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-700 to-indigo-900 p-[1px] shadow-sm">
              <div className="flex h-full w-full items-center justify-center rounded-[11px] bg-white">
                <div className="h-4 w-4 rotate-45 border-2 border-indigo-600 bg-amber-400/30" />
              </div>
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-slate-900">
                Save<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">N</span>Buy
              </span>
              <span className="block text-[10px] font-medium tracking-widest text-slate-400 uppercase">FinTech Platform</span>
            </div>
          </Link>
          <p className="text-xs leading-relaxed text-slate-500">
            India's premier auto-savings and 0% no-cost EMI platform for home appliances. Build a fund through small automated debits and acquire authentic brand goods without debt.
          </p>
          <div className="flex flex-wrap items-center gap-3 text-[11px] text-emerald-600 font-semibold">
            <span className="flex items-center gap-1"><ShieldCheck className="h-3.5 w-3.5 text-emerald-600" /> 100% Authentic</span>
            <span className="flex items-center gap-1"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" /> 0% Markup</span>
            <span className="flex items-center gap-1"><Lock className="h-3.5 w-3.5 text-emerald-600" /> Audited Ledger</span>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-900">Platform</p>
          <nav className="mt-4 flex flex-col space-y-2.5 text-xs text-slate-600">
            <Link to="/about" className="hover:text-indigo-600 transition">About Architecture</Link>
            <Link to="/plans" className="hover:text-indigo-600 transition">Auto-Save Mandates</Link>
            <Link to="/products" className="hover:text-indigo-600 transition">Appliances Catalogue</Link>
            <Link to="/calculator" className="hover:text-indigo-600 transition">Buy-Now Calculator</Link>
            <Link to="/partners" className="hover:text-indigo-600 transition">Authorized Retail Network</Link>
          </nav>
        </div>

        {/* Support & Governance */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-900">Governance &amp; Trust</p>
          <nav className="mt-4 flex flex-col space-y-2.5 text-xs text-slate-600">
            <Link to="/support" className="hover:text-indigo-600 transition">Member Concierge</Link>
            <Link to="/faq" className="hover:text-indigo-600 transition">Frequently Asked Questions</Link>
            <Link to="/reward" className="hover:text-indigo-600 transition">Milestone Rewards Program</Link>
            <Link to="/privacy" className="hover:text-indigo-600 transition">Privacy &amp; Data Security</Link>
            <Link to="/terms" className="hover:text-indigo-600 transition">Terms &amp; Settlement Protocols</Link>
          </nav>
        </div>

        {/* Contact / Head Office */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-900">Institutional Desk</p>
          <div className="mt-3 flex flex-col space-y-1.5 text-xs">
            <Link to="/admin/login" className="text-indigo-600 font-bold hover:text-indigo-800 transition flex items-center gap-1">
              <span>Admin Console Gateway</span>
              <ArrowUpRight className="h-3 w-3" />
            </Link>
            <Link to="/manager/login" className="text-slate-600 hover:text-slate-900 transition flex items-center gap-1 font-medium">
              <span>Branch Operations Hub</span>
              <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>
          <p className="mt-4 text-xs text-slate-700">concierge@savenbuy.in</p>
          <p className="mt-1 text-xs text-slate-700 font-semibold">+91 22 4920 8800 / 1800-419-SAVENBUY</p>
          <p className="mt-3 text-xs leading-5 text-slate-400">
            One World Center, Tower 2, Floor 14, Senapati Bapat Marg, Lower Parel, Mumbai 400013
          </p>
        </div>
      </div>

      <div className="border-t border-slate-100 bg-slate-50 py-4 text-center text-xs text-slate-500">
        © 2026 SaveNBuy Financial Technologies Inc. All brand trademarks (Apple, Samsung, Sony, LG, Daikin, Dyson, Whirlpool, Kent, IFB) belong to their respective corporations.
      </div>
    </footer>
  )
}
