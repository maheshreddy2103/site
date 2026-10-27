import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { ShieldCheck, ArrowRight, UserCheck, Smartphone } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

export default function Signup() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    panNumber: '',
    aadhaarLast4: '',
    autoSaveFrequency: 'daily',
    autoSaveAmount: '50',
    password: ''
  })
  const [otpSent, setOtpSent] = useState(false)
  const [otpCode, setOtpCode] = useState('')
  const [error, setError] = useState('')
  const { signup } = useAuth()
  const navigate = useNavigate()

  function handleSendOtp() {
    if (!form.mobile || form.mobile.length < 10) {
      setError('Please provide a valid 10-digit mobile number to receive OTP.')
      return
    }
    setError('')
    setOtpSent(true)
    setOtpCode('8842')
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')

    if (!form.firstName || !form.lastName || !form.email || !form.mobile || !form.password) {
      setError('Please fill in all mandatory profile fields.')
      return
    }

    if (!otpSent) {
      setError('Please verify your mobile number with OTP first.')
      return
    }

    signup(form)
    navigate('/customer/dashboard')
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] px-4 py-16 text-slate-900 sm:px-6 lg:px-8 radial-mesh">
      <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-1 text-xs font-semibold tracking-wider text-amber-800 shadow-sm">
            <UserCheck className="h-3.5 w-3.5 text-amber-600" />
            <span>Browser-Based Member Onboarding &amp; e-KYC</span>
          </div>
          <h1 className="text-3xl font-extrabold sm:text-4xl text-slate-900 tracking-tight">
            Open Your Auto-Savings Fund
          </h1>
          <p className="text-xs sm:text-sm text-slate-600">
            One account, any device. Save a little every day and own appliances interest-free.
          </p>
        </div>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          {/* Personal Info Grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider block mb-1">
                First Name
              </label>
              <input
                type="text"
                value={form.firstName}
                onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                placeholder="Priya"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 outline-none focus:bg-white focus:border-indigo-500"
                required
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider block mb-1">
                Last Name
              </label>
              <input
                type="text"
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                placeholder="Sundaram"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 outline-none focus:bg-white focus:border-indigo-500"
                required
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider block mb-1">
                Email Address
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="priya.sundaram@gmail.com"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 outline-none focus:bg-white focus:border-indigo-500"
                required
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider block mb-1">
                Mobile Number (for UPI AutoPay)
              </label>
              <div className="flex gap-2">
                <input
                  type="tel"
                  value={form.mobile}
                  onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                  placeholder="98201 44521"
                  className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 outline-none focus:bg-white focus:border-indigo-500"
                  required
                />
                <button
                  type="button"
                  onClick={handleSendOtp}
                  className="rounded-xl bg-amber-50 border border-amber-200 px-3 py-2 text-xs font-bold text-amber-800 hover:bg-amber-100 cursor-pointer"
                >
                  {otpSent ? 'Resend' : 'Send OTP'}
                </button>
              </div>
            </div>
          </div>

          {/* OTP Input Simulation */}
          {otpSent && (
            <div className="rounded-2xl bg-amber-50 border border-amber-200 p-4 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-amber-800 flex items-center gap-1.5">
                  <Smartphone className="h-4 w-4" /> Enter 4-Digit DLT SMS OTP
                </span>
                <span className="text-[11px] text-slate-500 font-mono">Demo OTP: 8842</span>
              </div>
              <input
                type="text"
                value={otpCode}
                onChange={(e) => setOtpCode(e.target.value)}
                placeholder="8842"
                className="w-full rounded-xl border border-amber-300 bg-white px-4 py-2 text-sm font-mono font-bold text-slate-900 tracking-widest text-center"
              />
            </div>
          )}

          {/* In-Browser e-KYC Verification */}
          <div className="rounded-2xl bg-slate-50 p-5 border border-slate-200 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              PAN / Aadhaar e-KYC in Browser (Optional Now, Required Before Dispatch)
            </span>
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className="text-[11px] text-slate-500 block mb-1">PAN Card Number</label>
                <input
                  type="text"
                  value={form.panNumber}
                  onChange={(e) => setForm({ ...form, panNumber: e.target.value.toUpperCase() })}
                  placeholder="ABCDE1234F"
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-mono uppercase text-slate-900 placeholder-slate-400"
                />
              </div>
              <div>
                <label className="text-[11px] text-slate-500 block mb-1">Aadhaar Last 4 Digits</label>
                <input
                  type="text"
                  maxLength={4}
                  value={form.aadhaarLast4}
                  onChange={(e) => setForm({ ...form, aadhaarLast4: e.target.value })}
                  placeholder="8820"
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-mono text-slate-900 placeholder-slate-400"
                />
              </div>
            </div>
          </div>

          {/* Auto-Save Mandate Preference */}
          <div className="rounded-2xl bg-slate-50 p-5 border border-slate-200 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block">
              Set Up Initial Auto-Save Frequency (UPI AutoPay)
            </span>
            <div className="grid grid-cols-3 gap-2">
              {[
                { freq: 'daily', label: '₹50 / day', sub: 'Daily Habit' },
                { freq: 'weekly', label: '₹350 / week', sub: 'Weekly Steady' },
                { freq: 'monthly', label: '₹1,500 / month', sub: 'Monthly Anchor' }
              ].map((item) => (
                <button
                  key={item.freq}
                  type="button"
                  onClick={() => setForm({ ...form, autoSaveFrequency: item.freq })}
                  className={`rounded-xl p-2.5 text-center border transition cursor-pointer ${
                    form.autoSaveFrequency === item.freq
                      ? 'border-amber-400 bg-amber-50 text-amber-900 shadow-sm'
                      : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <div className="text-xs font-bold text-slate-900">{item.label}</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">{item.sub}</div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider block mb-1">
              Account Password
            </label>
            <input
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              placeholder="••••••••••••"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 outline-none focus:bg-white focus:border-indigo-500"
              required
            />
          </div>

          {error && (
            <div className="rounded-xl bg-rose-50 border border-rose-200 px-4 py-2.5 text-xs text-rose-700 font-medium">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:from-amber-600 hover:to-orange-600 transition cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Activate Auto-Save &amp; Complete Registration</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-slate-500">
          Already have an account?{' '}
          <Link to="/login" className="text-amber-600 font-semibold hover:underline">
            Sign In Here
          </Link>
        </p>
      </div>
    </div>
  )
}