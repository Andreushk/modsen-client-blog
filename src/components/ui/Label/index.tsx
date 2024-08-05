import { PropsWithChildren } from 'react';

import { inter } from '@/styles/fonts';

import styles from './styles.module.scss';

const Label: React.FC<PropsWithChildren> = ({ children }) => (
  <span className={`${inter.className} ${styles.label} `}>{children}</span>
);

export default Label;
