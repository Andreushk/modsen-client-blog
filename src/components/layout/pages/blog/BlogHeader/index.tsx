import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

import fetchData from '@/api/fetchData';
import { Button, Caption, Label, Paragraph, ReadMoreButtonContainer } from '@/components';
import { HERO_POST_REQUEST_URL } from '@/constants/api';
import { AppRoutes } from '@/constants/routes';
import { Link } from '@/navigation';
import { Post } from '@/types/models/posts';

import styles from './styles.module.scss';

const BlogHeader: React.FC = async () => {
  const t = await getTranslations('BlogPage');
  const post = await fetchData<Post>(HERO_POST_REQUEST_URL);

  return (
    <section className={styles.blog_header}>
      <div className={styles.blog_header_information}>
        <Caption style="dark">{t('featured-post.caption')}</Caption>
        <h2>{post.title}</h2>
        <Label>
          By <Link href={`${AppRoutes.AUTHOR}/${post.authorId}`}>{post.author}</Link> l{' '}
          {post.createdAt}{' '}
        </Label>
        <Paragraph style="dark">{post.shortDescription}</Paragraph>
        <ReadMoreButtonContainer>
          <Link href={`${AppRoutes.BLOG_POST}/${post.id}`}>
            <Button styleType="yellow">{t('featured-post.read-more')}</Button>
          </Link>
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
    </section>
  );
};

export default BlogHeader;
