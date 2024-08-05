'use client';

import { useLocale } from 'next-intl';

import { Label } from '@/components';
import { AppRoutes } from '@/constants/routes';
import { Link } from '@/navigation';
import { LocaleTypes } from '@/types/locale';
import getPublicationDate from '@/utils/getPublicationDate';

interface ComponentProps {
  authorId: number;
  authorName: string;
  publicationTimestamp: number;
}

const AuthorAndPublicationTime: React.FC<ComponentProps> = ({
  authorId,
  authorName,
  publicationTimestamp,
}) => {
  const locale = useLocale() as LocaleTypes;

  return (
    <Label>
      By <Link href={`${AppRoutes.AUTHOR}/${authorId}`}>{authorName}</Link> l{' '}
      {getPublicationDate(publicationTimestamp, locale, true)}
    </Label>
  );
};

export default AuthorAndPublicationTime;
