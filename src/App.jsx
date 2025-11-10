import { useState } from 'react'
import Spline from '@splinetool/react-spline'
import WaitlistForm from './components/WaitlistForm'
import { Rocket, Star, Shield, Calendar } from 'lucide-react'

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur hover:bg-white/10 transition">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-fuchsia-500/80 to-indigo-500/80 flex items-center justify-center mb-4">
        <Icon className="text-white" size={24} />
      </div>
      <h3 className="text-white text-lg font-semibold mb-1">{title}</h3>
      <p className="text-violet-100/80 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}

function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/er66D6jbuo0hIjmn/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        {/* Overlay content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-white/90 text-sm mb-6 backdrop-blur">
                <Star size={16} /> Civilian Spaceflight • 2026 Waitlist Open
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-sm">
                Make space your next destination
              </h1>
              <p className="mt-4 text-lg md:text-xl text-violet-100/90 max-w-2xl">
                From orbital getaways to lunar flybys — we design unforgettable journeys beyond Earth with the highest safety standards.
              </p>
              <div className="mt-8">
                <a href="#waitlist" className="inline-flex items-center gap-2 rounded-xl bg-fuchsia-500 hover:bg-fuchsia-400 text-white px-6 py-3 font-medium transition">
                  <Rocket size={18} /> Join the waitlist
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* gradient top overlay to improve contrast */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70" />
      </section>

      {/* Features */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-black to-[#0a0014]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <Feature icon={Shield} title="Safety first" desc="Led by veteran astronauts and aerospace engineers with rigorous training and systems redundancy." />
            <Feature icon={Rocket} title="Advanced vehicles" desc="Reusable launch systems with luxurious pressurized cabins and panoramic viewing domes." />
            <Feature icon={Calendar} title="Flexible itineraries" desc="Weekend zero‑g hops, orbital stays, or lunar flybys — tailor your mission to your dreams." />
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="relative py-20 md:py-28 bg-[#0a0014]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(217,70,239,0.15),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.12),transparent_40%)]" />
        <div className="relative container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white">Reserve your place among the stars</h2>
              <p className="mt-4 text-violet-100/90 max-w-xl">We review applicants on a rolling basis. Share your details and preferences and our mission advisors will reach out with next steps.</p>
              <ul className="mt-6 space-y-3 text-violet-100/80">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400" /> Medical screening and training included</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-indigo-400" /> Financing and flexible dates available</li>
              </ul>
            </div>
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-8">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/70">© {new Date().getFullYear()} Space Travel Co</p>
          <div className="flex items-center gap-6 text-white/70">
            <a href="#waitlist" className="hover:text-white transition">Join waitlist</a>
            <a href="#" className="hover:text-white transition">Safety</a>
            <a href="#" className="hover:text-white transition">Vehicles</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
