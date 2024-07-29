import { getTranslations } from 'next-intl/server';

import fetchDataArray from '@/api/fetchDataArray';
import { HorizontalPostCardWithImage } from '@/components';
import { POSTS_PATH, SERVER_URL } from '@/constants/api';
import { Post } from '@/types/models/posts';

import styles from './styles.module.scss';

interface ComponentProps {
  postsAuthorId: string;
}

const MyBlog: React.FC<ComponentProps> = async ({ postsAuthorId }) => {
  const t = await getTranslations('AuthorPage');
  const posts = await fetchDataArray<Post[]>(
    `${SERVER_URL}${POSTS_PATH}?authorId=${postsAuthorId}`,
  );

  return (
    <section className={styles.my_blog}>
      <div className={styles.my_blog_posts}>
        <h1>{t('my-posts')}</h1>
        <div>
          {posts.map(({ id, title, category, shortDescription }) => (
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
      </div>
    </section>
  );
};

export default MyBlog;
