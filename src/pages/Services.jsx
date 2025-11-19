import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const services = [
  { title: 'Emergency Care', desc: '24/7 advanced emergency unit with triage, trauma care and ACLS-certified team.', image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Diagnostics', desc: 'MRI, CT, Digital X-ray, Ultrasound, Pathology labs with fast reporting.', image: 'https://images.unsplash.com/photo-1554734867-bf3c00a49371?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFbWVyZ2VuY3klMjBDYXJlfGVufDB8MHx8fDE3NjM1NjgyNzB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { title: 'Surgery', desc: 'Modular OTs with minimally-invasive and robotic-assisted procedures.', image: 'https://images.unsplash.com/photo-1554734867-bf3c00a49371?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFbWVyZ2VuY3klMjBDYXJlfGVufDB8MHx8fDE3NjM1NjgyNzB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { title: 'Pharmacy', desc: '24x7 in-house pharmacy with quality-assured medicines and counseling.', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop' },
  { title: 'ICU & NICU', desc: 'Dedicated ICUs and neonatal intensive care with continuous monitoring.', image: 'https://images.unsplash.com/photo-1554734867-bf3c00a49371?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFbWVyZ2VuY3klMjBDYXJlfGVufDB8MHx8fDE3NjM1NjgyNzB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
]

export default function Services() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl md:text-4xl font-semibold text-white">Services & Treatments</h1>
        <p className="mt-2 text-slate-400">Comprehensive medical services designed around your needs.</p>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-slate-900/70 border border-white/10 rounded-xl overflow-hidden">
              <div className="aspect-[16/9] bg-slate-800">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-white font-medium">{s.title}</h3>
                <p className="text-sm text-slate-300 mt-2">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
