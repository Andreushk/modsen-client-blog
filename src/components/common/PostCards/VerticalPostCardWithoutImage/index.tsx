'use client';

import { useLocale } from 'next-intl';

import { Label } from '@/components';
import { AppRoutes } from '@/constants/routes';
import { Link, useRouter } from '@/navigation';
import { LocaleTypes } from '@/types/locale';
import getPublicationDate from '@/utils/getPublicationDate';

import styled from './styles.module.scss';

interface ComponentProps {
  id: number;
  title: string;
  author: string;
  authorId: number;
  createdAt: number;
}

const VerticalPostCardWithoutImage: React.FC<ComponentProps> = ({
  id,
  title,
  author,
  authorId,
  createdAt,
}) => {
  const locale = useLocale() as LocaleTypes;
  const navigation = useRouter();

  const handleClick = (): void => {
    navigation.push(`${AppRoutes.BLOG_POST}/${id}`);
  };

  const handleAuthorLinkClick = (e: React.MouseEvent): void => {
    e.stopPropagation();
  };

  return (
    <article className={styled.post} onClick={handleClick}>
      <Label>
        By{' '}
        <Link href={`${AppRoutes.AUTHOR}/${authorId}`} onClick={handleAuthorLinkClick}>
          {author}
        </Link>{' '}
        l {getPublicationDate(createdAt, locale, true)}
      </Label>
      <h4>{title}</h4>
    </article>
  );
};

export default VerticalPostCardWithoutImage;
