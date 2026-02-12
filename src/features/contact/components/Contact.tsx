 

import React from "react"
import { useState } from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'
import contactData from '@/data/contact.json'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{contactData.title}</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {contactData.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white border border-gray-200 p-8 rounded-lg text-center hover:shadow-lg transition duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-lg mb-4">
              <MapPin className="w-8 h-8 text-[#1977cc]" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Location</h3>
            <p className="text-gray-600 text-sm">{contactData.contactInfo.address}</p>
          </div>

          <div className="bg-white border border-gray-200 p-8 rounded-lg text-center hover:shadow-lg transition duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-lg mb-4">
              <Phone className="w-8 h-8 text-[#1977cc]" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Call Us</h3>
            <p className="text-gray-600 text-sm">{contactData.contactInfo.phone}</p>
          </div>

          <div className="bg-white border border-gray-200 p-8 rounded-lg text-center hover:shadow-lg transition duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-lg mb-4">
              <Mail className="w-8 h-8 text-[#1977cc]" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-600 text-sm">{contactData.contactInfo.email}</p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto bg-white border border-gray-200 p-8 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-900 font-semibold mb-2 text-sm">
                  {contactData.formFields[0].label}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1977cc] focus:ring-1 focus:ring-[#1977cc]"
                  placeholder={contactData.formFields[0].placeholder}
                />
              </div>

              <div>
                <label className="block text-gray-900 font-semibold mb-2 text-sm">
                  {contactData.formFields[1].label}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1977cc] focus:ring-1 focus:ring-[#1977cc]"
                  placeholder={contactData.formFields[1].placeholder}
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-900 font-semibold mb-2 text-sm">
                {contactData.formFields[2].label}
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1977cc] focus:ring-1 focus:ring-[#1977cc]"
                placeholder={contactData.formFields[2].placeholder}
              />
            </div>

            <div>
              <label className="block text-gray-900 font-semibold mb-2 text-sm">
                {contactData.formFields[3].label}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1977cc] focus:ring-1 focus:ring-[#1977cc] resize-none"
                placeholder={contactData.formFields[3].placeholder}
              />
            </div>

            {isSubmitted && (
              <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg text-sm font-medium">
                ✓ {contactData.successMessage}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-[#1977cc] text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition duration-300"
            >
              {contactData.submitButtonText}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

