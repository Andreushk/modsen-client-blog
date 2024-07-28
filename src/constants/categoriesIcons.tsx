import BusinessIcon from '@/assets/icons/buildings.svg';
import TechnologyIcon from '@/assets/icons/cyborg.svg';
import EconomyIcon from '@/assets/icons/economy.svg';
import StartupIcon from '@/assets/icons/rocket.svg';
import { CategoriesType } from '@/types/categories';

const CATEGORIES_ICONS: Record<CategoriesType, React.ReactNode> = {
  startup: <StartupIcon />,
  business: <BusinessIcon />,
  economy: <EconomyIcon />,
  technology: <TechnologyIcon />,
};

export default CATEGORIES_ICONS;
