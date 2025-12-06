export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: 'fire-safety' | 'industry-news' | 'maintenance-tips';
  imageUrl: string;
  tags: string[];
}

export interface BlogCategory {
  id: 'fire-safety' | 'industry-news' | 'maintenance-tips';
  name: string;
  description: string;
} 