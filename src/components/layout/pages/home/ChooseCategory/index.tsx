import { useTranslations } from 'next-intl';

import { Catagories } from '@/components';
import { CategoriesType } from '@/types/categories';

import styles from './styles.module.scss';

interface ComponentProps {
  selectedCategory?: CategoriesType;
}

const ChooseCategory: React.FC<ComponentProps> = ({ selectedCategory = 'startup' }) => {
  const t = useTranslations('HomePage');

  return (
    <section className={styles.choose_category}>
      <h2>{t('choose-category')}</h2>
      <Catagories selectedCategory={selectedCategory} />
    </section>
  );
};

export default ChooseCategory;
