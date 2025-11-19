import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-slate-950/20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="py-16">
          <p className="text-teal-300 uppercase tracking-widest text-xs mb-4">Compassion • Innovation • Excellence</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">World-class care for every patient</h1>
          <p className="mt-6 text-lg text-blue-100 max-w-xl">From preventive health to complex surgeries, our specialists deliver exceptional outcomes with a human touch.</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/appointment" className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-md font-medium shadow">
              Book Appointment
            </Link>
            <a href="tel:+18009990000" className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-md font-medium">
              24/7 Emergency: +1 (800) 999-0000
            </a>
          </div>
        </div>
        <div className="hidden lg:block" />
      </div>
    </section>
  )
}
