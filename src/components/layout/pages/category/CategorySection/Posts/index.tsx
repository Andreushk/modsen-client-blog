import React from 'react';

import { HorizontalPostCardWithImage, Paragraph } from '@/components';
import { Post } from '@/types/models/posts';

import LoadingPosts from './LoadingPosts';
import NoPosts from './NoPosts';
import styles from './styles.module.scss';

interface ComponentProps {
  posts: Post[] | null;
  isLoading: boolean;
  error: string | null;
}

const Posts: React.FC<ComponentProps> = ({ posts, isLoading, error }) => (
  <div className={styles.posts}>
    {isLoading && !posts && <LoadingPosts />}
    {posts && posts.length === 0 && <NoPosts />}
    {posts &&
      posts.length > 0 &&
      posts.map(({ id, title, category, shortDescription }) => (
        <HorizontalPostCardWithImage
          id={id}
          title={title}
          category={category}
          description={shortDescription}
          type="small"
        />
      ))}
    {error && <Paragraph style="dark">{error}</Paragraph>}
  </div>
);

export default React.memo(Posts);
