import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function LogoutButton() {
  const { logout } = useAuth()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate('/login')
  }

  return (
    <button
      onClick={handleLogout}
      className="rounded-full border border-brand-maroon/30 px-4 py-2 text-sm font-medium text-brand-maroon transition hover:bg-brand-maroon hover:text-white"
    >
      Sign out
    </button>
  )
}

