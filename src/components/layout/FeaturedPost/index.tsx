'use client';

import { Paragraph } from '@/components';
import useGetPost from '@/hooks/useGetPost';
import useGetPosts from '@/hooks/useGetPosts';

import AllPostsPart from './AllPostsPart';
import FeaturedPart from './FeaturedPart';
import LoadingAllPostsPart from './LoadingAllPostsPart';
import LoadingFeaturedPostPart from './LoadingFeaturedPostPart';
import styles from './styles.module.scss';

const FeaturedPost: React.FC = () => {
  const { posts, isLoading: isPostsLoading, error: errorPosts } = useGetPosts(4);

  const {
    post: featuredPost,
    isLoading: isFeaturedPostLoading,
    error: errorFeaturedPost,
  } = useGetPost(1);

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
