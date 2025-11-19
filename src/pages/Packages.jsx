import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Packages() {
  const packages = [
    { name: 'Basic Health Check', price: '$99', desc: 'Ideal for annual wellness', items: ['CBC', 'Blood Sugar', 'Urine Routine', 'BP & BMI'] },
    { name: 'Executive Wellness', price: '$249', desc: 'Comprehensive corporate package', items: ['CBC', 'Lipid Profile', 'Thyroid', 'ECG', 'Chest X-Ray'] },
    { name: 'Cardiac Care', price: '$199', desc: 'For heart health screening', items: ['ECG', '2D Echo', 'TMT', 'Cardiology Consult'] },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl md:text-4xl font-semibold text-white">Health Packages</h1>
        <p className="mt-2 text-slate-400">Curated packages for preventive care and early detection.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {packages.map((p) => (
            <div key={p.name} className="bg-slate-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-white font-medium">{p.name}</h3>
              <p className="text-teal-300 text-2xl font-semibold mt-1">{p.price}</p>
              <p className="text-sm text-slate-400 mt-1">{p.desc}</p>
              <ul className="mt-3 text-sm text-slate-300 space-y-1 list-disc list-inside">
                {p.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              <a href="/appointment" className="mt-4 inline-block bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md text-sm">Book Now</a>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
