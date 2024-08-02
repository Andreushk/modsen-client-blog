import { inter } from '@/styles/fonts';

import styles from './styles.module.scss';

interface ComponentProps {
  children: React.ReactNode;
  style: 'light' | 'grayed' | 'dark';
  small?: boolean;
}

const Paragraph: React.FC<ComponentProps> = ({ children, style, small = false }) => (
  <p
    className={`${inter.className} ${styles.paragraph} ${style === 'dark' ? styles.dark : ''} ${style === 'light' ? styles.light : ''} ${style === 'grayed' ? styles.grayed : ''} ${small ? styles.small : ''}`}
  >
    {children}
  </p>
);

export default Paragraph;
