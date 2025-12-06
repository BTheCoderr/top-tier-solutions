import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Credentials from '../components/Credentials';
import Contact from '../components/Contact';
import FAQ from '../components/FAQ';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Credentials />
      <Contact />
    </>
  );
};

export default HomePage; 