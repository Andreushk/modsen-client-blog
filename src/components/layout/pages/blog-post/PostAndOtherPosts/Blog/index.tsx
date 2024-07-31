import { Post } from '@/types/models/posts';

import BlogContent from './BlogContent';
import styles from './styles.module.scss';

interface ComponentProps {
  postData: Post;
}

const Blog: React.FC<ComponentProps> = async ({ postData }) => (
  <section className={styles.blog}>
    <BlogContent blog={postData} />
  </section>
);

export default Blog;
