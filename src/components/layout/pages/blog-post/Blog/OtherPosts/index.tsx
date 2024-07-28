'use client';

import { useTranslations } from 'next-intl';

import { Paragraph, Spinner } from '@/components';
import { ALL_POSTS_REQUEST_URL } from '@/constants/api';
import useQueryDataArray from '@/hooks/useQueryDataArray';
import { Post } from '@/types/models/posts';

import Posts from './Posts';
import styles from './styles.module.scss';

const LIMIT = 3;

interface ComponentProps {
  excludePostId: string;
}

const OtherPosts: React.FC<ComponentProps> = ({ excludePostId }) => {
  const t = useTranslations('BlogPostPage');

  const { data, isLoading, error } = useQueryDataArray<Post>(
    `${ALL_POSTS_REQUEST_URL}?_limit=${LIMIT}&id_ne=${excludePostId}`,
  );

  return (
    <section className={styles.what_to_read_next}>
      <h2>{t('what-to-read-next')}</h2>
      {isLoading && <Spinner />}
      {data && <Posts posts={data} />}
      {error && <Paragraph style="dark">{error}</Paragraph>}
      {data && <div className={styles.what_to_read_next_divider} />}
    </section>
  );
};

export default OtherPosts;
