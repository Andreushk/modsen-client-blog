import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

import fetchData from '@/api/fetchData';
import { Button, Caption, Paragraph, ReadMoreButtonContainer } from '@/components';
import { MAX_POST_ID, MIN_POST_ID, SERVER_URL, ServerPaths } from '@/constants/api';
import { AppRoutes } from '@/constants/routes';
import { Link } from '@/navigation';
import { Post } from '@/types/models/posts';
import getRandomNumber from '@/utils/getRandomNumber';

import AuthorAndPublicationTime from './AuthorAndPublicationTime';
import styles from './styles.module.scss';

const RANDOM_POST_ID = getRandomNumber(MIN_POST_ID, MAX_POST_ID);

const BlogHeader: React.FC = async () => {
  const t = await getTranslations('BlogPage');
  const post = await fetchData<Post>(`${SERVER_URL}${ServerPaths.POSTS}?id=${RANDOM_POST_ID}`);

  return (
    <section className={styles.blog_header} data-testid="featured-post">
      <div className={styles.blog_header_information}>
        <Caption style="dark">{t('featured-post.caption')}</Caption>
        <h2>{post.title}</h2>
        <AuthorAndPublicationTime
          authorId={post.authorId}
          authorName={post.author}
          publicationTimestamp={post.createdAt}
        />
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
