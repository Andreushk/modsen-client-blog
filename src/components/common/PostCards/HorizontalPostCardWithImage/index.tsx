import Image from 'next/image';

import { Caption, Paragraph } from '@/components';
import { AppRoutes } from '@/constants/routes';
import { Link } from '@/navigation';
import getRandomPostImageURL from '@/utils/getRandomPostImageURL';

import styles from './styles.module.scss';

type SizeTypes = 'small' | 'regular';

interface ComponentProps {
  id: number;
  category: string;
  title: string;
  description: string;
  type?: SizeTypes;
}

const HorizontalPostCardWithImage: React.FC<ComponentProps> = ({
  id,
  category,
  title,
  description,
  type = 'regular',
}) => (
  <Link href={`${AppRoutes.BLOG_POST}/${id}`}>
    <article className={styles.post_card}>
      <div className={`${styles.post_card_image} ${type === 'small' ? styles.small : ''}`}>
        <Image src={getRandomPostImageURL()} width={490} height={318} alt="Blog thumbnail" />
      </div>
      <div className={`${styles.post_card_information} ${type === 'small' ? styles.small : ''}`}>
        <Caption style="dark">{category}</Caption>
        <h2>{title}</h2>
        <Paragraph style="dark">{description}</Paragraph>
      </div>
    </article>
  </Link>
);

export default HorizontalPostCardWithImage;
