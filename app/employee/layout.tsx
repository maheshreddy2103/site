import { requireRoleLayout } from '@/lib/server/guards'

export default function EmployeeLayout({ children }: { children: React.ReactNode }) {
  requireRoleLayout(['Customer Acquisition Agent', 'Customer Support Executive', 'Collection Agent', 'Accountant', 'Finance Manager', 'Marketing Manager', 'Product Manager', 'Inventory Manager', 'Warehouse Executive', 'HR Manager', 'HR Executive', 'Compliance Officer', 'IT/System Administrator', 'General Manager', 'Branch Manager', 'Director / Senior Management', 'CEO'])
  return <section>{children}</section>
}
