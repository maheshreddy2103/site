import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-brand-gold/10 bg-brand-maroon/5 text-slate-700">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 lg:px-8 lg:grid-cols-4">
        <div>
          <p className="text-lg font-semibold text-navy">[BRAND NAME]</p>
          <p className="mt-3 text-sm text-slate-600">Building transparent membership access for premium products with trust and steady progress.</p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-maroon">Company</p>
          <nav className="mt-4 space-y-3 text-sm text-slate-600">
            <Link href="/about">About Us</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms & Conditions</Link>
          </nav>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-maroon">Support</p>
          <nav className="mt-4 space-y-3 text-sm text-slate-600">
            <Link href="/support">Customer Support</Link>
            <Link href="/faq">FAQs</Link>
            <Link href="/contact">Contact Us</Link>
          </nav>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-maroon">Contact</p>
          <p className="mt-4 text-sm text-slate-600">help@brand.com</p>
          <p className="text-sm text-slate-600">+91 22 1234 5678</p>
          <p className="mt-4 text-sm text-slate-600">123 Heritage Lane, Mumbai</p>
        </div>
      </div>
      <div className="border-t border-brand-gold/10 bg-white/95 py-4 text-center text-sm text-slate-500">
        © 2026 [BRAND NAME]. All rights reserved.
      </div>
    </footer>
  )
}
