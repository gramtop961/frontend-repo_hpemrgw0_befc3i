import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl md:text-4xl font-semibold text-white">About BlueCare Hospital</h1>
        <p className="mt-4 max-w-3xl">We are a next-generation healthcare and research center committed to delivering compassionate, evidence-based care. Our integrated approach brings together leading specialists, advanced technology, and a healing environment.</p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="bg-slate-900/70 border border-white/10 rounded-xl p-6">
            <h3 className="text-white font-medium">Mission</h3>
            <p className="text-sm mt-2">To provide world-class, patient-centered healthcare accessible to all with empathy and excellence.</p>
          </div>
          <div className="bg-slate-900/70 border border-white/10 rounded-xl p-6">
            <h3 className="text-white font-medium">Vision</h3>
            <p className="text-sm mt-2">To be a global leader in healthcare, research, and medical education.</p>
          </div>
          <div className="bg-slate-900/70 border border-white/10 rounded-xl p-6">
            <h3 className="text-white font-medium">Values</h3>
            <p className="text-sm mt-2">Compassion, Integrity, Innovation, Teamwork, and Patient Safety.</p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl text-white font-semibold">Awards & Certifications</h2>
          <ul className="mt-4 grid md:grid-cols-2 gap-4 text-sm">
            <li className="bg-slate-900/70 border border-white/10 rounded-lg p-4">Joint Commission International (JCI) accredited</li>
            <li className="bg-slate-900/70 border border-white/10 rounded-lg p-4">ISO 9001:2015 Quality Management</li>
            <li className="bg-slate-900/70 border border-white/10 rounded-lg p-4">National Healthcare Excellence Award 2024</li>
            <li className="bg-slate-900/70 border border-white/10 rounded-lg p-4">Best Patient Experience - Regional Award</li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl text-white font-semibold">Timeline</h2>
          <div className="mt-4 space-y-4">
            <div className="border-l border-teal-400 pl-4">
              <p className="text-teal-300 font-medium">2010</p>
              <p className="text-sm">Founded with 50 beds and 5 departments.</p>
            </div>
            <div className="border-l border-teal-400 pl-4">
              <p className="text-teal-300 font-medium">2015</p>
              <p className="text-sm">Expanded to 200 beds and launched research wing.</p>
            </div>
            <div className="border-l border-teal-400 pl-4">
              <p className="text-teal-300 font-medium">2023</p>
              <p className="text-sm">Upgraded to AI-enabled diagnostics and digital ICUs.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-xs text-slate-400">Tip: Replace any text or images by editing the content in your components. You can swap placeholder images with your own URLs.</div>
      </main>
      <Footer />
    </div>
  )
}
