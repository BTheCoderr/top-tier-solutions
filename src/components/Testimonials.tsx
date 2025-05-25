import React from 'react';
import styled from 'styled-components';

const TestimonialsSection = styled.section`
  padding: 5rem 2rem;
  background-color: #f5f5f5;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: #212121;
  margin-bottom: 3rem;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const TestimonialCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Quote = styled.blockquote`
  font-size: 1.1rem;
  color: #424242;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-style: italic;
  position: relative;

  &::before {
    content: '"';
    font-size: 4rem;
    color: #FF5722;
    position: absolute;
    left: -1rem;
    top: -1rem;
    opacity: 0.2;
  }
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AuthorInfo = styled.div`
  flex: 1;
`;

const AuthorName = styled.h4`
  color: #212121;
  margin-bottom: 0.25rem;
  font-weight: 600;
`;

const BusinessName = styled.p`
  color: #666;
  font-size: 0.9rem;
`;

const Rating = styled.div`
  color: #FF5722;
  font-size: 1.2rem;
`;

// Sample testimonials data - replace with real testimonials
const testimonials = [
  {
    quote: "Top Tier Solutions has been maintaining our restaurant's hood system for years. Their service is exceptional, and they always ensure we're up to code.",
    author: "John Smith",
    business: "Smith's Family Restaurant",
    rating: 5
  },
  {
    quote: "Professional, reliable, and thorough. They've helped us maintain a clean and safe environment for our customers and staff.",
    author: "Maria Rodriguez",
    business: "La Casa Kitchen",
    rating: 5
  },
  {
    quote: "Their attention to detail and commitment to safety is unmatched. Highly recommend their services to any business owner.",
    author: "David Chen",
    business: "Asian Fusion Bistro",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <TestimonialsSection id="testimonials">
      <Container>
        <SectionTitle>What Our Clients Say</SectionTitle>
        <TestimonialsGrid>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index}>
              <Quote>{testimonial.quote}</Quote>
              <Author>
                <AuthorInfo>
                  <AuthorName>{testimonial.author}</AuthorName>
                  <BusinessName>{testimonial.business}</BusinessName>
                </AuthorInfo>
                <Rating>
                  {'★'.repeat(testimonial.rating)}
                  {'☆'.repeat(5 - testimonial.rating)}
                </Rating>
              </Author>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </Container>
    </TestimonialsSection>
  );
};

export default Testimonials; 