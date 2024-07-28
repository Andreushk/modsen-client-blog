import { Spinner } from '@/components';

import styles from './styles.module.scss';

const LoadingSlider: React.FC = () => (
  <div className={styles.loading_slider}>
    <Spinner />
  </div>
);

export default LoadingSlider;
