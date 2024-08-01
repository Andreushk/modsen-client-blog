import { useTranslations } from 'next-intl';

import fetchDataArray from '@/api/fetchDataArray';
import { SERVER_URL, ServerPaths } from '@/constants/api';
import { CategoriesType } from '@/types/categories';
import { Post } from '@/types/models/posts';

import Posts from './Posts';
import styles from './styles.module.scss';

const POSTS_LIMIT = 3;

interface ComponentProps {
  excludePostId: number;
  category: CategoriesType;
}

const OtherPosts: React.FC<ComponentProps> = async ({ excludePostId, category }) => {
  const t = useTranslations('BlogPostPage');

  const suggestedPosts = await fetchDataArray<Post[]>(
    `${SERVER_URL}${ServerPaths.POSTS}?_limit=${POSTS_LIMIT}&id_ne=${excludePostId}&category=${category}`,
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
