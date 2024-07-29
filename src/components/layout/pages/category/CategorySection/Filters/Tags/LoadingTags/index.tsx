import { Spinner } from '@/components';

import styles from './styles.module.scss';

const LoadingTags: React.FC = () => (
  <div className={styles.loading_tags}>
    <Spinner />
  </div>
);

export default LoadingTags;
