import BuildingsIcon from '@/assets/icons/buildings.svg';
import CyborgIcon from '@/assets/icons/cyborg.svg';
import EconomyIcon from '@/assets/icons/economy.svg';
import RocketIcon from '@/assets/icons/rocket.svg';
import { BUSINESS, ECONOMY, STARTUP, TECHNOLOGY } from '@/constants/categories';

import { CategoryItemProps } from './Item';

type CategoryOptionsType = Omit<CategoryItemProps, 'selected' | 'type'>;

const CATEGORY_OPTIONS: CategoryOptionsType[] = [
  {
    title: BUSINESS,
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    icon: <BuildingsIcon />,
  },
  {
    title: STARTUP,
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    icon: <RocketIcon />,
  },
  {
    title: ECONOMY,
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    icon: <EconomyIcon />,
  },
  {
    title: TECHNOLOGY,
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    icon: <CyborgIcon />,
  },
];

export default CATEGORY_OPTIONS;
