import Link from 'next/link'

export default function PageHeader({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-[2rem] border border-brand-gold/20 bg-white p-8 shadow-sm">
      <p className="text-sm uppercase tracking-[0.3em] text-brand-maroon">{title}</p>
      <h1 className="mt-4 text-4xl font-serif font-semibold text-navy">{description}</h1>
      <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-600">
        <Link href="/" className="underline">Home</Link>
        <span>/</span>
        <span>{title}</span>
      </div>
    </div>
  )
}
