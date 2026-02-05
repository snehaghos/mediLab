'use client'

import { Star, User } from 'lucide-react'
import testimonialsData from '@/data/testimonials.json'

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{testimonialsData.title}</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {testimonialsData.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonialsData.testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition duration-300"
            >
              {/* RATING STARS */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>

              {/* MESSAGE */}
              <p className="text-gray-600 text-sm mb-6 leading-relaxed h-20">
                {testimonial.message}
              </p>

              {/* AUTHOR */}
              <div className="flex gap-3 items-start">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center flex-shrink-0">
                  <User className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">{testimonial.name}</h4>
                  <p className="text-gray-600 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

