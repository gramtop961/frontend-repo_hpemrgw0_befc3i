import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function DoctorDetail() {
  // Static example for optional enhancement
  const doctor = {
    name: 'Dr. Emily Carter',
    specialization: 'Senior Cardiologist',
    bio: 'Dr. Carter has over 12 years of experience in interventional cardiology with a focus on minimally invasive procedures and preventive care.',
    photo: 'https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=800&auto=format&fit=crop',
    achievements: ['FACC', 'Published 20+ research papers', 'Led 500+ successful procedures'],
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1 bg-slate-900/70 border border-white/10 rounded-xl overflow-hidden">
            <img src={doctor.photo} alt={doctor.name} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h1 className="text-2xl text-white font-semibold">{doctor.name}</h1>
              <p className="text-teal-300">{doctor.specialization}</p>
              <a href="/appointment" className="mt-4 inline-block bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md text-sm">Book Appointment</a>
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="bg-slate-900/70 border border-white/10 rounded-xl p-6">
              <h2 className="text-white font-medium">About</h2>
              <p className="text-sm mt-2">{doctor.bio}</p>
              <h3 className="mt-6 text-white font-medium">Achievements</h3>
              <ul className="mt-2 text-sm list-disc list-inside">
                {doctor.achievements.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
