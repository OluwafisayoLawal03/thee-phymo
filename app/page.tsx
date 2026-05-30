'use client'

import Cursor from '@/components/Cursor'
import Navbar from '@/components/Navbar'
import Loader from '@/components/Loader'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Stats from '@/components/Stats'
import Portfolio from '@/components/Portfolio'
import Services from '@/components/Services'
import Pricing from '@/components/Pricing'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import AdminPanel from '@/components/AdminPanel'

export default function Home() {
  return (
    <>
      <Loader />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <Portfolio />
        <Services />
        <Pricing />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <AdminPanel />
    </>
  )
}
