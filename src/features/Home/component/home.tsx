import { About } from '@/features/about'
import { Services } from '@/features/services'
import { WhyChoose } from '@/features/whychooseus'
import { Appointment } from '@/features/appointment'
import { Departments } from '@/features/departments'
import { Doctors } from '@/features/doctors'
import { FAQ } from '@/features/faq'
import { Testimonials } from '@/features/testimonials'
import { Gallery } from '@/features/gallery'
import { Contact } from '@/features/contact'
import Hero from '@/components/Hero'



export default function Home() {
  return (
    <>
      <Hero />
      <WhyChoose />
      <About />
      <Services />
      <Appointment />
      <Departments />
      <Doctors />
      <FAQ />
      <Testimonials />
      <Gallery />
      <Contact />
    </>
  )
}