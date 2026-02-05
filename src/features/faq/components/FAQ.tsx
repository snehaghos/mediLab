'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import faqData from '@/data/faq.json'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{faqData.title}</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {faqData.subtitle}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqData.faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === faq.id ? null : faq.id)}
                className="w-full px-6 py-4 flex justify-between items-center hover:bg-blue-50 transition"
              >
                <span className="font-semibold text-gray-900 text-left text-base">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#1977cc] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === faq.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === faq.id && (
                <div className="px-6 pb-4 border-t border-gray-100 text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
