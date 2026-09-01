import { requireRoleLayout } from '@/lib/server/guards'

export default function CustomerLayout({ children }: { children: React.ReactNode }) {
  requireRoleLayout(['Customer'])
  return <section>{children}</section>
}
