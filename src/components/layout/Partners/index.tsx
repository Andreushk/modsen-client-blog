'use client';

import { Looper } from '@/components';

import PARTNERS_OPTIONS from './options';
import styles from './styles.module.scss';

const Partners: React.FC = () => (
  <section>
    <Looper speed={35} direction="left">
      <div className={styles.logos_container}>{PARTNERS_OPTIONS.map((icon) => icon)}</div>
    </Looper>
  </section>
);

export default Partners;
