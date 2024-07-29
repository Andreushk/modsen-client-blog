import fetchData from '@/api/fetchData';
import fetchDataArray from '@/api/fetchDataArray';
import { ALL_POSTS_REQUEST_URL_WITH_LIMIT, FEATURED_POST_REQUEST_URL } from '@/constants/api';
import { Post } from '@/types/models/posts';

import AllPostsPart from './AllPostsPart';
import FeaturedPart from './FeaturedPart';
import styles from './styles.module.scss';

const FeaturedPost: React.FC = async () => {
  const allPosts = await fetchDataArray<Post[]>(ALL_POSTS_REQUEST_URL_WITH_LIMIT);
  const featuredPost = await fetchData<Post>(FEATURED_POST_REQUEST_URL);

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
