import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const doctorOptions = [
  'Dr. Emily Carter - Cardiology',
  'Dr. James Howard - Orthopedics',
  'Dr. Aisha Khan - Neurology',
  'Dr. Lucas Silva - Pediatrics',
]

export default function Appointment() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', department: '', doctor: '', date: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // This is a static demo: normally you would POST this to your backend.
    // To integrate later: send JSON to your API and show success state on 200.
    console.log('Appointment form submitted', form)
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300">
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl md:text-4xl font-semibold text-white">Book an Appointment</h1>
        <p className="mt-2 text-slate-400">Choose your department, preferred doctor, and a convenient date. We’ll confirm via email/SMS.</p>

        {submitted ? (
          <div className="mt-8 bg-slate-900/70 border border-teal-500/30 rounded-xl p-6">
            <p className="text-teal-300 font-medium">Thank you! Your request has been received.</p>
            <p className="text-sm text-slate-400 mt-2">This is a demo. To enable real bookings, connect this form to your backend API. Include validation and email/SMS notifications.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 bg-slate-900/70 border border-white/10 rounded-xl p-6 grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm mb-1">Full Name</label>
              <input required name="name" value={form.name} onChange={handleChange} className="w-full bg-slate-950 border border-white/10 rounded-md px-3 py-2 text-white" placeholder="John Doe" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Email</label>
                <input required type="email" name="email" value={form.email} onChange={handleChange} className="w-full bg-slate-950 border border-white/10 rounded-md px-3 py-2 text-white" placeholder="john@email.com" />
              </div>
              <div>
                <label className="block text-sm mb-1">Phone</label>
                <input required name="phone" value={form.phone} onChange={handleChange} className="w-full bg-slate-950 border border-white/10 rounded-md px-3 py-2 text-white" placeholder="+1 800 123 4567" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Department</label>
                <select required name="department" value={form.department} onChange={handleChange} className="w-full bg-slate-950 border border-white/10 rounded-md px-3 py-2 text-white">
                  <option value="">Select</option>
                  <option>Cardiology</option>
                  <option>Orthopedics</option>
                  <option>Neurology</option>
                  <option>Pediatrics</option>
                  <option>General Medicine</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-1">Preferred Doctor</label>
                <select name="doctor" value={form.doctor} onChange={handleChange} className="w-full bg-slate-950 border border-white/10 rounded-md px-3 py-2 text-white">
                  <option value="">No preference</option>
                  {doctorOptions.map((d) => (
                    <option key={d}>{d}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Date</label>
                <input required type="date" name="date" value={form.date} onChange={handleChange} className="w-full bg-slate-950 border border-white/10 rounded-md px-3 py-2 text-white" />
              </div>
              <div>
                <label className="block text-sm mb-1">Message (optional)</label>
                <input name="message" value={form.message} onChange={handleChange} className="w-full bg-slate-950 border border-white/10 rounded-md px-3 py-2 text-white" placeholder="Symptoms or notes" />
              </div>
            </div>
            <button className="mt-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-md font-medium">Submit Request</button>
            <p className="text-xs text-slate-500">Note: This form is client-side only. To enable real submissions, connect it to your backend API, e.g., via a serverless function or FastAPI endpoint.</p>
          </form>
        )}
      </main>
      <Footer />
    </div>
  )
}
