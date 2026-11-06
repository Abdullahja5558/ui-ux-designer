"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Services from "@/components/Service";
import Skills from "@/components/Skills";
import Projects from "@/components/Project";
import HowItWork from "@/components/HowItWork";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <>
      <Navbar />
      <main id="main-content" className="w-full">
        <Hero />
        <TrustedBy />
        <Services />
        <Skills />
         <HowItWork />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default page;