import { BlogCategoryHero, CategorySection } from '@/components';

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
