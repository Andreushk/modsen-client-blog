import fetchData from '@/api/fetchData';
import { HERO_POST_REQUEST_URL } from '@/constants/api';
import { Post } from '@/types/models/posts';

import PostInformation from './PostInformation';
import styles from './styles.module.scss';

const HomeHero: React.FC = async () => {
  const post = await fetchData<Post>(HERO_POST_REQUEST_URL);

  return (
    <section className={styles.home_hero}>
      <PostInformation post={post} />
    </section>
  );
};

export default HomeHero;
