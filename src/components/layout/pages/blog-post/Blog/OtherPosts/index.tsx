import { useTranslations } from 'next-intl';

import fetchDataArray from '@/api/fetchDataArray';
import { ALL_POSTS_REQUEST_URL } from '@/constants/api';
import { CategoriesType } from '@/types/categories';
import { Post } from '@/types/models/posts';

import Posts from './Posts';
import styles from './styles.module.scss';

const LIMIT = 3;

interface ComponentProps {
  excludePostId: string;
  category: CategoriesType;
}

const OtherPosts: React.FC<ComponentProps> = async ({ excludePostId, category }) => {
  const t = useTranslations('BlogPostPage');

  const suggestedPosts = await fetchDataArray<Post[]>(
    `${ALL_POSTS_REQUEST_URL}?_limit=${LIMIT}&id_ne=${excludePostId}&category=${category}`,
  );

  return (
    <section className={styles.what_to_read_next}>
      <h2>{t('what-to-read-next')}</h2>
      <Posts posts={suggestedPosts} />
      <div className={styles.what_to_read_next_divider} />
    </section>
  );
};

export default OtherPosts;
