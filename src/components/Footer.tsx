import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-brand-gold/20 bg-brand-maroon/5 text-slate-700">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 lg:px-8 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-maroon text-white font-serif font-bold text-sm">
              L
            </div>
            <p className="text-lg font-serif font-bold text-navy">Lakshmi Club</p>
          </div>
          <p className="mt-3 text-xs leading-6 text-slate-600">
            India's trusted membership savings platform for acquiring genuine branded electronics, appliances, and BIS hallmarked gold through disciplined, transparent monthly installments.
          </p>
          <div className="mt-4 flex gap-2 text-xs text-brand-maroon font-semibold">
            <span>✓ 100% Genuine</span> · <span>✓ 0% Interest</span> · <span>✓ Audited</span>
          </div>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-maroon">Company</p>
          <nav className="mt-4 flex flex-col space-y-2.5 text-xs text-slate-600">
            <Link to="/about" className="hover:text-brand-maroon transition">About Lakshmi Club</Link>
            <Link to="/plans" className="hover:text-brand-maroon transition">Membership Plans</Link>
            <Link to="/products" className="hover:text-brand-maroon transition">Brand Catalog</Link>
            <Link to="/careers" className="hover:text-brand-maroon transition">Careers</Link>
            <Link to="/privacy" className="hover:text-brand-maroon transition">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-brand-maroon transition">Terms &amp; Conditions</Link>
          </nav>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-maroon">Support &amp; Partners</p>
          <nav className="mt-4 flex flex-col space-y-2.5 text-xs text-slate-600">
            <Link to="/support" className="hover:text-brand-maroon transition">Customer Support</Link>
            <Link to="/faq" className="hover:text-brand-maroon transition">Frequently Asked Questions</Link>
            <Link to="/partners" className="hover:text-brand-maroon transition">Authorized Retail Partners</Link>
            <Link to="/reward" className="hover:text-brand-maroon transition">Rewards &amp; Milestones</Link>
            <Link to="/offers" className="hover:text-brand-maroon transition">Exclusive Offers</Link>
            <Link to="/contact" className="hover:text-brand-maroon transition">Contact Head Office</Link>
          </nav>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-maroon">Customer Care</p>
          <p className="mt-4 text-xs text-slate-600">support@lakshmiclub.com</p>
          <p className="mt-1 text-xs text-slate-600 font-semibold">+91 22 1234 5678 / 1800-200-LAKSHMI</p>
          <p className="mt-4 text-xs text-slate-600">
            Heritage Tower, Nariman Point, Mumbai, Maharashtra - 400021
          </p>
        </div>
      </div>
      <div className="border-t border-brand-gold/15 bg-white/95 py-4 text-center text-xs text-slate-500">
        © 2026 Lakshmi Membership Platform. All brand names (Apple, Samsung, Sony, LG, Daikin, Dyson, Tanishq) are trademarks of their respective owners.
      </div>
    </footer>
  )
}
