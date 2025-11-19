import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { DepartmentsGrid } from '../components/Sections'

export default function Departments() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl md:text-4xl font-semibold text-white mb-6">Departments</h1>
        <p className="max-w-3xl">Explore our specialized departments offering comprehensive care across a wide range of medical fields.</p>
        <div className="mt-8">
          <DepartmentsGrid />
        </div>
      </main>
      <Footer />
    </div>
  )
}
