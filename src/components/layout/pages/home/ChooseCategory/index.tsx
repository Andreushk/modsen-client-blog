import { useTranslations } from 'next-intl';

import { Catagories } from '@/components';

import styles from './styles.module.scss';

const ChooseCategory: React.FC = () => {
  const t = useTranslations('HomePage');

  return (
    <section className={styles.choose_category}>
      <h2>{t('choose-category')}</h2>
      <Catagories />
    </section>
  );
};

export default ChooseCategory;
