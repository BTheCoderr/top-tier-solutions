import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Credentials from './components/Credentials';
import Contact from './components/Contact';

const AppContainer = styled.div`
  min-height: 100vh;
`;

const App = () => {
  return (
    <Router>
      <AppContainer>
        <Navbar />
        <Hero />
        <Services />
        <Gallery />
        <Testimonials />
        <Credentials />
        <Contact />
      </AppContainer>
    </Router>
  );
};

export default App;
