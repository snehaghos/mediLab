'use client'

import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import doctorsData from '@/data/doctors.json'

export default function Doctors() {
  return (
    <section id="doctors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{doctorsData.title}</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {doctorsData.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {doctorsData.doctors.map((doctor) => (
            <div key={doctor.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
          
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 h-48 flex items-center justify-center overflow-hidden">
                <img 
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
                
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{doctor.name}</h3>
                <p className="text-[#1977cc] font-medium text-sm mb-3">{doctor.specialty}</p>
                <p className="text-gray-600 text-sm mb-4">{doctor.experience}</p>
                
                <div className="flex gap-2 justify-center">
                  <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#1977cc] hover:text-white transition">
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#1977cc] hover:text-white transition">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#1977cc] hover:text-white transition">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#1977cc] hover:text-white transition">
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
