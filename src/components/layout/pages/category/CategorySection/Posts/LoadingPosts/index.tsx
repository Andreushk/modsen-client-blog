import { Spinner } from '@/components';

import styles from './styles.module.scss';

const LoadingPosts: React.FC = () => (
  <div className={styles.loading_posts}>
    <Spinner />
  </div>
);

export default LoadingPosts;
