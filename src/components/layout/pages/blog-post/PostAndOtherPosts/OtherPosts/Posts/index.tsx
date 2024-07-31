import { VerticalPostCardWithImage } from '@/components';
import { Post } from '@/types/models/posts';

import styles from './styles.module.scss';

interface ComponentProps {
  posts: Post[];
}

const Posts: React.FC<ComponentProps> = ({ posts }) => (
  <div className={styles.what_to_read_next_posts}>
    {posts.map((post) => (
      <VerticalPostCardWithImage key={post.id} post={post} type="small" />
    ))}
  </div>
);

export default Posts;
