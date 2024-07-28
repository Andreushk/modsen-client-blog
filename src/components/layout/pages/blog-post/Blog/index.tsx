import { Paragraph, Spinner } from '@/components';
import { Post } from '@/types/models/posts';

import BlogContent from './BlogContent';
import styles from './styles.module.scss';

interface ComponentProps {
  post: Post | null;
  isLoading: boolean;
  error: string | null;
}

const Blog: React.FC<ComponentProps> = ({ post, isLoading, error }) => (
  <section className={styles.blog}>
    {isLoading && <Spinner />}
    {post && <BlogContent blog={post} />}
    {error && <Paragraph style="dark">{error}</Paragraph>}
  </section>
);

export default Blog;
