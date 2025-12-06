import React, { useState } from 'react';
import styled from 'styled-components';

const GallerySection = styled.section`
  padding: 5rem 2rem;
  background-color: #fff;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: #212121;
  margin-bottom: 3rem;
`;

const CategoryTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const CategoryTab = styled.button<{ $active: boolean }>`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  background-color: ${props => props.$active ? '#FF5722' : '#f5f5f5'};
  color: ${props => props.$active ? 'white' : '#212121'};
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;

  &:hover {
    background-color: ${props => props.$active ? '#F4511E' : '#e0e0e0'};
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ImageContainer = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  &:hover .overlay {
    opacity: 1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const ImageOverlay = styled.div.attrs({ className: 'overlay' })`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  padding: 1rem;
  color: white;
  text-align: center;
`;

const ImageTitle = styled.h3`
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
`;

const ImageDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.4;
`;

// Updated gallery items with placeholder images
const galleryItems = {
  hood: [
    {
      before: 'https://placehold.co/600x400/212121/FF5722/png?text=Hood+Before',
      after: 'https://placehold.co/600x400/212121/FF5722/png?text=Hood+After',
      title: 'Restaurant Hood Cleaning',
      description: 'Complete hood system cleaning for fire prevention'
    },
    {
      before: 'https://placehold.co/600x400/212121/FF5722/png?text=Hood+Before+2',
      after: 'https://placehold.co/600x400/212121/FF5722/png?text=Hood+After+2',
      title: 'Commercial Kitchen Hood',
      description: 'Deep cleaning of commercial kitchen hood system'
    }
  ],
  vent: [
    {
      before: 'https://placehold.co/600x400/212121/FF5722/png?text=Vent+Before',
      after: 'https://placehold.co/600x400/212121/FF5722/png?text=Vent+After',
      title: 'Air Vent Cleaning',
      description: 'Thorough cleaning of ventilation system'
    },
    {
      before: 'https://placehold.co/600x400/212121/FF5722/png?text=Vent+Before+2',
      after: 'https://placehold.co/600x400/212121/FF5722/png?text=Vent+After+2',
      title: 'HVAC Vent Maintenance',
      description: 'Professional HVAC system cleaning'
    }
  ],
  dryer: [
    {
      before: 'https://placehold.co/600x400/212121/FF5722/png?text=Dryer+Before',
      after: 'https://placehold.co/600x400/212121/FF5722/png?text=Dryer+After',
      title: 'Dryer Vent Cleaning',
      description: 'Professional dryer vent maintenance'
    },
    {
      before: 'https://placehold.co/600x400/212121/FF5722/png?text=Dryer+Before+2',
      after: 'https://placehold.co/600x400/212121/FF5722/png?text=Dryer+After+2',
      title: 'Commercial Dryer Vents',
      description: 'Commercial laundry vent cleaning'
    }
  ]
};

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<'hood' | 'vent' | 'dryer'>('hood');

  return (
    <GallerySection id="gallery">
      <SectionTitle>Before & After Gallery</SectionTitle>
      
      <CategoryTabs>
        <CategoryTab 
          $active={activeCategory === 'hood'} 
          onClick={() => setActiveCategory('hood')}
        >
          Hood Cleaning
        </CategoryTab>
        <CategoryTab 
          $active={activeCategory === 'vent'} 
          onClick={() => setActiveCategory('vent')}
        >
          Air Vent Cleaning
        </CategoryTab>
        <CategoryTab 
          $active={activeCategory === 'dryer'} 
          onClick={() => setActiveCategory('dryer')}
        >
          Dryer Vent Cleaning
        </CategoryTab>
      </CategoryTabs>

      <GalleryGrid>
        {galleryItems[activeCategory].map((item, index) => (
          <React.Fragment key={index}>
            <ImageContainer>
              <Image src={item.before} alt={`${item.title} - Before`} />
              <ImageOverlay>
                <ImageTitle>Before</ImageTitle>
                <ImageDescription>{item.description}</ImageDescription>
              </ImageOverlay>
            </ImageContainer>
            <ImageContainer>
              <Image src={item.after} alt={`${item.title} - After`} />
              <ImageOverlay>
                <ImageTitle>After</ImageTitle>
                <ImageDescription>{item.description}</ImageDescription>
              </ImageOverlay>
            </ImageContainer>
          </React.Fragment>
        ))}
      </GalleryGrid>
    </GallerySection>
  );
};

export default Gallery; 