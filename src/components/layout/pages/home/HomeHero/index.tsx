'use client';

import { Paragraph, Spinner } from '@/components';
import { HERO_POST_REQUEST_URL } from '@/constants/api';
import useQueryData from '@/hooks/useQueryData';
import { Post } from '@/types/models/posts';

import PostInformation from './PostInformation';
import styles from './styles.module.scss';

const HomeHero: React.FC = () => {
  const { data, isLoading, error } = useQueryData<Post>(HERO_POST_REQUEST_URL);

  return (
    <section className={styles.home_hero}>
      {isLoading && <Spinner />}
      {data && <PostInformation post={data} />}
      {error && <Paragraph style="dark">{error}</Paragraph>}
    </section>
  );
};

export default HomeHero;
