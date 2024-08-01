import { useTranslations } from 'next-intl';

import Caption from '@/components/common/Caption';
import Paragraph from '@/components/common/Paragraph';

import styles from './styles.module.scss';

interface ComponentProps {
  category: string;
}

const BlogCategoryHero: React.FC<ComponentProps> = ({ category }) => {
  const t = useTranslations('CategoryPage');

  return (
    <section className={styles.blog_category_hero} data-testid="blog-category-hero">
      <div className={styles.blog_category_hero_content}>
        <h1>{category}</h1>
        <Paragraph style="grayed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore.
        </Paragraph>
        <Caption style="dark">{`${t('blog-category-hero')} ${category}`}</Caption>
      </div>
    </section>
  );
};

export default BlogCategoryHero;
