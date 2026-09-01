import { requireRoleLayout } from '@/lib/server/guards'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  requireRoleLayout(['CEO', 'Manager'])
  return <section>{children}</section>
}
