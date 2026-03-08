import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Project'
import Services from '@/components/Service'
import Skills from '@/components/Skills'
import Testimonials from '@/components/Testimonials'
import React from 'react'

const page = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Services/>
    <Skills/>
     <Experience/>
    <Projects/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default page