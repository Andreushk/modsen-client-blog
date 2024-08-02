import { inter } from '@/styles/fonts';

import styles from './styles.module.scss';

interface ComponentProps {
  children: React.ReactNode;
  style: 'light' | 'dark';
  bolded?: boolean;
}

const Caption: React.FC<ComponentProps> = ({ children, style, bolded = false }) => (
  <p
    className={`${inter.className} ${styles.caption} ${style === 'dark' ? styles.dark : styles.light} ${bolded ? styles.bolded : ''}`}
  >
    {children}
  </p>
);

export default Caption;
