'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

import { HorizontalPostCardWithImage, Paragraph, Spinner } from '@/components';
import { ALL_POSTS_REQUEST_URL } from '@/constants/api';
import useQueryDataArrayWithPagination from '@/hooks/useQueryDataArrayWithPagination';
import { Post } from '@/types/models/posts';

import Buttons from './Buttons';
import styles from './style.module.scss';

const LIMIT = 5;

const AllBlogs: React.FC = () => {
  const [page, setPage] = useState<number>(1);

  const t = useTranslations('BlogPage');
  const { data, totalPages, error } = useQueryDataArrayWithPagination<Post>(
    `${ALL_POSTS_REQUEST_URL}?_page=${page}&_limit=${LIMIT}`,
  );

  const handlePrevButtonClick = (): void => {
    setPage((prevPage) => prevPage - 1);
  };

  const handleNextButtonClick = (): void => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <section className={styles.all_blogs}>
      <h1>{t('all-posts.title')}</h1>
      <div className={styles.all_blogs_divider} />
      {data && (
        <>
          <div className={styles.all_blogs_posts}>
            {data.map(({ id, title, category, shortDescription }) => (
              <HorizontalPostCardWithImage
                key={id}
                id={id}
                title={title}
                category={category}
                description={shortDescription}
              />
            ))}
          </div>
          <Buttons
            prevDisabled={page === 1}
            nextDisabled={page === totalPages}
            onPrev={handlePrevButtonClick}
            onNext={handleNextButtonClick}
          />
        </>
      )}
      {!data && !error && <Spinner />}
      {error && <Paragraph style="dark">{error}</Paragraph>}
    </section>
  );
};

export default AllBlogs;
