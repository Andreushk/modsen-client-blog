import Image from 'next/image';

import { Caption, Paragraph } from '@/components';
import { AppRoutes } from '@/constants/routes';
import { Link } from '@/navigation';
import { Post } from '@/types/models/posts';
import getRandomPostImageURL from '@/utils/getRandomPostImageURL';

import styles from './styles.module.scss';

interface ComponentProps {
  post: Post;
}

const HorizontalPostCardWithImage: React.FC<ComponentProps> = ({ post }) => (
  <Link href={`${AppRoutes.BLOG_POST}/${post.id}`}>
    <article className={styles.post_card}>
      <div className={styles.post_card_image}>
        <Image src={getRandomPostImageURL()} width={490} height={318} alt="Blog thumbnail" />
      </div>
      <div className={styles.post_card_information}>
        <Caption style="dark">{post.category}</Caption>
        <h2>{post.title}</h2>
        <Paragraph style="dark">{post.shortDescription}</Paragraph>
      </div>
    </article>
  </Link>
);

export default HorizontalPostCardWithImage;
