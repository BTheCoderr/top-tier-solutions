import React, { useState } from 'react';
import styled from 'styled-components';
import { BlogPost } from '../../types/blog';
import BlogCard from './BlogCard';

const BlogSection = styled.section`
  padding: 5rem 2rem;
  background-color: #f5f5f5;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: #212121;
  margin-bottom: 3rem;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button<{ active: boolean }>`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  background-color: ${props => props.active ? '#FF5722' : '#fff'};
  color: ${props => props.active ? '#fff' : '#212121'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.active ? '#F4511E' : '#f0f0f0'};
  }
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

// Sample blog posts data
const samplePosts: BlogPost[] = [
  {
    id: '1',
    title: 'Essential Fire Safety Tips for Commercial Kitchens',
    slug: 'fire-safety-tips-commercial-kitchens',
    excerpt: 'Learn the most important fire safety practices for your commercial kitchen...',
    content: 'Full content here...',
    author: 'John Smith',
    date: '2024-05-20',
    category: 'fire-safety',
    imageUrl: 'https://placehold.co/600x400/212121/FF5722/png?text=Fire+Safety',
    tags: ['kitchen safety', 'fire prevention', 'commercial']
  },
  {
    id: '2',
    title: 'New Regulations in Commercial Vent Cleaning',
    slug: 'new-vent-cleaning-regulations',
    excerpt: 'Stay compliant with the latest industry regulations...',
    content: 'Full content here...',
    author: 'Jane Doe',
    date: '2024-05-18',
    category: 'industry-news',
    imageUrl: 'https://placehold.co/600x400/212121/FF5722/png?text=Industry+News',
    tags: ['regulations', 'compliance', 'vent cleaning']
  },
  {
    id: '3',
    title: 'Maintaining Your Dryer Vent: A Complete Guide',
    slug: 'dryer-vent-maintenance-guide',
    excerpt: 'Everything you need to know about maintaining your dryer vent...',
    content: 'Full content here...',
    author: 'Mike Johnson',
    date: '2024-05-15',
    category: 'maintenance-tips',
    imageUrl: 'https://placehold.co/600x400/212121/FF5722/png?text=Maintenance+Tips',
    tags: ['maintenance', 'dryer vent', 'tips']
  }
];

const BlogList = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredPosts = activeCategory === 'all'
    ? samplePosts
    : samplePosts.filter(post => post.category === activeCategory);

  return (
    <BlogSection id="blog">
      <Title>Fire Safety Blog & News</Title>
      
      <FilterContainer>
        <FilterButton 
          active={activeCategory === 'all'}
          onClick={() => setActiveCategory('all')}
        >
          All Posts
        </FilterButton>
        <FilterButton 
          active={activeCategory === 'fire-safety'}
          onClick={() => setActiveCategory('fire-safety')}
        >
          Fire Safety
        </FilterButton>
        <FilterButton 
          active={activeCategory === 'industry-news'}
          onClick={() => setActiveCategory('industry-news')}
        >
          Industry News
        </FilterButton>
        <FilterButton 
          active={activeCategory === 'maintenance-tips'}
          onClick={() => setActiveCategory('maintenance-tips')}
        >
          Maintenance Tips
        </FilterButton>
      </FilterContainer>

      <BlogGrid>
        {filteredPosts.map(post => (
          <BlogCard key={post.id} post={post} />
        ))}
      </BlogGrid>
    </BlogSection>
  );
};

export default BlogList; 