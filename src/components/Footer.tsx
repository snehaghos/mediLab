import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-200 text-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#1977cc] rounded-lg flex items-center justify-center font-bold">M</div>
              <span className="text-xl font-bold">Medilab</span>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Useful Links</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li><a href="#" className="hover:text-[#1977cc] transition">Home</a></li>
              <li><a href="#" className="hover:text-[#1977cc] transition">About us</a></li>
              <li><a href="#" className="hover:text-[#1977cc] transition">Services</a></li>
              <li><a href="#" className="hover:text-[#1977cc] transition">Terms of service</a></li>
              <li><a href="#" className="hover:text-[#1977cc] transition">Privacy policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li><a href="#" className="hover:text-[#1977cc] transition">Cardiology</a></li>
              <li><a href="#" className="hover:text-[#1977cc] transition">Neurology</a></li>
              <li><a href="#" className="hover:text-[#1977cc] transition">Hepatology</a></li>
              <li><a href="#" className="hover:text-[#1977cc] transition">Pediatrics</a></li>
              <li><a href="#" className="hover:text-[#1977cc] transition">Eye Care</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-4 text-sm text-gray-700">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 text-[#1977cc] mt-1" />
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
              <div className="flex gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-[#1977cc]" />
                <p>+1 5589 55488 55</p>
              </div>
              <div className="flex gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-[#1977cc]" />
                <p>info@example.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4 py-8 border-t border-gray-300">
          <a href="#" className="text-gray-700 hover:text-[#1977cc] transition"><Facebook className="w-6 h-6" /></a>
          <a href="#" className="text-gray-700 hover:text-[#1977cc] transition"><Twitter className="w-6 h-6" /></a>
          <a href="#" className="text-gray-700 hover:text-[#1977cc] transition"><Linkedin className="w-6 h-6" /></a>
          <a href="#" className="text-gray-700 hover:text-[#1977cc] transition"><Instagram className="w-6 h-6" /></a>
        </div>

        <div className="text-center text-gray-400 text-sm pt-8">
          <p>&copy; 2024 Medilab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
