import React from 'react';
import styled from 'styled-components';

const CredentialsSection = styled.section`
  padding: 5rem 2rem;
  background-color: #212121;
  color: white;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #FF5722;
`;

const CredentialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  margin-top: 3rem;
`;

const CredentialCard = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Icon = styled.div`
  font-size: 3rem;
  color: #FF5722;
  margin-bottom: 1.5rem;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #FF5722;
`;

const Description = styled.p`
  line-height: 1.6;
  color: #f5f5f5;
`;

const Highlight = styled.div`
  font-size: 1.25rem;
  margin: 3rem auto;
  max-width: 800px;
  line-height: 1.8;
  color: #f5f5f5;
  padding: 2rem;
  background-color: rgba(255, 87, 34, 0.1);
  border-radius: 8px;
  border-left: 4px solid #FF5722;
`;

const Credentials = () => {
  return (
    <CredentialsSection id="credentials">
      <Container>
        <SectionTitle>Our Credentials</SectionTitle>
        
        <Highlight>
          We are proud to be certified, licensed, and fully insured to provide you with the highest quality service in the industry.
        </Highlight>

        <CredentialsGrid>
          <CredentialCard>
            <Icon>🏆</Icon>
            <Title>Certified Excellence</Title>
            <Description>
              CECS - Certified Exhaust Cleaning Specialist<br/>
              BCCS - Boston Certified Cleaning Specialist<br/>
              OSHA 10<br/>
              20 years of experience on our team
            </Description>
          </CredentialCard>

          <CredentialCard>
            <Icon>📋</Icon>
            <Title>Code Compliance</Title>
            <Description>
              We meet and exceed all local Fire Codes and NFPA96 Standards to ensure your safety and compliance.
            </Description>
          </CredentialCard>

          <CredentialCard>
            <Icon>✓</Icon>
            <Title>Health Regulations</Title>
            <Description>
              Our services comply with all Health Department regulations, maintaining the highest standards of cleanliness.
            </Description>
          </CredentialCard>
        </CredentialsGrid>

        <Highlight>
          Our commitment to excellence and attention to detail ensures that your facility not only meets but exceeds industry standards.
        </Highlight>
      </Container>
    </CredentialsSection>
  );
};

export default Credentials; 