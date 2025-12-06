import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import BookingForm from '../components/Booking/BookingForm';

const PageContainer = styled.div`
  padding-top: 80px; // To account for fixed navbar
`;

const Title = styled.h1`
  text-align: center;
  color: #212121;
  margin: 2rem 0;
  font-size: 2.5rem;
`;

const Description = styled.p`
  text-align: center;
  color: #666;
  max-width: 800px;
  margin: 0 auto 3rem;
  font-size: 1.1rem;
  line-height: 1.6;
`;

const BookingPage = () => {
  return (
    <PageContainer>
      <Helmet>
        <title>Book a Service | Top Tier Solutions</title>
        <meta 
          name="description" 
          content="Schedule your fire prevention and air quality service with Top Tier Solutions. Easy online booking for hood cleaning, vent cleaning, and dryer vent services."
        />
      </Helmet>
      
      <Title>Schedule Your Service</Title>
      <Description>
        Book your professional cleaning service in just a few steps. Choose your service,
        select a convenient time, and we'll take care of the rest.
      </Description>
      
      <BookingForm />
    </PageContainer>
  );
};

export default BookingPage; 