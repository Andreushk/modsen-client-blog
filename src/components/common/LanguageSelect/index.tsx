'use client';

import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import React, { useTransition } from 'react';

import styles from './style.module.scss';

const LanguageSelect: React.FC = () => {
  const [, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  return (
    <label htmlFor="lang-select" className={styles.select}>
      <select defaultValue={localActive} id="lang-select" onChange={handleSelectChange}>
        <option value="en">English</option>
        <option value="ru">Russian</option>
      </select>
    </label>
  );
};

export default React.memo(LanguageSelect);
