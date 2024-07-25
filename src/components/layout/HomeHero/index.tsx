'use client';

import { Paragraph, Spinner } from '@/components';
import useGetPost from '@/hooks/useGetPost';

import PostInformation from './PostInformation';
import styles from './styles.module.scss';

const HomeHero: React.FC = () => {
  const { post, isLoading, error } = useGetPost(2);

  return (
    <section className={styles.home_hero}>
      {isLoading && <Spinner />}
      {post && <PostInformation post={post} />}
      {error && <Paragraph style="dark">{error}</Paragraph>}
    </section>
  );
};

export default HomeHero;
