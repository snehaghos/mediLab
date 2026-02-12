import { useState } from 'react'
import departments from '@/data/departments.json'

export default function Departments() {
  const [selectedDept, setSelectedDept] = useState(0)

  return (
    <section id="departments" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{departments.title}</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {departments.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-12 justify-center lg:justify-start">
          {departments.departments.map((dept, deptIndex) => (
            <button
              key={dept.id}
              onClick={() => setSelectedDept(deptIndex)}
              className={`px-6 py-3 rounded-lg font-semibold transition duration-300 ${
                selectedDept === deptIndex
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
              {departments.departments[selectedDept].name}
            </h3>
            <p className="text-gray-600 leading-relaxed text-base">
              {departments.departments[selectedDept].description}
            </p>
          </div>

       
          <div className="col-span-2 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg h-96 flex items-center justify-center overflow-hidden">
            <img 
              src={departments.departments[selectedDept].image}
              alt={departments.departments[selectedDept].name}
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
