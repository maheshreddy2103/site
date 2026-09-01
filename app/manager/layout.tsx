import { requireRoleLayout } from '@/lib/server/guards'

export default function ManagerLayout({ children }: { children: React.ReactNode }) {
  requireRoleLayout(['Manager', 'CEO'])
  return <section>{children}</section>
}
