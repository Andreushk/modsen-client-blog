import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import React, { useCallback, useRef } from 'react';

import { Button } from '@/components';
import { AppRoutesQueryParameters } from '@/constants/routes';
import { sen } from '@/styles/fonts';

import styles from './styles.module.scss';

const SearchInput: React.FС = () => {
  const t = useTranslations('CategoryPage');
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const inputValue: string | null = searchParams.get(AppRoutesQueryParameters.TAG);

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;

    if (value.length > 15) {
      return;
    }

    const params = new URLSearchParams(searchParams);
    if (value.trim().length > 0) {
      params.set(AppRoutesQueryParameters.TAG, value);
    } else {
      params.delete(AppRoutesQueryParameters.TAG);
    }

    replace(`${pathname}?${params}`, { scroll: false });
  };

  const handleSearchButtonClick = useCallback(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  return (
    <div className={styles.filters_search_input}>
      <input
        value={inputValue ?? ''}
        className={sen.className}
        placeholder={t('filters.input-placeholder')}
        ref={searchInputRef}
        onChange={handleSearchInputChange}
      />
      <div className={styles.filters_search_input_button}>
        <Button styleType="yellow" onClick={handleSearchButtonClick}>
          Search
        </Button>
      </div>
    </div>
  );
};

export default React.memo(SearchInput);
