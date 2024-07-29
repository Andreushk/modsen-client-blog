'use client';

import { useSearchParams } from 'next/navigation';

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
  const category = searchParams.get(AppRoutesQueryParameters.CATEGORY);
  const tag = searchParams.get(AppRoutesQueryParameters.TAG);

  const debouncedTagValue = useDebounce(tag ?? '');

  const categoryQueryString = category ? `category=${category}` : null;
  const tagQueryString = debouncedTagValue.length > 0 ? `tags_like=${debouncedTagValue}` : '';

  const { data, isLoading, error } = useQueryDataArray<Post>(
    `${SERVER_URL}${POSTS_PATH}?${categoryQueryString ?? ''}${tagQueryString ? `&${tagQueryString}` : ''}`,
  );

  return (
    <section className={styles.category_search}>
      <Posts posts={data} isLoading={isLoading} error={error} />
      <Filters />
    </section>
  );
};

export default CategorySection;
