import { getTranslations } from 'next-intl/server';

import fetchDataArray from '@/api/fetchDataArray';
import { AUTHORS_REQUEST_URL } from '@/constants/api';
import { Author } from '@/types/models/authors';

import AuthorCard from './AuthorCard';
import styles from './styles.module.scss';

interface ComponentProps {
  amountOfAuthors?: number;
}

const AUTHORS_LIMIT = 4;

const ListOfAuthors: React.FC<ComponentProps> = async ({ amountOfAuthors }) => {
  const t = await getTranslations('HomePage');
  const authorsData = await fetchDataArray<Author[]>(
    `${AUTHORS_REQUEST_URL}?_limit=${amountOfAuthors ?? AUTHORS_LIMIT}`,
  );

  return (
    <section className={styles.authors_section}>
      <h2>{t('authors-list')}</h2>
      <div className={styles.list_container}>
        {authorsData.map(({ id, name, profileImageId, socialLinks }) => (
          <AuthorCard
            key={id}
            id={id}
            name={name}
            profileImageId={profileImageId}
            socialLinks={socialLinks}
          />
        ))}
      </div>
    </section>
  );
};

export default ListOfAuthors;
