import React from 'react';

import { Spinner } from '@/components';

import styles from './styles.module.scss';

const LoadingAllPostsPart: React.FC = () => (
  <div className={styles.loading_container}>
    <Spinner />
  </div>
);

export default React.memo(LoadingAllPostsPart);
