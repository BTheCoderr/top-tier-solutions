import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/tts-logo.png';

const HeroContainer = styled.div`
  min-height: 100vh;
  background-color: #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  padding-top: 100px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 30% 30%, rgba(255, 87, 34, 0.08) 0%, transparent 60%),
      radial-gradient(circle at 70% 70%, rgba(255, 87, 34, 0.08) 0%, transparent 60%);
    z-index: 0;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      linear-gradient(45deg, rgba(26, 26, 26, 0.97) 0%, rgba(26, 26, 26, 0.95) 100%);
    z-index: 0;
  }
`;

const HeroContent = styled.div`
  text-align: center;
  color: white;
  max-width: 1200px;
  width: 100%;
  position: relative;
  z-index: 1;
  padding: 3rem;
`;

const LargeLogo = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  margin-bottom: 3rem;
  animation: fadeInDown 1s ease-out;
  filter: drop-shadow(0 4px 8px rgba(255, 87, 34, 0.2));

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    max-width: 300px;
    margin-bottom: 2rem;
  }
`;

const MainHeadline = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  line-height: 1.2;
  animation: fadeIn 1s ease-out 0.5s both;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
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
  animation: fadeIn 1s ease-out 1s both;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0.75rem 1.5rem;
  }
`;

const SubHeadline = styled.h2`
  font-size: 2rem;
  margin: 1.5rem 0;
  color: #FF5722;
  animation: fadeIn 1s ease-out 1.5s both;
  
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
  transition: all 0.3s ease;
  margin-top: 2rem;
  border: 2px solid #FF5722;
  animation: fadeIn 1s ease-out 2s both;

  &:hover {
    background-color: transparent;
    color: #FF5722;
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }
`;

const Hero = () => {
  const navigate = useNavigate();

  return (
    <HeroContainer>
      <HeroContent>
        <LargeLogo src={logo} alt="Top Tier Solutions Logo" />
        <MainHeadline>
          PREVENTING FIRES AND IMPROVING AIR QUALITY
        </MainHeadline>
        <Promotion>
          10% OFF ON YOUR FIRST CLEANING
        </Promotion>
        <SubHeadline>
          FREE INSPECTIONS & ESTIMATES
        </SubHeadline>
        <CTAButton onClick={() => navigate('/contact')}>
          Get Your Free Estimate
        </CTAButton>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;