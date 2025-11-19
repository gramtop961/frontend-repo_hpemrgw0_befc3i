export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-white/10 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h4 className="text-white font-semibold mb-3">BlueCare Hospital</h4>
          <p className="text-sm text-slate-400">A modern, patient-first healthcare and research center providing comprehensive care with compassion.</p>
        </div>
        <div>
          <h5 className="text-white font-medium mb-3">Quick Links</h5>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/departments" className="hover:text-white">Departments</a></li>
            <li><a href="/doctors" className="hover:text-white">Doctors</a></li>
            <li><a href="/services" className="hover:text-white">Services</a></li>
            <li><a href="/appointment" className="hover:text-white">Book Appointment</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-medium mb-3">Contact</h5>
          <ul className="space-y-2 text-sm">
            <li>123 Blue Street, Health City</li>
            <li>+1 (800) 123-4567</li>
            <li>emergency@bluecare.com</li>
            <li>24/7 Emergency: +1 (800) 999-0000</li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-medium mb-3">Working Hours</h5>
          <ul className="space-y-2 text-sm">
            <li>Mon - Fri: 8:00 AM - 8:00 PM</li>
            <li>Sat: 9:00 AM - 5:00 PM</li>
            <li>Sun: Emergency Only</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-slate-500">© {new Date().getFullYear()} BlueCare Hospital. All rights reserved.</div>
    </footer>
  )
}
