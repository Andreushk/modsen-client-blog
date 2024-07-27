import { CategoriesType } from '@/types/categories';

import Item from './Item';
import CATEGORY_OPTIONS from './options';
import styles from './styles.module.scss';

interface ComponentProps {
  selectedCategory: CategoriesType;
}

const Catagories: React.FC<ComponentProps> = ({ selectedCategory }) => (
  <div className={styles.categories}>
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
);

export default Catagories;
