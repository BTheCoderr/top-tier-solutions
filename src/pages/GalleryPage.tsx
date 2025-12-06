import React from 'react';
import styled from 'styled-components';
import Gallery from '../components/Gallery';

const PageContainer = styled.div`
  padding-top: 80px; // To account for fixed navbar
`;

const GalleryPage = () => {
  return (
    <PageContainer>
      <Gallery />
    </PageContainer>
  );
};

export default GalleryPage; 