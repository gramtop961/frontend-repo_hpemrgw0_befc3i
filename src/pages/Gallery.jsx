import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'

const images = [
  'https://images.unsplash.com/photo-1580281657527-47bcfd65f1b9?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1578496781985-452d4a9bde6b?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1584017911766-d451b5aeedbc?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1581091014534-78c134e0bde5?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1200&auto=format&fit=crop',
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl md:text-4xl font-semibold text-white">Photo Gallery</h1>
        <p className="mt-2 text-slate-400">A glimpse of our facilities and patient spaces.</p>

        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <button key={i} onClick={() => setLightbox(src)} className="group relative overflow-hidden rounded-lg">
              <img src={src} alt="Hospital" className="w-full h-48 object-cover group-hover:scale-[1.03] transition-transform" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20" />
            </button>
          ))}
        </div>

        {lightbox && (
          <div className="fixed inset-0 bg-black/80 z-50 grid place-items-center p-6" onClick={() => setLightbox(null)}>
            <img src={lightbox} alt="Preview" className="max-w-5xl w-full max-h-[85vh] object-contain rounded-lg" />
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
