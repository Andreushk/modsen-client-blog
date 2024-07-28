import { useTranslations } from 'next-intl';
import React from 'react';

import { VerticalPostCardWithImage } from '@/components';
import { Post } from '@/types/models/posts';

interface ComponentProps {
  post: Post;
}

const FeaturedPart: React.FC<ComponentProps> = ({ post }) => {
  const t = useTranslations('HomePage');

  return (
    <>
      <div>
        <h2>{t('featured.featured')}</h2>
      </div>
      <VerticalPostCardWithImage post={post} />
    </>
  );
};

export default React.memo(FeaturedPart);
