'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function EmployeeSignupPage() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    password: '',
    departmentName: '',
    branchName: '',
    designation: '',
    reportingToEmail: ''
  })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const router = useRouter()

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')
    setSuccess('')

    const response = await fetch('/api/employee/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })

    const result = await response.json()
    if (response.ok) {
      setSuccess('Your employee request has been submitted for approval.')
      setForm({ firstName: '', lastName: '', email: '', mobile: '', password: '', departmentName: '', branchName: '', designation: '', reportingToEmail: '' })
    } else {
      setError(result.error || 'Failed to submit employee registration.')
    }
  }

  return (
    <div className="min-h-screen bg-cream px-4 py-12 text-navy sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-brand-gold/25 bg-white/90 p-8 shadow-lg shadow-brand-maroon/10">
        <h1 className="text-3xl font-semibold text-navy">Employee registration</h1>
        <p className="mt-2 text-sm text-slate-600">Register your employee profile. Approval is required before access is granted.</p>
        <form className="mt-8 grid gap-6 md:grid-cols-2" onSubmit={handleSubmit}>
          {[
            { label: 'First Name', name: 'firstName', type: 'text' },
            { label: 'Last Name', name: 'lastName', type: 'text' },
            { label: 'Email', name: 'email', type: 'email' },
            { label: 'Mobile', name: 'mobile', type: 'tel' },
            { label: 'Password', name: 'password', type: 'password' },
            { label: 'Department', name: 'departmentName', type: 'text' },
            { label: 'Branch', name: 'branchName', type: 'text' },
            { label: 'Designation', name: 'designation', type: 'text' },
            { label: 'Reporting Manager Email', name: 'reportingToEmail', type: 'email' }
          ].map((field) => (
            <label key={field.name} className="block">
              <span className="text-sm font-medium text-slate-700">{field.label}</span>
              <input
                type={field.type}
                value={form[field.name as keyof typeof form]}
                onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                className="mt-2 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-navy outline-none transition focus:border-brand-maroon focus:ring-2 focus:ring-brand-gold/30"
                required={field.name !== 'reportingToEmail'}
              />
            </label>
          ))}
          {error && <div className="col-span-full rounded-3xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>}
          {success && <div className="col-span-full rounded-3xl bg-green-50 px-4 py-3 text-sm text-green-700">{success}</div>}
          <button className="col-span-full rounded-full bg-brand-maroon px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#431523]">
            Submit registration
          </button>
        </form>
      </div>
    </div>
  )
}
