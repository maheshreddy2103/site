import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Sparkles, ShieldCheck, ArrowRight, UserCheck } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

export default function Signup() {
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
  const { signup } = useAuth()
  const navigate = useNavigate()

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')

    if (!form.firstName || !form.lastName || !form.email || !form.password) {
      setError('Please fill in all required fields.')
      return
    }

    signup(form)
    navigate('/customer/dashboard')
  }

  return (
    <div className="min-h-screen bg-[#0B0F19] px-4 py-16 text-slate-100 sm:px-6 lg:px-8 radial-mesh">
      <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-[#131B2E]/80 p-8 sm:p-10 shadow-2xl backdrop-blur-xl">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-xs font-semibold tracking-wider text-emerald-400 mb-3">
            <UserCheck className="h-3.5 w-3.5 text-emerald-400" />
            <span>Membership Onboarding</span>
          </div>
          <h1 className="text-3xl font-extrabold sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-indigo-300">
            Create Your FinTech Membership Account
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-slate-400">
            Join thousands disciplined savers acquiring authentic flagship goods with zero markup.
          </p>
        </div>

        <form className="mt-10 grid gap-5 md:grid-cols-2" onSubmit={handleSubmit}>
          {[
            { label: 'First Name', name: 'firstName', type: 'text' },
            { label: 'Last Name', name: 'lastName', type: 'text' },
            { label: 'Email Address', name: 'email', type: 'email' },
            { label: 'Mobile Number', name: 'mobile', type: 'tel' },
            { label: 'Date of Birth', name: 'dateOfBirth', type: 'date' },
            { label: 'Delivery Address', name: 'address', type: 'text' },
            { label: 'City', name: 'city', type: 'text' },
            { label: 'State', name: 'state', type: 'text' },
            { label: 'Pincode (6 digits)', name: 'pincode', type: 'text' },
            { label: 'Nominee Name (Optional)', name: 'nomineeName', type: 'text' },
            { label: 'Nominee Relation (Optional)', name: 'nomineeRelation', type: 'text' },
            { label: 'Account Password', name: 'password', type: 'password' }
          ].map((field) => (
            <label key={field.name} className="block">
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1">
                {field.label}
              </span>
              <input
                type={field.type}
                value={form[field.name as keyof typeof form]}
                onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-[#0B0F19]/80 px-4 py-2.5 text-xs text-white placeholder-slate-500 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
                required={field.name !== 'nomineeName' && field.name !== 'nomineeRelation'}
              />
            </label>
          ))}

          {error && (
            <div className="col-span-full rounded-xl bg-rose-500/10 border border-rose-500/30 px-4 py-3 text-xs text-rose-300">
              {error}
            </div>
          )}

          <div className="col-span-full rounded-xl border border-white/10 bg-[#0B0F19]/60 p-4 text-xs text-slate-400">
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" required className="mt-0.5 h-4 w-4 rounded border-white/20 bg-slate-800 text-indigo-500" />
              <span>
                I agree to the transparent <Link to="/terms" className="text-indigo-400 underline">Terms &amp; Conditions</Link> and institutional <Link to="/privacy" className="text-indigo-400 underline">Privacy Protocols</Link>.
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="col-span-full rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 px-6 py-4 text-xs font-bold uppercase tracking-wider text-black shadow-[0_0_25px_rgba(16,185,129,0.35)] transition-all duration-200 hover:shadow-[0_0_35px_rgba(16,185,129,0.55)] cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Complete Registration &amp; Open Portfolio</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-slate-400">
          Already registered?{' '}
          <Link to="/login" className="text-indigo-400 font-semibold hover:underline">
            Member Sign In
          </Link>
        </p>
      </div>
    </div>
  )
}
