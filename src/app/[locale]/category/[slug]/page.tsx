import { Metadata } from 'next';

import { BlogCategoryHero, CategorySection } from '@/components';

export const metadata: Metadata = {
  title: 'Modsen Client Blog | Category',
  description: 'Find the posts that interest you! Easy filtering by different categories and tags.',
  keywords: 'posts, blogs, categories, explore, creatives, creativity',
  openGraph: {
    title: `Modsen Client Blog | Categories`,
    description: `Find the posts that interest you! Easy filtering by different categories and tags.`,
    siteName: 'Modsen Client Blog Site',
  },
};

interface ComponentProps {
  params: { slug: string };
}

const Category: React.FC<ComponentProps> = ({ params }) => (
  <>
    <BlogCategoryHero category={params.slug} />
    <CategorySection />
  </>
);

export default Category;
