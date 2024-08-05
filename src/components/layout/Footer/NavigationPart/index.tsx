import { Logo, Navigation } from '@/components';

import styles from './styles.module.scss';

const NavigationPart: React.FC = () => (
  <div className={styles.footer_navigation} data-testid="footer-navigation">
    <Logo />
    <Navigation withPrivacyPolicy />
  </div>
);

export default NavigationPart;
