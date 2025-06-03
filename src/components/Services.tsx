import React from 'react';
import styled from 'styled-components';

const ServicesSection = styled.section`
  padding: 5rem 2rem;
  background-color: #f5f5f5;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: #212121;
  margin-bottom: 3rem;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ServiceCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ServiceIcon = styled.div`
  font-size: 2.5rem;
  color: #FF5722;
  margin-bottom: 1rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  color: #212121;
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

const services = [
  {
    id: 1,
    title: "Commercial Hood Cleaning",
    description: "Professional cleaning of restaurant kitchen exhaust systems, ensuring fire safety compliance and optimal performance.",
    icon: "Service",
    features: [
      "Deep cleaning of exhaust fans",
      "Grease removal from ductwork", 
      "Filter cleaning and replacement",
      "Fire safety compliance"
    ]
  },
  {
    id: 2,
    title: "Air Vent Cleaning", 
    description: "Comprehensive cleaning of HVAC systems to improve air quality and system efficiency.",
    icon: "Cleaning",
    features: [
      "Ductwork cleaning",
      "Air filter replacement",
      "Improved air quality",
      "Energy efficiency boost"
    ]
  },
  {
    title: "Hood Inspections",
    icon: "🔍",
    description: "Thorough inspection of hood systems to ensure safety and compliance"
  },
  {
    title: "Full Hood Exhaust Cleaning",
    icon: "🧹",
    description: "Complete cleaning of hood exhaust systems to prevent fire hazards"
  },
  {
    title: "Grease Traps",
    icon: "🔧",
    description: "Professional cleaning and maintenance of grease traps"
  },
  {
    title: "Equipment Cleaning",
    icon: "⚙️",
    description: "Detailed cleaning of kitchen equipment for optimal performance"
  },
  {
    title: "Filter Cleaning",
    icon: "🔄",
    description: "Thorough cleaning of filters to maintain air quality"
  },
  {
    title: "Return Air Cleaning",
    icon: "💨",
    description: "Cleaning of return air systems for better ventilation"
  },
  {
    title: "Fan Belt Exchange",
    icon: "🔧",
    description: "Professional replacement of fan belts"
  },
  {
    title: "Air Ventilation Cleaning",
    icon: "🌪️",
    description: "Comprehensive cleaning of air ventilation systems"
  },
  {
    title: "Laundry Duct Cleaning",
    icon: "👕",
    description: "Specialized cleaning for laundry ducts and vents"
  },
  {
    title: "24/7 Emergency Service",
    icon: "🚨",
    description: "Round-the-clock emergency service for urgent needs"
  }
];

const Services = () => {
  return (
    <ServicesSection id="services">
      <SectionTitle>Our Services</SectionTitle>
      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCard key={index}>
            <ServiceIcon>{service.icon}</ServiceIcon>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </ServicesSection>
  );
};

export default Services; 