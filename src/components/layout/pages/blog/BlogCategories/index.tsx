import { useTranslations } from 'next-intl';

import { Catagories } from '@/components';

import styles from './styles.module.scss';

const BlogCategories: React.FC = () => {
  const t = useTranslations('BlogPage');

  return (
    <section className={styles.categories}>
      <h2>{t('all-categories')}</h2>
      <Catagories selectedCategory="startup" />
    </section>
  );
};

export default BlogCategories;
