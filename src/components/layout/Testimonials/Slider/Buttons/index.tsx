import React from 'react';

import ArrowIcon from '@/assets/icons/arrow.svg';

import styles from './styles.module.scss';

interface ComponentProps {
  disabled: boolean;
  onPrev: () => void;
  onNext: () => void;
}

const Buttons: React.FC<ComponentProps> = ({ disabled, onPrev, onNext }) => (
  <div className={styles.buttons}>
    <button type="button" disabled={disabled} onClick={onPrev}>
      <ArrowIcon />
    </button>
    <button type="button" disabled={disabled} onClick={onNext}>
      <ArrowIcon />
    </button>
  </div>
);

export default React.memo(Buttons);
