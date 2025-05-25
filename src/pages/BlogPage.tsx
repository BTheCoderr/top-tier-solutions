import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import BlogList from '../components/Blog/BlogList';

const PageContainer = styled.div`
  padding-top: 80px; // To account for fixed navbar
`;

const BlogPage = () => {
  return (
    <PageContainer>
      <Helmet>
        <title>Blog - Fire Safety Tips & Industry News | Top Tier Solutions</title>
        <meta 
          name="description" 
          content="Stay informed about fire safety, maintenance tips, and industry news. Expert advice from Top Tier Solutions for maintaining a safe environment."
        />
      </Helmet>
      <BlogList />
    </PageContainer>
  );
};

export default BlogPage; 