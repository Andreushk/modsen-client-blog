import React from 'react';

import styles from './style.module.scss';

interface ComponentProps {
  onClick: () => void;
}

const BurgerMenuButton: React.FC<ComponentProps> = ({ onClick }) => (
  <button type="button" className={styles.burger_button} onClick={onClick}>
    <span />
    <span />
    <span />
  </button>
);

export default React.memo(BurgerMenuButton);
