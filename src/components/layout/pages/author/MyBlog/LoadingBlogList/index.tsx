import { Spinner } from '@/components';

import styles from './styles.module.scss';

const LoadingBlog: React.FC = () => (
  <div className={styles.loading_my_blog}>
    <Spinner />
  </div>
);

export default LoadingBlog;
