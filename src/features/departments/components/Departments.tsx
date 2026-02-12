'use client'

import { useState } from 'react'
import departmentsData from '@/data/departments.json'

export default function Departments() {
  const [selectedDept, setSelectedDept] = useState(0)

  return (
    <section id="departments" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{departmentsData.title}</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {departmentsData.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-12 justify-center lg:justify-start">
          {departmentsData.departments.map((dept, index) => (
            <button
              key={dept.id}
              onClick={() => setSelectedDept(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition duration-300 ${
                selectedDept === index
                  ? 'bg-[#1977cc] text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-200 hover:text-[#1977cc]'
              }`}
            >
              {dept.name}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-stretch">
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              {departmentsData.departments[selectedDept].name}
            </h3>
            <p className="text-gray-600 leading-relaxed text-base">
              {departmentsData.departments[selectedDept].description}
            </p>
          </div>

       
          <div className="col-span-2 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg h-96 flex items-center justify-center overflow-hidden">
            <img 
              src={departmentsData.departments[selectedDept].image}
              alt={departmentsData.departments[selectedDept].name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
   
          </div>
        </div>
      </div>
    </section>
  )
}
