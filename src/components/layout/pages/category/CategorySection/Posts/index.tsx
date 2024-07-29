import React from 'react';

import { HorizontalPostCardWithImage, Paragraph } from '@/components';
import { Post } from '@/types/models/posts';

import LoadingPosts from './LoadingPosts';
import styles from './styles.module.scss';

interface ComponentProps {
  posts: Post[] | null;
  isLoading: boolean;
  error: string | null;
}

const Posts: React.FC<ComponentProps> = ({ posts, isLoading, error }) => (
  <div className={styles.posts}>
    {isLoading && <LoadingPosts />}
    {posts && posts.length > 0 && posts.map((post) => <HorizontalPostCardWithImage post={post} />)}
    {error && <Paragraph style="dark">{error}</Paragraph>}
  </div>
);

export default React.memo(Posts);
