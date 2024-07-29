'use client';

import { useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

import Caption from '@/components/common/Caption';
import Paragraph from '@/components/common/Paragraph';
import { AppRoutesQueryParameters } from '@/constants/routes';

import styles from './styls.module.scss';

const BlogCategoryHero: React.FC = () => {
  const t = useTranslations('CategoryPage');
  const searchParams = useSearchParams();
  const category = searchParams.get(AppRoutesQueryParameters.CATEGORY);

  return (
    <section className={styles.blog_category_hero}>
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
