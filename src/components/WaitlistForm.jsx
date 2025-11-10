import { useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function WaitlistForm() {
  const [form, setForm] = useState({ name: '', email: '', mission_interest: '' })
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus({ state: 'loading', message: 'Submitting...' })
    try {
      const res = await fetch(`${API_BASE}/api/waitlist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Failed to join waitlist')
      setStatus({ state: 'success', message: 'You\'re on the list! We\'ll be in touch soon.' })
      setForm({ name: '', email: '', mission_interest: '' })
    } catch (err) {
      setStatus({ state: 'error', message: err.message || 'Something went wrong' })
    }
  }

  return (
    <div className="w-full max-w-xl bg-white/10 backdrop-blur rounded-2xl border border-white/10 p-6 md:p-8 shadow-xl">
      <h3 className="text-white text-2xl md:text-3xl font-semibold mb-4">Join the waitlist</h3>
      <p className="text-violet-100/80 mb-6">Be among the first to experience civilian spaceflight. Limited seats per mission.</p>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm text-white/80 mb-1" htmlFor="name">Full name</label>
          <input id="name" name="name" value={form.name} onChange={onChange} required placeholder="Alex Starborn" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/60" />
        </div>
        <div>
          <label className="block text-sm text-white/80 mb-1" htmlFor="email">Email</label>
          <input id="email" type="email" name="email" value={form.email} onChange={onChange} required placeholder="you@galaxy.com" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/60" />
        </div>
        <div>
          <label className="block text-sm text-white/80 mb-1" htmlFor="mission_interest">What excites you?</label>
          <input id="mission_interest" name="mission_interest" value={form.mission_interest} onChange={onChange} placeholder="Orbital stay, lunar flyby, zero-g play..." className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/60" />
        </div>
        <button type="submit" disabled={status.state==='loading'} className="w-full inline-flex items-center justify-center rounded-lg bg-fuchsia-500 hover:bg-fuchsia-400 disabled:opacity-60 text-white font-medium py-3 transition">
          {status.state==='loading' ? 'Submitting…' : 'Join waitlist'}
        </button>
        {status.state !== 'idle' && (
          <p className={`text-sm ${status.state==='success' ? 'text-emerald-300' : status.state==='error' ? 'text-rose-300' : 'text-violet-200'}`}>{status.message}</p>
        )}
      </form>
    </div>
  )
}
