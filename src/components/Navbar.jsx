import { Link, NavLink } from 'react-router-dom'
import { Menu, Phone, Stethoscope } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/departments', label: 'Departments' },
  { to: '/doctors', label: 'Doctors' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive ? 'text-white bg-blue-600' : 'text-slate-200 hover:text-white hover:bg-slate-700/60'
    }`

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-slate-900/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2">
            <div className="h-9 w-9 rounded-md bg-gradient-to-br from-blue-600 to-teal-500 grid place-items-center text-white shadow-lg">
              <Stethoscope className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <p className="text-white font-semibold">BlueCare Hospital</p>
              <p className="text-xs text-blue-200">Healthcare & Research Center</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={linkClass} end={item.to === '/'}>
                {item.label}
              </NavLink>
            ))}
            <Link to="/appointment" className="ml-2 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors">
              <Phone className="h-4 w-4" /> Book Appointment
            </Link>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md text-white hover:bg-white/10">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/90">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)} className={({isActive}) => `block px-3 py-2 rounded-md text-sm ${isActive ? 'bg-blue-600 text-white' : 'text-slate-200 hover:text-white hover:bg-slate-700/60'}` } end={item.to === '/'}>
                {item.label}
              </NavLink>
            ))}
            <Link to="/appointment" onClick={() => setOpen(false)} className="block mt-2 text-center bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-md">
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
