import { Paragraph } from '@/components';
import { AppRoutes } from '@/constants/routes';
import { Link } from '@/navigation';
import { CategoriesType } from '@/types/categories';

import styles from './styles.module.scss';

export interface CategoryItemProps {
  title: CategoriesType;
  description: string;
  icon: React.ReactNode;
  selected: boolean;
}

const Item: React.FC<CategoryItemProps> = ({ title, description, icon, selected }) => (
  <Link href={AppRoutes.CATEGORY}>
    <div className={`${styles.category} ${selected ? styles.selected : ''}`}>
      <div>{icon}</div>
      <h3>{title}</h3>
      <Paragraph style="dark">{description}</Paragraph>
    </div>
  </Link>
);

export default Item;
