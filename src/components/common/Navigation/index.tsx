import { useTranslations } from 'next-intl';
import React from 'react';

import { AppRoutes } from '@/constants/routes';
import { Link } from '@/navigation';
import { inter } from '@/styles/fonts';

import { NAVIGATION_OPTIONS, PRIVACY_POLICY_HREF } from './options';
import style from './style.module.scss';

type DirectionTypes = 'column' | 'row';

interface ComponentProps {
  direction?: DirectionTypes;
  withPrivacyPolicy?: boolean;
  onLinkClick?: () => void;
}

const Navigation: React.FC<ComponentProps> = ({
  direction = 'row',
  withPrivacyPolicy = false,
  onLinkClick,
}) => {
  const t = useTranslations('Header');

  const ulClasses: string = `${style.nav_list} ${direction === 'column' ? style.column : ''} ${inter.className}`;

  return (
    <nav>
      <ul className={ulClasses}>
        {NAVIGATION_OPTIONS.map((href) => (
          <li key={href}>
            <Link href={href} className={style.nav_item} onClick={onLinkClick}>
              {t(href)}
            </Link>
          </li>
        ))}
        {withPrivacyPolicy && (
          <li>
            <Link href={AppRoutes.PRIVACY_POLICY} className={style.nav_item} onClick={onLinkClick}>
              {t(PRIVACY_POLICY_HREF)}
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default React.memo(Navigation);
