import { Metadata } from 'next';

import {
  AllBlogs,
  BlogCategories,
  BlogHeader,
  ErrorBoundary,
  JoinOurTeam,
  SectionError,
} from '@/components';

export const metadata: Metadata = {
  title: 'Modsen Client Blog | Blog',
  description: 'Find the posts that interest you or check out the most recent posts ',
  keywords: 'posts, blogs, categories, explore, creatives, creativity',
};

const Blog: React.FC = () => (
  <>
    <BlogHeader />
    <ErrorBoundary fallback={<SectionError />}>
      <AllBlogs />
    </ErrorBoundary>
    <BlogCategories />
    <JoinOurTeam />
  </>
);

export default Blog;
