import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Sparkles, ShieldCheck, ArrowRight, UserCheck, CheckCircle2, Lock, Smartphone } from 'lucide-react'
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
    <div className="min-h-screen bg-[#0B0F19] px-4 py-16 text-slate-100 sm:px-6 lg:px-8 radial-mesh">
      <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-[#131B2E]/90 p-8 sm:p-10 shadow-2xl backdrop-blur-xl">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1 text-xs font-semibold tracking-wider text-amber-300">
            <UserCheck className="h-3.5 w-3.5 text-amber-400" />
            <span>Browser-Based Member Onboarding &amp; e-KYC</span>
          </div>
          <h1 className="text-3xl font-extrabold sm:text-4xl text-white tracking-tight">
            Open Your Auto-Savings Fund
          </h1>
          <p className="text-xs sm:text-sm text-slate-300">
            One account, any device. Save a little every day and own appliances interest-free.
          </p>
        </div>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          {/* Personal Info Grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1">
                First Name
              </label>
              <input
                type="text"
                value={form.firstName}
                onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                placeholder="Priya"
                className="w-full rounded-xl border border-white/10 bg-[#0B0F19] px-4 py-2.5 text-xs text-white outline-none focus:border-amber-400"
                required
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1">
                Last Name
              </label>
              <input
                type="text"
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                placeholder="Sundaram"
                className="w-full rounded-xl border border-white/10 bg-[#0B0F19] px-4 py-2.5 text-xs text-white outline-none focus:border-amber-400"
                required
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1">
                Email Address
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="priya.sundaram@gmail.com"
                className="w-full rounded-xl border border-white/10 bg-[#0B0F19] px-4 py-2.5 text-xs text-white outline-none focus:border-amber-400"
                required
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1">
                Mobile Number (for UPI AutoPay)
              </label>
              <div className="flex gap-2">
                <input
                  type="tel"
                  value={form.mobile}
                  onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                  placeholder="98201 44521"
                  className="flex-1 rounded-xl border border-white/10 bg-[#0B0F19] px-4 py-2.5 text-xs text-white outline-none focus:border-amber-400"
                  required
                />
                <button
                  type="button"
                  onClick={handleSendOtp}
                  className="rounded-xl bg-amber-500/20 border border-amber-500/40 px-3 py-2 text-xs font-bold text-amber-300 hover:bg-amber-500/30 cursor-pointer"
                >
                  {otpSent ? 'Resend' : 'Send OTP'}
                </button>
              </div>
            </div>
          </div>

          {/* OTP Input Simulation */}
          {otpSent && (
            <div className="rounded-2xl bg-amber-500/10 border border-amber-500/30 p-4 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-amber-300 flex items-center gap-1.5">
                  <Smartphone className="h-4 w-4" /> Enter 4-Digit DLT SMS OTP
                </span>
                <span className="text-[11px] text-slate-400 font-mono">Demo OTP: 8842</span>
              </div>
              <input
                type="text"
                value={otpCode}
                onChange={(e) => setOtpCode(e.target.value)}
                placeholder="8842"
                className="w-full rounded-xl border border-amber-500/40 bg-[#0B0F19] px-4 py-2 text-sm font-mono font-bold text-white tracking-widest text-center"
              />
            </div>
          )}

          {/* In-Browser e-KYC Verification */}
          <div className="rounded-2xl bg-[#0B0F19] p-5 border border-white/5 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              PAN / Aadhaar e-KYC in Browser (Optional Now, Required Before Dispatch)
            </span>
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className="text-[11px] text-slate-400 block mb-1">PAN Card Number</label>
                <input
                  type="text"
                  value={form.panNumber}
                  onChange={(e) => setForm({ ...form, panNumber: e.target.value.toUpperCase() })}
                  placeholder="ABCDE1234F"
                  className="w-full rounded-xl border border-white/10 bg-[#131B2E] px-3 py-2 text-xs font-mono uppercase text-white"
                />
              </div>
              <div>
                <label className="text-[11px] text-slate-400 block mb-1">Aadhaar Last 4 Digits</label>
                <input
                  type="text"
                  maxLength={4}
                  value={form.aadhaarLast4}
                  onChange={(e) => setForm({ ...form, aadhaarLast4: e.target.value })}
                  placeholder="8820"
                  className="w-full rounded-xl border border-white/10 bg-[#131B2E] px-3 py-2 text-xs font-mono text-white"
                />
              </div>
            </div>
          </div>

          {/* Auto-Save Mandate Preference */}
          <div className="rounded-2xl bg-[#0B0F19] p-5 border border-white/5 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
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
                      ? 'border-amber-400 bg-amber-500/15 text-white shadow-md'
                      : 'border-white/10 bg-[#131B2E] text-slate-400'
                  }`}
                >
                  <div className="text-xs font-bold text-white">{item.label}</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">{item.sub}</div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1">
              Account Password
            </label>
            <input
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              placeholder="••••••••••••"
              className="w-full rounded-xl border border-white/10 bg-[#0B0F19] px-4 py-2.5 text-xs text-white outline-none focus:border-amber-400"
              required
            />
          </div>

          {error && (
            <div className="rounded-xl bg-rose-500/10 border border-rose-500/30 px-4 py-2.5 text-xs text-rose-300">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 py-3.5 text-xs font-bold uppercase tracking-wider text-black shadow-lg shadow-orange-500/30 hover:from-amber-400 hover:to-orange-400 transition cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Activate Auto-Save &amp; Complete Registration</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-slate-400">
          Already have an account?{' '}
          <Link to="/login" className="text-amber-400 font-semibold hover:underline">
            Sign In Here
          </Link>
        </p>
      </div>
    </div>
  )
}
