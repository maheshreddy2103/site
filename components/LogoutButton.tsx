'use client'

import { useRouter } from 'next/navigation'

export default function LogoutButton() {
  const router = useRouter()

  async function handleLogout() {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/login')
  }

  return (
    <button onClick={handleLogout} className="rounded-full border border-brand-maroon px-4 py-2 text-sm font-medium text-brand-maroon transition hover:bg-brand-maroon hover:text-white">
      Logout
    </button>
  )
}
