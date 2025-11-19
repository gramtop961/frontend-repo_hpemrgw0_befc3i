import { HeartPulse, Baby, Brain, Bone, Hospital, ShieldCheck, Syringe, Microscope, Activity, Pill, Ambulance, Stethoscope } from 'lucide-react'

export function ServicesPreview() {
  const services = [
    { icon: Ambulance, title: 'Emergency Care', desc: '24/7 emergency and trauma response with advanced life support.' },
    { icon: Microscope, title: 'Diagnostics', desc: 'Comprehensive imaging and laboratory services with quick turnaround.' },
    { icon: Activity, title: 'Surgery', desc: 'Minimally invasive and open surgeries across specialties.' },
    { icon: Pill, title: 'Pharmacy', desc: 'In-house pharmacy with authentic medicines and counseling.' },
    { icon: Baby, title: 'NICU', desc: 'Specialized neonatal intensive care for premature/newborns.' },
    { icon: Hospital, title: 'ICU', desc: 'State-of-the-art intensive care units with round-the-clock monitoring.' },
  ]
  return (
    <section className="py-16 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">Our Key Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-slate-900/70 border border-white/10 rounded-xl p-6 hover:border-blue-500/40 transition group">
              <s.icon className="h-8 w-8 text-teal-300" />
              <h3 className="mt-4 text-white font-medium">{s.title}</h3>
              <p className="text-sm text-slate-300 mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function WhyChooseUs() {
  const points = [
    { icon: ShieldCheck, title: 'Trusted & Accredited', desc: 'Internationally recognized quality standards and safety protocols.' },
    { icon: Stethoscope, title: 'Top Specialists', desc: 'Highly experienced doctors with multi-disciplinary expertise.' },
    { icon: HeartPulse, title: 'Patient-First', desc: 'Personalized care plans and compassionate support.' },
  ]
  return (
    <section className="py-16 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8">Why Choose BlueCare</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {points.map((p) => (
            <div key={p.title} className="bg-slate-900/70 border border-white/10 rounded-xl p-6">
              <p.icon className="h-8 w-8 text-teal-300" />
              <h3 className="mt-4 text-white font-medium">{p.title}</h3>
              <p className="text-sm text-slate-300 mt-2">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function HealthPackages() {
  const packages = [
    { name: 'Basic Health Check', price: '$99', includes: ['CBC', 'Blood Sugar', 'Urine Routine', 'BP & BMI'] },
    { name: 'Executive Wellness', price: '$249', includes: ['CBC', 'Lipid Profile', 'Thyroid', 'ECG', 'Chest X-Ray'] },
    { name: 'Cardiac Care', price: '$199', includes: ['ECG', '2D Echo', 'TMT', 'Cardiology Consult'] },
  ]
  return (
    <section className="py-16 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Health Packages</h2>
          <a className="text-sm text-teal-300 hover:text-white" href="#">View all</a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((p) => (
            <div key={p.name} className="bg-slate-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-white font-medium">{p.name}</h3>
              <p className="text-teal-300 text-2xl font-semibold mt-2">{p.price}</p>
              <ul className="mt-4 text-sm text-slate-300 space-y-1">
                {p.includes.map((i) => (
                  <li key={i}>• {i}</li>
                ))}
              </ul>
              <button className="mt-6 w-full bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-md text-sm">Book Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function DepartmentsGrid() {
  const departments = [
    { icon: HeartPulse, title: 'Cardiology', desc: 'Heart and vascular care' },
    { icon: Bone, title: 'Orthopedics', desc: 'Bones, joints & spine' },
    { icon: Brain, title: 'Neurology', desc: 'Brain & nervous system' },
    { icon: Baby, title: 'Pediatrics', desc: 'Children’s health' },
    { icon: Syringe, title: 'Anesthesiology', desc: 'Pain & surgical anesthesia' },
    { icon: Hospital, title: 'General Medicine', desc: 'Comprehensive care' },
  ]

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {departments.map((d) => (
        <div key={d.title} className="bg-slate-900/70 border border-white/10 rounded-xl p-6 hover:border-teal-400/40 transition">
          <d.icon className="h-8 w-8 text-teal-300" />
          <h3 className="mt-4 text-white font-medium">{d.title}</h3>
          <p className="text-sm text-slate-300 mt-2">{d.desc}</p>
        </div>
      ))}
    </div>
  )
}
