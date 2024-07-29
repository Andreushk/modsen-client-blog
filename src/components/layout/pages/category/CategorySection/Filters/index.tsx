import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import React, { useCallback } from 'react';

import { Catagories } from '@/components';
import { AppRoutesQueryParameters } from '@/constants/routes';
import { CategoriesType } from '@/types/categories';

import SearchInput from './SearchInput';
import styles from './styles.module.scss';
import Tags from './Tags';

const Filters: React.FC = () => {
  const t = useTranslations('CategoryPage');
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const categoryFromURL = searchParams.get(
    AppRoutesQueryParameters.CATEGORY,
  ) as CategoriesType | null;

  const handleCategoryClick = useCallback(
    (clickedCategory: CategoriesType): void => {
      const params = new URLSearchParams(searchParams);
      params.set(AppRoutesQueryParameters.CATEGORY, clickedCategory);
      replace(`${pathname}?${params}`, { scroll: false });
    },
    [pathname, replace, searchParams],
  );

  return (
    <section className={styles.filters}>
      <SearchInput />
      <div>
        <h2>{t('filters.categories')}</h2>
        <Catagories
          type="small"
          selectedCategory={categoryFromURL}
          onCategoryClick={handleCategoryClick}
        />
      </div>
      <Tags />
    </section>
  );
};

export default React.memo(Filters);
