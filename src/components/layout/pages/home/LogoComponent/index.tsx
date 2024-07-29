import { Looper } from '@/components';

import PARTNERS_OPTIONS from './options';
import styles from './styles.module.scss';

const LogoComponent: React.FC = () => (
  <section>
    <Looper speed={35} direction="left">
      <div className={styles.logos_container}>
        {PARTNERS_OPTIONS.map((icon, i) => (
          <div key={i}>{icon}</div>
        ))}
      </div>
    </Looper>
  </section>
);

export default LogoComponent;
