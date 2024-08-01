import fetchData from '@/api/fetchData';
import { SERVER_URL, ServerPaths } from '@/constants/api';
import { Author } from '@/types/models/authors';

import Credentials from './Credentials';
import styles from './styles.module.scss';

interface ComponentProps {
  id: string;
}

const AuthorHeader: React.FC<ComponentProps> = async ({ id }) => {
  const authorData = await fetchData<Author>(`${SERVER_URL}${ServerPaths.AUTHORS}?id=${id}`);

  return (
    <section className={styles.author_header}>
      <Credentials author={authorData} />
      <div className={styles.author_header_color_line}>
        <div />
        <div />
      </div>
    </section>
  );
};

export default AuthorHeader;
