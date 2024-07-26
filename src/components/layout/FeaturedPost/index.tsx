'use client';

import { Paragraph } from '@/components';
import { ALL_POSTS_REQUEST_URL, FEATURED_POST_REQUEST_URL } from '@/constants/api';
import useQueryData from '@/hooks/useQueryData';
import useQueryDataArray from '@/hooks/useQueryDataArray';
import { Post } from '@/types/models/posts';

import AllPostsPart from './AllPostsPart';
import FeaturedPart from './FeaturedPart';
import LoadingAllPostsPart from './LoadingAllPostsPart';
import LoadingFeaturedPostPart from './LoadingFeaturedPostPart';
import styles from './styles.module.scss';

const FeaturedPost: React.FC = () => {
  const {
    data: posts,
    isLoading: isPostsLoading,
    error: errorPosts,
  } = useQueryDataArray<Post>(ALL_POSTS_REQUEST_URL);

  const {
    data: featuredPost,
    isLoading: isFeaturedPostLoading,
    error: errorFeaturedPost,
  } = useQueryData<Post>(FEATURED_POST_REQUEST_URL);

  if (errorFeaturedPost || errorPosts) {
    return (
      <section className={styles.featured_and_all_posts}>
        <Paragraph style="dark">{errorFeaturedPost || errorPosts}</Paragraph>
      </section>
    );
  }

  return (
    <section className={styles.featured_and_all_posts}>
      <div className={styles.featured_post_part}>
        {isFeaturedPostLoading && <LoadingFeaturedPostPart />}
        {featuredPost && <FeaturedPart post={featuredPost} />}
      </div>
      <div className={styles.all_posts_part}>
        {posts && <AllPostsPart posts={posts} />}
        {isPostsLoading && <LoadingAllPostsPart />}
      </div>
    </section>
  );
};

export default FeaturedPost;
