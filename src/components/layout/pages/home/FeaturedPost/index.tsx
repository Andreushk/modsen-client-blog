import fetchData from '@/api/fetchData';
import fetchDataArray from '@/api/fetchDataArray';
import { SERVER_URL, ServerPaths } from '@/constants/api';
import { Post } from '@/types/models/posts';

import AllPostsPart from './AllPostsPart';
import FeaturedPart from './FeaturedPart';
import styles from './styles.module.scss';

const POSTS_LIMIT = 4;
const FEATURED_POST_ID = 20;

const FeaturedPost: React.FC = async () => {
  const allPosts = await fetchDataArray<Post[]>(
    `${SERVER_URL}${ServerPaths.POSTS}?_limit=${POSTS_LIMIT}`,
  );
  const featuredPost = await fetchData<Post>(
    `${SERVER_URL}${ServerPaths.POSTS}?id=${FEATURED_POST_ID}`,
  );

  return (
    <section className={styles.featured_and_all_posts}>
      <div className={styles.featured_post_part}>
        <FeaturedPart post={featuredPost} />
      </div>
      <div className={styles.all_posts_part}>
        <AllPostsPart posts={allPosts} />
      </div>
    </section>
  );
};

export default FeaturedPost;
