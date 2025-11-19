import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const doctors = [
  { name: 'Dr. Emily Carter', specialization: 'Cardiologist', experience: '12 yrs', availability: 'Mon, Wed, Fri', photo: 'https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=800&auto=format&fit=crop' },
  { name: 'Dr. James Howard', specialization: 'Orthopedic Surgeon', experience: '15 yrs', availability: 'Tue, Thu, Sat', photo: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=800&auto=format&fit=crop' },
  { name: 'Dr. Aisha Khan', specialization: 'Neurologist', experience: '10 yrs', availability: 'Mon - Thu', photo: 'https://images.unsplash.com/photo-1550831108-b02424a62c39?q=80&w=800&auto=format&fit=crop' },
  { name: 'Dr. Lucas Silva', specialization: 'Pediatrician', experience: '8 yrs', availability: 'Mon - Sat', photo: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=800&auto=format&fit=crop' },
  { name: 'Dr. Sophia Lee', specialization: 'General Surgeon', experience: '11 yrs', availability: 'Tue - Fri', photo: 'https://images.unsplash.com/photo-1523246122360-181df7b1e002?q=80&w=800&auto=format&fit=crop' },
  { name: 'Dr. Michael Brown', specialization: 'Anesthesiologist', experience: '9 yrs', availability: 'Mon - Fri', photo: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=800&auto=format&fit=crop' },
]

export default function Doctors() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold text-white">Our Specialists</h1>
            <p className="mt-2 text-slate-400">Highly qualified doctors across major specialties.</p>
          </div>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((d) => (
            <div key={d.name} className="group bg-slate-900/70 border border-white/10 rounded-xl overflow-hidden hover:border-blue-500/40 transition">
              <div className="aspect-[4/3] bg-slate-800">
                <img src={d.photo} alt={d.name} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform" />
              </div>
              <div className="p-5">
                <p className="text-white font-medium">{d.name}</p>
                <p className="text-sm text-teal-300">{d.specialization}</p>
                <div className="mt-3 text-xs text-slate-400">Experience: {d.experience}</div>
                <div className="text-xs text-slate-400">Availability: {d.availability}</div>
                <a href="/appointment" className="mt-4 inline-block text-sm bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md">Book Appointment</a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-xs text-slate-400">Tip: Replace photos by updating the photo URLs. Ensure images are royalty-free or licensed.</div>
      </main>
      <Footer />
    </div>
  )
}
