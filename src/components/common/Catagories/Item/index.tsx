'use client';

import { Paragraph } from '@/components';
import { AppRoutes } from '@/constants/routes';
import { Link } from '@/navigation';
import { CategoriesType } from '@/types/categories';

import styles from './styles.module.scss';

export type CategoriesSizeTypes = 'small' | 'regular';

export interface CategoryItemProps {
  title: CategoriesType;
  description: string;
  icon: React.ReactNode;
  selected: boolean;
  type: CategoriesSizeTypes;
  onClick?: (category: CategoriesType) => void;
}

const Item: React.FC<CategoryItemProps> = ({
  title,
  description,
  icon,
  selected,
  type,
  onClick,
}) => {
  const handleCategoryClick = (): void => {
    if (onClick) {
      onClick(title);
    }
  };

  const category = (
    <div
      className={`${styles.category} ${selected ? styles.selected : ''} ${type === 'small' ? styles.small : ''}`}
      onClick={handleCategoryClick}
    >
      <div>{icon}</div>
      <h3>{title}</h3>
      {type !== 'small' && <Paragraph style="dark">{description}</Paragraph>}
    </div>
  );

  return (
    <>
      {onClick && category}
      {!onClick && <Link href={`${AppRoutes.CATEGORY}/${title}`}>{category}</Link>}
    </>
  );
};

export default Item;
