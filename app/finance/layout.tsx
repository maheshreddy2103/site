import { requireRoleLayout } from '@/lib/server/guards'

export default function FinanceLayout({ children }: { children: React.ReactNode }) {
  requireRoleLayout(['Finance Manager', 'Accountant', 'CEO'])
  return <section>{children}</section>
}
