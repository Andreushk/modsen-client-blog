import { inter } from '@/styles/fonts';

import styles from './styles.module.scss';

interface ComponentProps {
  children: React.ReactNode;
  style: 'light' | 'dark';
}

const Caption: React.FC<ComponentProps> = ({ children, style }) => (
  <p
    className={`${inter.className} ${styles.caption} ${style === 'dark' ? styles.dark : styles.light}`}
  >
    {children}
  </p>
);

export default Caption;
