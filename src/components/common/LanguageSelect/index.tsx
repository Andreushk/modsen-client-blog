'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useLocale } from 'next-intl';
import React from 'react';

import { sen } from '@/styles/fonts';

import styles from './style.module.scss';

const LanguageSelect: React.FC = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const localActive = useLocale();

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const nextLocale = e.target.value;

    const params = new URLSearchParams(searchParams);
    const pathnameParts = pathname.split('/');
    pathnameParts[1] = nextLocale;
    const newPath = pathnameParts.join('/');

    replace(`${newPath}${params.size > 0 ? `?${params}` : ''}`, { scroll: false });
  };

  return (
    <div className={styles.select}>
      <select className={sen.className} defaultValue={localActive} onChange={handleSelectChange}>
        <option value="en">English</option>
        <option value="ru">Russian</option>
      </select>
    </div>
  );
};

export default React.memo(LanguageSelect);
