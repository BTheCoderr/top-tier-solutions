import React from 'react';
import styled from 'styled-components';
import Services from '../components/Services';

const PageContainer = styled.div`
  padding-top: 80px; // To account for fixed navbar
`;

const ServicesPage = () => {
  return (
    <PageContainer>
      <Services />
    </PageContainer>
  );
};

export default ServicesPage; 