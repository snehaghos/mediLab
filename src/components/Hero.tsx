'use client'

import { BarChart3, Gem, Briefcase } from 'lucide-react'
import heroData from '@/data/hero.json'
import type { JSX } from 'react'

const iconMap: Record<number, JSX.Element> = {
  1: <BarChart3 className="w-8 h-8" />,
  2: <Gem className="w-8 h-8" />,
  3: <Briefcase className="w-8 h-8" />,
}
const backgroundUrl = '/images/herobg.jpg'

export default function Hero() {
  return (
    <section className="relative py-16 px-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-visible min-h-screen flex items-center">
      <div
        className="absolute inset-0 opacity-35 pointer-events-none"
        style={{
          backgroundImage: `url(${backgroundUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-8xl mx-auto px-6 relative z-10 w-full ">
        <div className="pe-10">
          <h1 className="text-[52px] leading-tight font-extrabold text-gray-900 mb-2">
            {heroData.title}
          </h1>

          <p className="text-lg text-gray-600 mb-10 max-w-xl">
            {heroData.subtitle}
          </p>
        </div>
        <div className="flex  gap-8 h-[400px]">
          <div className="bg-[#1977cc] text-white p-10 rounded-lg w-[40%] ">
            <h3 className="text-3xl font-bold mb-6">
              {heroData.whyChoose.title}
            </h3>

            <p className="text-blue-100 leading-relaxed mb-8 text-base">
              {heroData.whyChoose.description}
            </p>

            <button className="bg-white text-[#1977cc] px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition">
              {heroData.whyChoose.buttonText}
            </button>
          </div>

          <div className=" flex items-center w-[60%]">
            <div className="grid grid-cols-3 gap-4 h-[300px]">
              {heroData.features.map((feature) => (
                <div
                  key={feature.id}
                  className="bg-white/60 border border-gray-100 rounded-lg p-6 shadow-md hover:shadow-lg transition text-center"
                >
                  <div className="flex justify-center text-[#1977cc] mb-4">
                    {iconMap[feature.id]}
                  </div>

                  <h4 className="font-bold text-sm text-gray-900 mb-2 leading-snug">
                    {feature.title}
                  </h4>

                  <p className="text-xs text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
