import { useTranslations } from 'next-intl';

import { Button, Caption, Paragraph } from '@/components';
import { AppRoutes } from '@/constants/routes';
import { Link } from '@/navigation';
import { inter } from '@/styles/fonts';
import { Post } from '@/types/models/posts';

import BackgroundImage from './BackgroundImage';
import styles from './styles.module.scss';

interface ComponentProps {
  post: Post;
}

const PostInformation: React.FC<ComponentProps> = ({ post }) => {
  const t = useTranslations('HomePage');

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
          <div className={styles.read_more_button}>
            <Button styleType="yellow">{t('hero.read-more')}</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostInformation;
