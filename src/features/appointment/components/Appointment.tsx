 

import React from "react"
import { useState } from 'react'
import appoint from '@/data/appointment.json'

export default function Appointment() {
  const [formData, setFormData] = useState({
    department: '',
    doctor: '',
    date: '',
    time: '',
    name: '',
    phone: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
    setFormData({
      department: '',
      doctor: '',
      date: '',
      time: '',
      name: '',
      phone: '',
      message: '',
    })
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{appoint.title}</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {appoint.subtitle}
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white border border-gray-200 p-8 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-900 font-semibold mb-2 text-sm">
                  {appoint.formFields[0].label}
                </label>
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1977cc] focus:ring-1 focus:ring-[#1977cc] bg-white"
                >
                  <option value="">{appoint.formFields[0].placeholder}</option>
                  {appoint.departments.map((dept) => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-gray-900 font-semibold mb-2 text-sm">
                  {appoint.formFields[1].label}
                </label>
                <select
                  name="doctor"
                  value={formData.doctor}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1977cc] focus:ring-1 focus:ring-[#1977cc] bg-white"
                >
                  <option value="">{appoint.formFields[1].placeholder}</option>
                  {appoint.doctors.map((doc) => (
                    <option key={doc} value={doc}>{doc}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-900 font-semibold mb-2 text-sm">
                  {appoint.formFields[2].label}
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1977cc] focus:ring-1 focus:ring-[#1977cc]"
                />
              </div>
              <div>
                <label className="block text-gray-900 font-semibold mb-2 text-sm">
                  {appoint.formFields[3].label}
                </label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1977cc] focus:ring-1 focus:ring-[#1977cc]"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-900 font-semibold mb-2 text-sm">
                {appoint.formFields[4].label}
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1977cc] focus:ring-1 focus:ring-[#1977cc]"
                placeholder={appoint.formFields[4].placeholder}
              />
            </div>

            <div>
              <label className="block text-gray-900 font-semibold mb-2 text-sm">
                {appoint.formFields[5].label}
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1977cc] focus:ring-1 focus:ring-[#1977cc]"
                placeholder={appoint.formFields[5].placeholder}
              />
            </div>

            <div>
              <label className="block text-gray-900 font-semibold mb-2 text-sm">
                {appoint.formFields[6].label}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1977cc] focus:ring-1 focus:ring-[#1977cc] resize-none"
                placeholder={appoint.formFields[6].placeholder}
              />
            </div>

            {isSubmitted && (
              <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg text-sm font-medium">
                ✓ {appoint.successMessage}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-[#1977cc] text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition duration-300"
            >
              {appoint.submitButtonText}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

