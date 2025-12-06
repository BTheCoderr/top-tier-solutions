import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load page components
const HomePage = lazy(() => import('./pages/HomePage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BookingPage = lazy(() => import('./pages/BookingPage'));
const ServiceAreaPage = lazy(() => import('./pages/ServiceAreaPage'));
const Contact = lazy(() => import('./components/Contact'));

const AppContainer = styled.div`
  min-height: 100vh;
`;

const App = () => {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Router>
          <AppContainer>
            <Helmet>
              <title>Top Tier Solutions - Fire Prevention & Air Quality Services</title>
              <meta name="description" content="Professional fire prevention, hood cleaning, and air quality services. Serving commercial and residential clients with top-tier cleaning solutions." />
              <meta name="keywords" content="fire prevention, hood cleaning, air quality, vent cleaning, dryer vent, commercial cleaning" />
              <meta property="og:title" content="Top Tier Solutions - Fire Prevention & Air Quality Services" />
              <meta property="og:description" content="Professional fire prevention and air quality services. Get your free inspection today!" />
              <meta property="og:type" content="website" />
              <meta name="twitter:card" content="summary_large_image" />
              <link rel="canonical" href="https://top-tier-solutions.netlify.app" />
            </Helmet>
            <Navbar />
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/book" element={<BookingPage />} />
                <Route path="/service-area" element={<ServiceAreaPage />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
          </AppContainer>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  );
};

export default App;
