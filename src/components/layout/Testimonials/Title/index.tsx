import { useTranslations } from 'next-intl';
import React from 'react';

import { Caption, Paragraph } from '@/components';

import styles from './styles.module.scss';

const Title: React.FC = () => {
  const t = useTranslations('HomePage');

  return (
    <div className={styles.container}>
      <Caption style="dark">{t('testimonials.caption')}</Caption>
      <h2>{t('testimonials.title')}</h2>
      <Paragraph style="dark">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
      </Paragraph>
    </div>
  );
};

export default React.memo(Title);
