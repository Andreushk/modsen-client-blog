'use client';

import { useTranslations } from 'next-intl';

import { HorizontalPostCardWithImage, Paragraph } from '@/components';
import { POSTS_PATH, SERVER_URL } from '@/constants/api';
import useQueryDataArray from '@/hooks/useQueryDataArray';
import { Post } from '@/types/models/posts';

import LoadingBlog from './LoadingBlogList';
import styles from './styles.module.scss';

interface ComponentProps {
  postsAuthorId: string;
}

const MyBlog: React.FC<ComponentProps> = ({ postsAuthorId }) => {
  const t = useTranslations('AuthorPage');

  const { data, isLoading, error } = useQueryDataArray<Post>(
    `${SERVER_URL}${POSTS_PATH}?authorId=${postsAuthorId}`,
  );

  return (
    <section className={styles.my_blog}>
      <div className={styles.my_blog_posts}>
        <h1>{t('my-posts')}</h1>
        {data && (
          <div>
            {data.map(({ id, title, category, shortDescription }) => (
              <HorizontalPostCardWithImage
                key={id}
                id={id}
                category={category}
                title={title}
                description={shortDescription}
                type="large"
              />
            ))}
          </div>
        )}
      </div>
      {isLoading && <LoadingBlog />}
      {error && <Paragraph style="dark">{error}</Paragraph>}
    </section>
  );
};

export default MyBlog;
