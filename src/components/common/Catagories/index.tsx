import { CategoriesType } from '@/types/categories';

import Item, { CategoriesSizeTypes } from './Item';
import CATEGORY_OPTIONS from './options';
import styles from './styles.module.scss';

interface ComponentProps {
  type?: CategoriesSizeTypes;
  selectedCategory?: CategoriesType | null;
  onCategoryClick?: (clickedCategory: CategoriesType) => void;
}

const Catagories: React.FC<ComponentProps> = ({
  type = 'regular',
  selectedCategory,
  onCategoryClick,
}) => (
  <div className={`${styles.categories} ${type === 'small' ? styles.small : ''}`}>
    {CATEGORY_OPTIONS.map(({ title, description, icon }) => (
      <Item
        key={title}
        type={type}
        title={title}
        description={description}
        icon={icon}
        selected={selectedCategory?.toLocaleLowerCase() === title.toLocaleLowerCase()}
        onClick={onCategoryClick}
      />
    ))}
  </div>
);

export default Catagories;
