'use client';

import { Paragraph, Spinner } from '@/components';
import { HERO_POST_REQUEST_URL } from '@/constants/api';
import useQueryData from '@/hooks/useQueryData';
import { Post } from '@/types/models/posts';

import FeaturedPost from './FeaturedPost';
import styles from './styles.module.scss';

const BlogHeader: React.FC = () => {
  const { data, isLoading, error } = useQueryData<Post>(HERO_POST_REQUEST_URL);

  return (
    <section className={styles.blog_header}>
      {isLoading && <Spinner />}
      {data && <FeaturedPost post={data} />}
      {error && <Paragraph style="dark">{error}</Paragraph>}
    </section>
  );
};

export default BlogHeader;
