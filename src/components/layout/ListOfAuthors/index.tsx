'use client';

import { useTranslations } from 'next-intl';

import { Paragraph } from '@/components';
import { AUTHORS_PATH } from '@/constants/api';
import useQueryDataArray from '@/hooks/useQueryDataArray';
import { Author } from '@/types/models/authors';

import AuthorCard from './AuthorCard';
import LoadingAuthorCards from './LoadingAuthorCards';
import styles from './styles.module.scss';

const AUTHORS_LIMIT = 4;
const REQUEST_URL = `${process.env.NEXT_PUBLIC_SERVER_URL}${AUTHORS_PATH}?_limit=${AUTHORS_LIMIT}`;

const ListOfAuthors: React.FC = () => {
  const t = useTranslations('HomePage');

  const { data, isLoading, error } = useQueryDataArray<Author>(REQUEST_URL);

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
