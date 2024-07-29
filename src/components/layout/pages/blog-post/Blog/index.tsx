import { Post } from '@/types/models/posts';

import BlogContent from './BlogContent';
import styles from './styles.module.scss';

interface ComponentProps {
  post: Post;
}

const Blog: React.FC<ComponentProps> = ({ post }) => (
  <section className={styles.blog}>
    <BlogContent blog={post} />
  </section>
);

export default Blog;
