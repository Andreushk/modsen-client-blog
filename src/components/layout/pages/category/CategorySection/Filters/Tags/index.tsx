import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import React from 'react';

import { Paragraph, Tag } from '@/components';
import { TAG_DATA_ATTRIBUTE } from '@/components/common/Tag';
import { SERVER_URL, ServerPaths } from '@/constants/api';
import { AppRoutesQueryParameters } from '@/constants/routes';
import useQueryDataArray from '@/hooks/useQueryDataArray';
import getTagFromParentElement from '@/utils/getTagFromParentElement';

import LoadingTags from './LoadingTags';
import styles from './styles.module.scss';

interface ComponentProps {
  onTagClick: (clickedTag: string) => void;
}

const Tags: React.FC<ComponentProps> = ({ onTagClick }) => {
  const { data, isLoading, error } = useQueryDataArray<string>(`${SERVER_URL}${ServerPaths.TAGS}`);

  const t = useTranslations('CategoryPage');
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const selectedTag = searchParams.get(AppRoutesQueryParameters.TAG);

  const handleTagsContainerClick = (e: React.MouseEvent): void => {
    const clickedElement = e.target as HTMLElement;
    const tag: string | null = getTagFromParentElement(clickedElement, TAG_DATA_ATTRIBUTE);

    if (tag) {
      const params = new URLSearchParams(searchParams);
      params.set(AppRoutesQueryParameters.TAG, tag);
      onTagClick(tag);
      replace(`${pathname}?${params}`, { scroll: false });
    }
  };

  return (
    <div className={styles.filter_tags_container}>
      <h2>{t('filters.all-tags')}</h2>
      <div className={styles.filter_tags_container_tags} onClick={handleTagsContainerClick}>
        {isLoading && <LoadingTags />}
        {data && (
          <div className={styles.filter_tags_container_tags} onClick={handleTagsContainerClick}>
            {data.map((tagValue) => (
              <Tag selected={selectedTag?.toLowerCase() === tagValue}>{tagValue}</Tag>
            ))}
          </div>
        )}
        {error && <Paragraph style="dark">{error}</Paragraph>}
      </div>
    </div>
  );
};

export default React.memo(Tags);
