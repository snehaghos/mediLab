'use client'

import { Heart, Stethoscope, Activity, Brain } from 'lucide-react'
import servicesData from '@/data/services.json'

const iconMap: { [key: string]: React.ReactNode } = {
  Heart: <Heart className="w-12 h-12" />,
  Stethoscope: <Stethoscope className="w-12 h-12" />,
  Activity: <Activity className="w-12 h-12" />,
  Brain: <Brain className="w-12 h-12" />,
}

export default function Services() {
  return (
    <section id="services" className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-center text-gray-900">{servicesData.title}</h2>
        <p className="text-sm md:text-base text-gray-600 text-center mb-8 md:mb-12 max-w-3xl mx-auto">
          {servicesData.subtitle}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.services.map((service) => (
            <div key={service.id} className="p-8 bg-white border border-gray-100 rounded-lg hover:shadow-lg hover:border-blue-200 transition group">
              <div className="text-[#1977cc] mb-4 group-hover:scale-110 transition">{iconMap[service.icon]}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
