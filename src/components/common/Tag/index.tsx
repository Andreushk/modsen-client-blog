import React from 'react';

import { sen } from '@/styles/fonts';

import { ButtonsAttributesType } from '../../ui/Button';
import styles from './styles.module.scss';

export const TAG_DATA_ATTRIBUTE = 'data-tag-value';

interface ComponentProps extends ButtonsAttributesType {
  selected: boolean;
}

const Tag: React.FC<ComponentProps> = ({ children, selected, ...props }) => (
  <button
    type="button"
    data-tag-value={children}
    className={`${sen.className} ${styles.tag} ${selected ? styles.selected : ''}`}
    {...props}
  >
    {children}
  </button>
);

export default React.memo(Tag);
