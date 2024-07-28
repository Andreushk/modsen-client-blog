'use client';

import { useTranslations } from 'next-intl';

import { Paragraph } from '@/components';
import { AUTHORS_REQUEST_URL } from '@/constants/api';
import useQueryDataArray from '@/hooks/useQueryDataArray';
import { Author } from '@/types/models/authors';

import AuthorCard from './AuthorCard';
import LoadingAuthorCards from './LoadingAuthorCards';
import styles from './styles.module.scss';

interface ComponentProps {
  amountOfAuthors?: number;
}

const AUTHORS_LIMIT = 4;

const ListOfAuthors: React.FC<ComponentProps> = ({ amountOfAuthors }) => {
  const t = useTranslations('HomePage');

  const { data, isLoading, error } = useQueryDataArray<Author>(
    `${AUTHORS_REQUEST_URL}?_limit=${amountOfAuthors ?? AUTHORS_LIMIT}`,
  );

  return (
    <section className={styles.authors_section}>
      <h2>{t('authors-list')}</h2>
      <div className={styles.list_container}>
        {isLoading && <LoadingAuthorCards />}
        {data &&
          data.map(({ id, name, profileImageId, socialLinks }) => (
            <AuthorCard
              key={id}
              id={id}
              name={name}
              profileImageId={profileImageId}
              socialLinks={socialLinks}
            />
          ))}
        {error && <Paragraph style="dark">{error}</Paragraph>}
      </div>
    </section>
  );
};

export default ListOfAuthors;
