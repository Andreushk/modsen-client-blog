import { useTranslations } from 'next-intl';
import React from 'react';

import { VerticalPostCardWithoutImage } from '@/components';
import { AppRoutes } from '@/constants/routes';
import { Link } from '@/navigation';
import { inter } from '@/styles/fonts';
import { Post } from '@/types/models/posts';

interface ComponentProps {
  posts: Post[];
}

const AllPostsPart: React.FC<ComponentProps> = ({ posts }) => {
  const t = useTranslations('HomePage');

  return (
    <>
      <div>
        <h2>{t('featured.all')}</h2>
        <Link className={inter.className} href={AppRoutes.BLOG}>
          {t('featured.view-all')}
        </Link>
      </div>
      <div>
        {posts?.map(({ id, author, authorId, createdAt, title }) => (
          <VerticalPostCardWithoutImage
            key={id}
            id={id}
            author={author}
            authorId={authorId}
            createdAt={createdAt}
            title={title}
          />
        ))}
      </div>
    </>
  );
};

export default React.memo(AllPostsPart);
