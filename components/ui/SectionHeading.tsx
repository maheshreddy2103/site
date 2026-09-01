export default function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-8">
      <p className="text-sm uppercase tracking-[0.3em] text-brand-maroon">{title}</p>
      {subtitle && <p className="mt-3 text-2xl font-semibold text-navy">{subtitle}</p>}
    </div>
  )
}
