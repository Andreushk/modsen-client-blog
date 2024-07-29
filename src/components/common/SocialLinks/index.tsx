import React from 'react';

import SOCIAL_MEDIA_ICONS from '@/constants/socialMediaIcons';
import { Link } from '@/navigation';
import { SocialMediasType } from '@/types/models/authors';

import styles from './styles.module.scss';

interface ComponentProps {
  socialMediaLinks: Record<SocialMediasType, string>;
}

const SocialLinks: React.FC<ComponentProps> = ({ socialMediaLinks }) => (
  <div className={styles.social_media_links}>
    {Object.entries(socialMediaLinks).map(([iconName, linkValue]) => (
      <Link key={iconName} href={linkValue}>
        <div>{SOCIAL_MEDIA_ICONS[iconName as SocialMediasType]}</div>
      </Link>
    ))}
  </div>
);
export default React.memo(SocialLinks);
