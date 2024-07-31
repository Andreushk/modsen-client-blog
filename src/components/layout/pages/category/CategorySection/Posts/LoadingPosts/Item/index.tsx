import { LoadingShimmer } from '@/components';

import styles from './styles.module.scss';

const Item: React.FC = () => (
  <div className={styles.loading_post}>
    <div className={styles.loading_post_image}>
      <LoadingShimmer />
    </div>
    <div className={styles.loading_post_information}>
      <div>
        <LoadingShimmer />
      </div>
      <div>
        <LoadingShimmer />
      </div>
      <div>
        <LoadingShimmer />
      </div>
    </div>
  </div>
);

export default Item;
