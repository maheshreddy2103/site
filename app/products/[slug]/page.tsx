import Link from 'next/link'

export function generateStaticParams() {
  return [
    { slug: 'TV-001' },
    { slug: 'PHONE-002' },
    { slug: 'FRIDGE-003' }
  ]
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = {
    sku: 'TV-001',
    name: 'Regal Smart LED TV',
    brand: 'Lakshmi Electronics',
    price: '₹12,000',
    warranty: '2 years',
    availability: 'In stock',
    description: 'Premium 43-inch smart LED television with premium audio, smart streaming and trusted retail support.',
    features: ['43-inch HD display', 'Smart streaming apps', 'Premium audio', '2-year warranty']
  }

  return (
    <div className="min-h-screen bg-cream py-16 text-navy">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="rounded-[2rem] border border-brand-gold/20 bg-white p-10 shadow-lg">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-brand-maroon">{product.brand}</p>
              <h1 className="mt-4 text-4xl font-serif font-semibold text-navy">{product.name}</h1>
              <p className="mt-4 text-slate-600">{product.description}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-brand-gold/15 bg-brand-cream p-5">
                  <p className="text-sm text-slate-600">Price</p>
                  <p className="mt-2 text-3xl font-semibold text-brand-maroon">{product.price}</p>
                </div>
                <div className="rounded-3xl border border-brand-gold/15 bg-brand-cream p-5">
                  <p className="text-sm text-slate-600">Warranty</p>
                  <p className="mt-2 text-xl font-semibold text-navy">{product.warranty}</p>
                </div>
              </div>
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-navy">Key features</h2>
                <ul className="mt-4 space-y-3 text-slate-600">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-brand-maroon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="rounded-[2rem] border border-brand-gold/15 bg-brand-maroon/5 p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-brand-maroon">Membership option</p>
              <p className="mt-4 text-xl font-semibold text-navy">₹1,000 / month</p>
              <p className="mt-2 text-slate-600">12-month membership schedule with transparent dues and reward qualification.</p>
              <div className="mt-8 space-y-4">
                <div className="rounded-3xl bg-white p-5 shadow-sm">
                  <p className="text-sm text-slate-600">Product availability</p>
                  <p className="mt-2 text-lg font-semibold text-navy">{product.availability}</p>
                </div>
                <div className="rounded-3xl bg-white p-5 shadow-sm">
                  <p className="text-sm text-slate-600">Retail partner</p>
                  <p className="mt-2 text-lg font-semibold text-navy">Lakshmi Central</p>
                </div>
              </div>
              <Link href="/signup" className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-brand-maroon px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#431523]">
                Start membership
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
