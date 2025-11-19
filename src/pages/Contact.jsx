import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl md:text-4xl font-semibold text-white">Contact Us</h1>
        <p className="mt-2 text-slate-400">We’re here to help — for appointments, queries, or emergencies.</p>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div>
            <div className="bg-slate-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-white font-medium">Get in touch</h3>
              {sent ? (
                <div className="mt-4 text-teal-300">Thanks! We have received your message.</div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-4 grid grid-cols-1 gap-4">
                  <input required placeholder="Full Name" className="w-full bg-slate-950 border border-white/10 rounded-md px-3 py-2 text-white" />
                  <input required type="email" placeholder="Email" className="w-full bg-slate-950 border border-white/10 rounded-md px-3 py-2 text-white" />
                  <input placeholder="Phone" className="w-full bg-slate-950 border border-white/10 rounded-md px-3 py-2 text-white" />
                  <textarea required placeholder="Message" rows={4} className="w-full bg-slate-950 border border-white/10 rounded-md px-3 py-2 text-white" />
                  <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-md font-medium">Send Message</button>
                </form>
              )}
            </div>

            <div className="mt-6 bg-slate-900/70 border border-white/10 rounded-xl p-6 text-sm">
              <p className="text-white font-medium">Address</p>
              <p>123 Blue Street, Health City</p>
              <p className="mt-2 text-white font-medium">Phone</p>
              <p>+1 (800) 123-4567</p>
              <p className="mt-2 text-white font-medium">24/7 Emergency</p>
              <p>+1 (800) 999-0000</p>
              <p className="mt-2 text-white font-medium">Email</p>
              <p>contact@bluecare.com</p>
            </div>
          </div>
          <div>
            <div className="bg-slate-900/70 border border-white/10 rounded-xl overflow-hidden">
              <div className="aspect-[4/3] grid place-items-center text-slate-400">
                <p>Google Maps placeholder</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-xs text-slate-400">Tip: Replace the map placeholder with an embedded Google Map iframe. Replace contact details with your real info.</div>
      </main>
      <Footer />
    </div>
  )
}
