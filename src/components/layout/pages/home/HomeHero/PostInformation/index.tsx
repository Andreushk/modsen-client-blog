import { useTranslations } from 'next-intl';

import { Button, Caption, Paragraph, ReadMoreButtonContainer } from '@/components';
import { AppRoutes } from '@/constants/routes';
import { Link, useRouter } from '@/navigation';
import { inter } from '@/styles/fonts';
import { Post } from '@/types/models/posts';

import BackgroundImage from './BackgroundImage';
import styles from './styles.module.scss';

interface ComponentProps {
  post: Post;
}

const PostInformation: React.FC<ComponentProps> = ({ post }) => {
  const router = useRouter();
  const t = useTranslations('HomePage');

  const handleReadMoreButtonClick = (): void => {
    router.push(`${AppRoutes.BLOG_POST}/${post.id}`);
  };

  return (
    <>
      <BackgroundImage />
      <div className={styles.home_hero_overlay}>
        <div className={styles.home_hero_content}>
          <Caption style="light">
            {t('hero.posted')} <span>{post.category}</span>
          </Caption>
          <h2 className={styles.post_title}>{post.title}</h2>
          <span className={` ${inter.className} ${styles.post_credentials}`}>
            By <Link href={`${AppRoutes.AUTHOR}/${post.authorId}`}>{post.author}</Link> l{' '}
            {post.createdAt}
          </span>
          <Paragraph style="light">{post.shortDescription}</Paragraph>
          <ReadMoreButtonContainer>
            <Button styleType="yellow" onClick={handleReadMoreButtonClick}>
              {t('hero.read-more')}
            </Button>
          </ReadMoreButtonContainer>
        </div>
      </div>
    </>
  );
};

export default PostInformation;
