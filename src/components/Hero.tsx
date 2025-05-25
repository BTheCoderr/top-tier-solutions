import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  background-image: url('/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  background-blend-mode: darken;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  margin-top: -80px;
`;

const HeroContent = styled.div`
  text-align: center;
  color: white;
  max-width: 800px;
`;

const MainHeadline = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Promotion = styled.div`
  background-color: #FF5722;
  display: inline-block;
  padding: 1rem 2rem;
  border-radius: 4px;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 1rem 0;
`;

const SubHeadline = styled.h2`
  font-size: 2rem;
  margin: 1.5rem 0;
  color: #FF5722;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const CTAButton = styled.button`
  background-color: #FF5722;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 2rem;

  &:hover {
    background-color: #F4511E;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <MainHeadline>
          PREVENTING FIRES AND IMPROVING AIR QUALITY
        </MainHeadline>
        <Promotion>
          10% OFF ON YOUR FIRST CLEANING
        </Promotion>
        <SubHeadline>
          FREE INSPECTIONS & ESTIMATES
        </SubHeadline>
        <CTAButton onClick={() => window.location.href = '/contact'}>
          Get Your Free Estimate
        </CTAButton>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero; 