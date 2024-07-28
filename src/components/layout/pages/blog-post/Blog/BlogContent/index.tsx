import Image from 'next/image';

import { Author, Paragraph } from '@/components';
import CATEGORIES_ICONS from '@/constants/categoriesIcons';
import { CategoriesType } from '@/types/categories';
import { Post } from '@/types/models/posts';

import styles from './styles.module.scss';

const POST_IMAGE_PATH = '/images/blurred-meetup.jpg';

interface ComponentProps {
  blog: Post;
}

const BlogContent: React.FC<ComponentProps> = ({ blog }) => (
  <>
    <div className={styles.blog_header}>
      <Author name={blog.author} subtitle={blog.createdAt.toString()} authorId={blog.authorId} />
      <h1>{blog.title}</h1>
      <div className={styles.blog_header_category}>
        {CATEGORIES_ICONS[blog.category as CategoriesType]}
        <h4>{blog.category}</h4>
      </div>
    </div>
    <div className={styles.blog_image}>
      <Image src={POST_IMAGE_PATH} width={1280} height={582} alt="Post contextual image" />
    </div>
    <div className={styles.blog_content}>
      {blog.content.map(({ h3, paragraph }) => (
        <div>
          <h3>{h3}</h3>
          <Paragraph style="dark">{paragraph}</Paragraph>
        </div>
      ))}
    </div>
  </>
);

export default BlogContent;
