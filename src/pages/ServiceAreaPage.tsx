import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import ServiceAreaMap from '../components/ServiceArea/ServiceAreaMap';

const PageContainer = styled.div`
  padding-top: 80px; // To account for fixed navbar
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
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

const ServiceAreaPage = () => {
  return (
    <PageContainer>
      <Helmet>
        <title>Service Area | Top Tier Solutions</title>
        <meta 
          name="description" 
          content="View our service area coverage in the San Francisco Bay Area. Professional fire prevention and air quality services available in your location."
        />
      </Helmet>
      
      <ContentContainer>
        <Title>Service Area Coverage</Title>
        <Description>
          Top Tier Solutions provides professional fire prevention and air quality services
          throughout the San Francisco Bay Area. Check our coverage map to see if we service
          your location.
        </Description>
        
        <ServiceAreaMap />
      </ContentContainer>
    </PageContainer>
  );
};

export default ServiceAreaPage; 