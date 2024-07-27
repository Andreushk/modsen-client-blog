import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Button, Label, Paragraph, ReadMoreButtonContainer } from '@/components';
import { AppRoutes } from '@/constants/routes';
import { Link } from '@/navigation';
import { Post } from '@/types/models/posts';

import styles from './styles.module.scss';

interface ComponentProps {
  post: Post;
}

const VerticalPostCardWithImage: React.FC<ComponentProps> = ({ post }) => {
  const t = useTranslations('HomePage');

  return (
    <article className={styles.post}>
      <div className={styles.post_image}>
        <Image src="/images/buildings-and-palms.jpg" width={669} height={352} alt="Post image" />
      </div>
      <Label>
        By <Link href={`${AppRoutes.AUTHOR}/${101}`}>{post.author}</Link> l {post.createdAt}
      </Label>
      <h3>{post.title}</h3>
      <Paragraph style="dark">{post.shortDescription}</Paragraph>
      <ReadMoreButtonContainer>
        <Button styleType="yellow">{t('featured.read-more')}</Button>
      </ReadMoreButtonContainer>
    </article>
  );
};

export default VerticalPostCardWithImage;
