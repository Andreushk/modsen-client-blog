'use client';

import { Paragraph, Spinner } from '@/components';
import { POSTS_PATH, SERVER_URL } from '@/constants/api';
import useQueryData from '@/hooks/useQueryData';
import { Post } from '@/types/models/posts';

import BlogContent from './BlogContent';
import styles from './styles.module.scss';

interface ComponentProps {
  id: string;
}

const Blog: React.FC<ComponentProps> = ({ id }) => {
  const { data, isLoading, error } = useQueryData<Post>(`${SERVER_URL}${POSTS_PATH}?id=${id}`);

  return (
    <section className={styles.blog}>
      {isLoading && <Spinner />}
      {data && <BlogContent blog={data} />}
      {error && <Paragraph style="dark">{error}</Paragraph>}
    </section>
  );
};

export default Blog;
