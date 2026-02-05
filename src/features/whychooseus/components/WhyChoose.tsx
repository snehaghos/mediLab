'use client'

import { Heart, Zap, Shield } from 'lucide-react'
import whyChooseData from '@/data/whychooseus.json'

const iconMap: { [key: string]: React.ReactNode } = {
  Heart: <Heart className="w-10 h-10" />,
  Zap: <Zap className="w-10 h-10" />,
  Shield: <Shield className="w-10 h-10" />,
}

export default function WhyChoose() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{whyChooseData.title}</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {whyChooseData.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {whyChooseData.features.map((feature) => (
            <div
              key={feature.id}
              className="p-8 bg-blue-50 border border-blue-100 rounded-lg hover:shadow-lg hover:border-blue-200 transition duration-300"
            >
              <div className="text-[#1977cc] mb-4 inline-flex items-center justify-center w-16 h-16 bg-white rounded-lg border border-blue-100">
                {iconMap[feature.icon]}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
          <p className="text-gray-700 leading-relaxed text-center text-base">
            {whyChooseData.bottomText}
          </p>
        </div>
      </div>
    </section>
  )
}
