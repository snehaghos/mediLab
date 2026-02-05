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
      <section id="hero">
        <Hero />
      </section>
      <section id="whychoose">
        <WhyChoose />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="appointment">
        <Appointment />
      </section>
      <section id="departments">
        <Departments />
      </section>
      <section id="doctors">
        <Doctors />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  )
}