'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SignupPage() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    dateOfBirth: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    nomineeName: '',
    nomineeRelation: '',
    password: ''
  })
  const [error, setError] = useState('')
  const router = useRouter()

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')

    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })

    if (response.ok) {
      router.push('/customer/dashboard')
    } else {
      const data = await response.json()
      setError(data.error || 'Signup failed')
    }
  }

  return (
    <div className="min-h-screen bg-cream px-4 py-12 text-navy sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-brand-gold/25 bg-white/90 p-8 shadow-lg shadow-brand-maroon/10">
        <h1 className="text-3xl font-semibold text-navy">Become a member</h1>
        <p className="mt-2 text-sm text-slate-600">Create your account and start your membership journey with clear EMI terms.</p>
        <form className="mt-8 grid gap-6 md:grid-cols-2" onSubmit={handleSubmit}>
          {[
            { label: 'First Name', name: 'firstName', type: 'text' },
            { label: 'Last Name', name: 'lastName', type: 'text' },
            { label: 'Email', name: 'email', type: 'email' },
            { label: 'Mobile', name: 'mobile', type: 'tel' },
            { label: 'Date of Birth', name: 'dateOfBirth', type: 'date' },
            { label: 'Address', name: 'address', type: 'text' },
            { label: 'City', name: 'city', type: 'text' },
            { label: 'State', name: 'state', type: 'text' },
            { label: 'Pincode', name: 'pincode', type: 'text' },
            { label: 'Nominee Name', name: 'nomineeName', type: 'text' },
            { label: 'Nominee Relation', name: 'nomineeRelation', type: 'text' },
            { label: 'Password', name: 'password', type: 'password' }
          ].map((field) => (
            <label key={field.name} className="block">
              <span className="text-sm font-medium text-slate-700">{field.label}</span>
              <input
                type={field.type}
                value={form[field.name as keyof typeof form]}
                onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                className="mt-2 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-navy outline-none transition focus:border-brand-maroon focus:ring-2 focus:ring-brand-gold/30"
                required={field.name !== 'nomineeName' && field.name !== 'nomineeRelation'}
              />
            </label>
          ))}
          {error && <div className="col-span-full rounded-3xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>}
          <div className="col-span-full rounded-3xl border border-brand-gold/20 bg-brand-cream p-5 text-sm text-slate-700">
            <label className="flex items-start gap-3">
              <input type="checkbox" required className="mt-1 h-4 w-4 rounded border-slate-300 text-brand-maroon" />
              <span>
                I agree to the <a href="/terms" className="text-brand-maroon underline">Terms & Conditions</a> and <a href="/privacy" className="text-brand-maroon underline">Privacy Policy</a>.
              </span>
            </label>
          </div>
          <button className="col-span-full rounded-full bg-brand-maroon px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#431523]">
            Create Account
          </button>
        </form>
      </div>
    </div>
  )
}
