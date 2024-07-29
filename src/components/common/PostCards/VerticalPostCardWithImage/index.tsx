'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Button, Label, Paragraph, ReadMoreButtonContainer } from '@/components';
import { AppRoutes } from '@/constants/routes';
import { Link, useRouter } from '@/navigation';
import { Post } from '@/types/models/posts';

import styles from './styles.module.scss';

type PostTypes = 'small' | 'regular';

interface ComponentProps {
  post: Post;
  type?: PostTypes;
}

const VerticalPostCardWithImage: React.FC<ComponentProps> = ({ post, type = 'regular' }) => {
  const router = useRouter();
  const t = useTranslations('HomePage');

  const postLink: string = `${AppRoutes.BLOG_POST}/${post.id}`;

  const handleReadMoreButtonClick = (): void => {
    router.push(postLink);
  };

  const handlePostClick = (): void => {
    if (type === 'small') {
      router.push(postLink);
    }
  };

  return (
    <article
      className={type === 'regular' ? styles.post_regular : styles.post_small}
      onClick={handlePostClick}
    >
      <div className={`${styles.post_image} ${type === 'small' ? styles.small : ''}`}>
        <Image src="/images/buildings-and-palms.jpg" width={669} height={352} alt="Post image" />
      </div>
      <Label>
        By <Link href={`${AppRoutes.AUTHOR}/${101}`}>{post.author}</Link> l {post.createdAt}
      </Label>
      <h3>{post.title}</h3>
      <Paragraph style="dark">{post.shortDescription}</Paragraph>
      {type === 'regular' && (
        <ReadMoreButtonContainer>
          <Button styleType="yellow" onClick={handleReadMoreButtonClick}>
            {t('featured.read-more')}
          </Button>
        </ReadMoreButtonContainer>
      )}
    </article>
  );
};

export default VerticalPostCardWithImage;
