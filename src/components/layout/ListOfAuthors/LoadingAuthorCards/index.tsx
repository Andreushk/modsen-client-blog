import { Spinner } from '@/components';

import styles from './styles.module.scss';

const LoadingAuthorCards: React.FC = () => (
  <div className={styles.loading_author_cards}>
    <Spinner />
  </div>
);

export default LoadingAuthorCards;
