import React from 'react';

import { AppRoutes } from '@/constants/routes';
import { Link } from '@/navigation';
import { inter } from '@/styles/fonts';

import styles from './styles.module.scss';

const LOGO_VALUE = 'Modsen Client Blog';

const Logo: React.FC = () => (
  <div className={inter.className}>
    <h1 className={styles.logo}>
      <Link href={AppRoutes.BASIC}>{LOGO_VALUE}</Link>
    </h1>
  </div>
);

export default React.memo(Logo);
