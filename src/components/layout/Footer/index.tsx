import CredentialsPart from './CredentialsPart';
import NavigationPart from './NavigationPart';
import styles from './styles.module.scss';
import SubscribePart from './SubscribePart';

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.footer_content}>
      <NavigationPart />
      <SubscribePart />
      <CredentialsPart />
    </div>
  </footer>
);

export default Footer;
