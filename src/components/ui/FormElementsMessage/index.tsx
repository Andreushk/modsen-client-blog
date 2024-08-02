import { PropsWithChildren } from 'react';

import styles from './styles.module.scss';

const FormElementsMessage: React.FC<PropsWithChildren> = ({ children }) => (
  <span className={styles.message}>{children}</span>
);

export default FormElementsMessage;
