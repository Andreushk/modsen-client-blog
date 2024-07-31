import { Metadata } from 'next';

import { AllBlogs, BlogCategories, BlogHeader, JoinOurTeam } from '@/components';

export const metadata: Metadata = {
  title: 'Modsen Client Blog | Blog',
  description: 'Find the posts that interest you or check out the most recent posts ',
  keywords: 'posts, blogs, categories, explore, creatives, creativity',
};

const Blog: React.FC = () => (
  <>
    <BlogHeader />
    <AllBlogs />
    <BlogCategories />
    <JoinOurTeam />
  </>
);

export default Blog;
