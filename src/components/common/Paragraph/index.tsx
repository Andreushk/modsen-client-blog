import { inter } from '@/styles/fonts';

import styles from './styles.module.scss';

interface ComponentProps {
  children: React.ReactNode;
  style: 'light' | 'dark';
  small?: boolean;
}

const Paragraph: React.FC<ComponentProps> = ({ children, style, small = false }) => (
  <p
    className={`${inter.className} ${styles.paragraph} ${style === 'dark' ? styles.dark : styles.light} ${small ? styles.small : ''}`}
  >
    {children}
  </p>
);

export default Paragraph;
