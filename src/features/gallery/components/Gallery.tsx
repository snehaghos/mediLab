'use client'

import { Search } from 'lucide-react'
import galleryData from '@/data/gallery.json'

export default function Gallery() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{galleryData.title}</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {galleryData.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {galleryData.images.map((item) => (
            <div
              key={item.id}
              className="relative h-56 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg overflow-hidden hover:shadow-xl transition duration-300 group cursor-pointer"
            >
              {/* IMAGE CONTENT */}
              <img 
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
              
              {/* PLACEHOLDER FALLBACK */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 via-blue-50 to-indigo-50">
                <div className="text-center">
                  <Search className="w-12 h-12 text-blue-300 mx-auto mb-2" />
                  <p className="text-blue-600 font-medium text-sm">{item.title}</p>
                </div>
              </div>

              {/* HOVER OVERLAY */}
              <div className="absolute inset-0 bg-black/50 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <h4 className="font-semibold text-base mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-200">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
