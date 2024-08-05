import { PropsWithChildren } from 'react';

import styles from './styles.module.scss';

const ReadMoreButtonContainer: React.FC<PropsWithChildren> = ({ children }) => (
  <div className={styles.more_button_container}>{children}</div>
);

export default ReadMoreButtonContainer;
