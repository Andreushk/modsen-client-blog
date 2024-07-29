'use client';

import { Paragraph, Spinner } from '@/components';
import { AUTHORS_PATH, SERVER_URL } from '@/constants/api';
import useQueryData from '@/hooks/useQueryData';
import { Author } from '@/types/models/authors';

import Credentials from './Credentials';
import styles from './styles.module.scss';

interface ComponentProps {
  id: string;
}

const AuthorHeader: React.FC<ComponentProps> = ({ id }) => {
  const { data, isLoading, error } = useQueryData<Author>(`${SERVER_URL}${AUTHORS_PATH}?id=${id}`);

  return (
    <section className={styles.author_header}>
      {isLoading && <Spinner />}
      {data && <Credentials author={data} />}
      {error && <Paragraph style="dark">{error}</Paragraph>}
      <div className={styles.author_header_color_line}>
        <div />
        <div />
      </div>
    </section>
  );
};

export default AuthorHeader;
