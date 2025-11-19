import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import { ServicesPreview, WhyChooseUs, HealthPackages, DepartmentsGrid } from '../components/Sections'

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main>
        <Hero />
        <section className="py-16 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ServicesPreview />
            <WhyChooseUs />
            <div className="mt-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">Departments</h2>
              <DepartmentsGrid />
            </div>
            <HealthPackages />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
