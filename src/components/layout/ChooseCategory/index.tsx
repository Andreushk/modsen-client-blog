import { useTranslations } from 'next-intl';

import { CategoriesType } from '@/types/categories';

import Item from './Item';
import CATEGORY_OPTIONS from './options';
import styles from './styles.module.scss';

interface ComponentProps {
  selectedCategory?: CategoriesType;
}

const ChooseCategory: React.FC<ComponentProps> = ({ selectedCategory = 'startup' }) => {
  const t = useTranslations('HomePage');

  return (
    <section className={styles.choose_category}>
      <h2>{t('choose-category')}</h2>
      <div className={styles.choose_category_items_container}>
        {CATEGORY_OPTIONS.map(({ title, description, icon }) => (
          <Item
            key={title}
            title={title}
            description={description}
            icon={icon}
            selected={selectedCategory === title}
          />
        ))}
      </div>
    </section>
  );
};

export default ChooseCategory;
