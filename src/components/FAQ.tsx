import React, { useState } from 'react';
import styled from 'styled-components';

const FAQSection = styled.section`
  padding: 5rem 2rem;
  background-color: #f5f5f5;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: #212121;
  margin-bottom: 3rem;
`;

const FAQContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  margin-bottom: 1rem;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: white;
`;

const Question = styled.button<{ $isOpen: boolean }>`
  width: 100%;
  padding: 1.5rem;
  text-align: left;
  background-color: ${props => props.$isOpen ? '#FF5722' : 'white'};
  color: ${props => props.$isOpen ? 'white' : '#212121'};
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1rem;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.$isOpen ? '#F4511E' : '#f5f5f5'};
  }
`;

const Answer = styled.div<{ $isOpen: boolean }>`
  padding: ${props => props.$isOpen ? '1.5rem' : '0 1.5rem'};
  max-height: ${props => props.$isOpen ? '500px' : '0'};
  overflow: hidden;
  transition: all 0.3s ease;
  background-color: white;
  line-height: 1.6;
`;

const Icon = styled.span<{ $isOpen: boolean }>`
  transform: rotate(${props => props.$isOpen ? '180deg' : '0'});
  transition: transform 0.3s ease;
`;

const faqData = [
  {
    question: "How often should I have my kitchen hood cleaned?",
    answer: "Commercial kitchen hoods should be cleaned at different intervals based on your cooking volume: Monthly for high-volume cooking operations (12-16 hours/day), Quarterly for moderate-volume (6-12 hours/day), and Semi-annually for low-volume operations (less than 6 hours/day)."
  },
  {
    question: "What are the signs that my dryer vent needs cleaning?",
    answer: "Common signs include: clothes taking longer than usual to dry, burning smell during operation, excessive heat in your laundry room, visible lint around the dryer's exterior vent, and reduced airflow from the exterior vent."
  },
  {
    question: "How can proper ventilation prevent fires?",
    answer: "Proper ventilation removes excess heat, smoke, and grease particles from cooking areas, reducing the risk of fire. It also prevents the accumulation of combustible residues in ductwork and helps maintain safe operating temperatures in kitchen equipment."
  },
  {
    question: "Do you provide emergency services?",
    answer: "Yes, we offer 24/7 emergency services for urgent situations. Contact our emergency hotline for immediate assistance with critical cleaning or maintenance needs."
  },
  {
    question: "Are your cleaning products eco-friendly?",
    answer: "Yes, we use environmentally friendly, biodegradable cleaning products that are both effective and safe for the environment. Our cleaning methods comply with all environmental regulations while ensuring thorough cleaning results."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQSection id="faq">
      <Title>Frequently Asked Questions</Title>
      <FAQContainer>
        {faqData.map((item, index) => (
          <FAQItem key={index}>
            <Question
              $isOpen={openIndex === index}
              onClick={() => toggleQuestion(index)}
            >
              {item.question}
              <Icon $isOpen={openIndex === index}>▼</Icon>
            </Question>
            <Answer $isOpen={openIndex === index}>
              {item.answer}
            </Answer>
          </FAQItem>
        ))}
      </FAQContainer>
    </FAQSection>
  );
};

export default FAQ; 