'use client';

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

import { POSTS_PATH, SERVER_URL } from '@/constants/api';
import { AppRoutesQueryParameters } from '@/constants/routes';
import useDebounce from '@/hooks/useDebounce';
import useQueryDataArray from '@/hooks/useQueryDataArray';
import { Post } from '@/types/models/posts';

import Filters from './Filters';
import Posts from './Posts';
import styles from './styles.module.scss';

const CategorySection: React.FC = () => {
  const searchParams = useSearchParams();
  const categoryFromURL = searchParams.get(AppRoutesQueryParameters.CATEGORY);
  const tagFromURL = searchParams.get(AppRoutesQueryParameters.TAG);

  const [searchInputValue, setSearchInputValue] = useState<string>(tagFromURL ?? '');
  const debouncedTagValue = useDebounce(searchInputValue);

  const categoryQueryString = categoryFromURL ? `category=${categoryFromURL}` : null;
  const tagQueryString = debouncedTagValue.length > 0 ? `tags_like=${debouncedTagValue}` : null;

  const { data, isLoading, error } = useQueryDataArray<Post>(
    `${SERVER_URL}${POSTS_PATH}?${categoryQueryString ?? ''}${tagQueryString ? `&${tagQueryString}` : ''}`,
  );

  return (
    <section className={styles.category_search}>
      <Posts posts={data} isLoading={isLoading} error={error} />
      <Filters searchInputValue={searchInputValue} onSearchInputChange={setSearchInputValue} />
    </section>
  );
};

export default CategorySection;
