'use client';

import { useTranslations } from 'next-intl';

import { Paragraph, Spinner } from '@/components';
import { ALL_POSTS_REQUEST_URL } from '@/constants/api';
import useQueryDataArray from '@/hooks/useQueryDataArray';
import { CategoriesType } from '@/types/categories';
import { Post } from '@/types/models/posts';

import Posts from './Posts';
import styles from './styles.module.scss';

const LIMIT = 3;

interface ComponentProps {
  excludePostId: string;
  category: CategoriesType | undefined;
  isLoading: boolean;
}

const OtherPosts: React.FC<ComponentProps> = ({ excludePostId, category, isLoading }) => {
  const t = useTranslations('BlogPostPage');

  const requestURL: string | null = category
    ? `${ALL_POSTS_REQUEST_URL}?_limit=${LIMIT}&id_ne=${excludePostId}&category=${category}`
    : null;

  const { data, isLoading: isPostsLoading, error } = useQueryDataArray<Post>(requestURL);

  return (
    <section className={styles.what_to_read_next}>
      <h2>{t('what-to-read-next')}</h2>
      {(isPostsLoading || isLoading) && <Spinner />}
      {data && <Posts posts={data} />}
      {error && <Paragraph style="dark">{error}</Paragraph>}
      {data && <div className={styles.what_to_read_next_divider} />}
    </section>
  );
};

export default OtherPosts;
