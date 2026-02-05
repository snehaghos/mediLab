'use client'

import { CheckCircle2, Users, Beaker, Award } from 'lucide-react'
import aboutData from '@/data/about.json'

export default function About() {
  return (
    <section id="about" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-16 text-center text-gray-900">{aboutData.title}</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 mb-12 md:mb-16 items-start">
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center">
            <img 
              src="/images/featureimg.jpg" 
              alt="About Medilab" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
         
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900">About Medilab</h3>
            <p className="text-sm md:text-base text-gray-700 mb-6 md:mb-8 leading-relaxed">
              {aboutData.description}
            </p>
            <ul className="space-y-4">
              {aboutData.features.map((feature) => (
                <li key={feature.id} className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#1977cc] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 md:p-12">
          {aboutData.stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="flex justify-center mb-4">
                {stat.id === 1 && <Users className="w-10 h-10 text-[#1977cc]" />}
                {stat.id === 2 && <Beaker className="w-10 h-10 text-[#1977cc]" />}
                {stat.id === 3 && <Award className="w-10 h-10 text-[#1977cc]" />}
                {stat.id === 4 && <Award className="w-10 h-10 text-[#1977cc]" />}
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
