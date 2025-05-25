import React from 'react';
import styled from 'styled-components';
import { BlogPost } from '../../types/blog';
import { Link } from 'react-router-dom';

const Card = styled.article`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 1.5rem;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  color: #212121;
  margin-bottom: 1rem;
`;

const Excerpt = styled.p`
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const Meta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #888;
  font-size: 0.9rem;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

const Tag = styled.span`
  background-color: #f5f5f5;
  color: #666;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
`;

const ReadMore = styled(Link)`
  display: inline-block;
  margin-top: 1rem;
  color: #FF5722;
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    color: #F4511E;
  }
`;

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <Card>
      <Image src={post.imageUrl} alt={post.title} />
      <Content>
        <Title>{post.title}</Title>
        <Excerpt>{post.excerpt}</Excerpt>
        <Meta>
          <span>{post.author}</span>
          <span>{new Date(post.date).toLocaleDateString()}</span>
        </Meta>
        <TagContainer>
          {post.tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </TagContainer>
        <ReadMore to={`/blog/${post.slug}`}>
          Read More →
        </ReadMore>
      </Content>
    </Card>
  );
};

export default BlogCard; 