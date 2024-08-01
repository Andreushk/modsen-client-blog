import fetchData from '@/api/fetchData';
import { MAX_POST_ID, MIN_POST_ID, SERVER_URL, ServerPaths } from '@/constants/api';
import { Post } from '@/types/models/posts';
import getRandomNumber from '@/utils/getRandomNumber';

import PostInformation from './PostInformation';
import styles from './styles.module.scss';

const RANDOM_POST_ID = getRandomNumber(MIN_POST_ID, MAX_POST_ID);

const HomeHero: React.FC = async () => {
  const post = await fetchData<Post>(`${SERVER_URL}${ServerPaths.POSTS}?id=${RANDOM_POST_ID}`);

  return (
    <section className={styles.home_hero}>
      <PostInformation post={post} />
    </section>
  );
};

export default HomeHero;
