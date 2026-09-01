import { requireRoleLayout } from '@/lib/server/guards'

export default function SalesLayout({ children }: { children: React.ReactNode }) {
  requireRoleLayout(['Sales Manager', 'Customer Acquisition Agent', 'CEO'])
  return <section>{children}</section>
}
