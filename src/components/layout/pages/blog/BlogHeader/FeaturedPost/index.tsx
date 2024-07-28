import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Button, Caption, Label, Paragraph, ReadMoreButtonContainer } from '@/components';
import { AppRoutes } from '@/constants/routes';
import { Link } from '@/navigation';
import { Post } from '@/types/models/posts';

import styles from './styles.module.scss';

interface ComponentProps {
  post: Post;
}

const FeaturedPost: React.FC<ComponentProps> = ({ post }) => {
  const t = useTranslations('BlogPage');

  return (
    <>
      <div className={styles.blog_header_information}>
        <Caption style="dark">{t('featured-post.caption')}</Caption>
        <h2>{post.title}</h2>
        <Label>
          By <Link href={`${AppRoutes.AUTHOR}/${post.authorId}`}>{post.author}</Link> l{' '}
          {post.createdAt}{' '}
        </Label>
        <Paragraph style="dark">{post.shortDescription}</Paragraph>
        <ReadMoreButtonContainer>
          <Button styleType="yellow">{t('featured-post.read-more')}</Button>
        </ReadMoreButtonContainer>
      </div>
      <div className={styles.blog_header_image}>
        <Image
          src="/images/man-behind-computer.jpg"
          width={515}
          height={359}
          alt="Post thumbnail"
        />
      </div>
    </>
  );
};

export default FeaturedPost;
