import { useState } from 'react'
import { Menu, X, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="bg-[#1977cc] text-white py-3 text-xs md:text-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+1 5589 55488 55</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>contact@example.com</span>
            </div>
          </div>
          <div className="flex gap-3 md:gap-4">
            <a href="#" className="hover:text-blue-100 transition"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="hover:text-blue-100 transition"><Twitter className="w-4 h-4" /></a>
            <a href="#" className="hover:text-blue-100 transition"><Linkedin className="w-4 h-4" /></a>
            <a href="#" className="hover:text-blue-100 transition"><Instagram className="w-4 h-4" /></a>
          </div>
        </div>
      </div>

      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#1977cc] rounded-lg flex items-center justify-center text-white font-bold">
              M
            </div>
            <span className="text-xl font-bold text-gray-900">Medilab</span>
          </div>

          <nav className="hidden md:flex gap-8 items-center">
            <a href="#" className="text-gray-700 hover:text-[#1977cc] font-medium transition">Home</a>
            <a href="#about" className="text-gray-700 hover:text-[#1977cc] font-medium transition">About</a>
            <a href="#services" className="text-gray-700 hover:text-[#1977cc] font-medium transition">Services</a>
            <a href="#departments" className="text-gray-700 hover:text-[#1977cc] font-medium transition">Departments</a>
            <a href="#doctors" className="text-gray-700 hover:text-[#1977cc] font-medium transition">Doctors</a>
            <a href="#contact" className="text-gray-700 hover:text-[#1977cc] font-medium transition">Contact</a>
            <button className="bg-[#1977cc] text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium transition">
              Make an Appointment
            </button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4 px-6">
            <nav className="flex flex-col gap-4">
              <a href="#" className="text-gray-700 hover:text-[#1977cc] font-medium transition">Home</a>
              <a href="#about" className="text-gray-700 hover:text-[#1977cc] font-medium transition">About</a>
              <a href="#services" className="text-gray-700 hover:text-[#1977cc] font-medium transition">Services</a>
              <a href="#departments" className="text-gray-700 hover:text-[#1977cc] font-medium transition">Departments</a>
              <a href="#doctors" className="text-gray-700 hover:text-[#1977cc] font-medium transition">Doctors</a>
              <a href="#contact" className="text-gray-700 hover:text-[#1977cc] font-medium transition">Contact</a>
              <button className="bg-[#1977cc] text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium w-full transition">
                Make an Appointment
              </button>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
