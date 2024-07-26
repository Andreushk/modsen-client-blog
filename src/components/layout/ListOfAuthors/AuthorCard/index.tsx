import Image from 'next/image';
import React from 'react';

import FacebookIcon from '@/assets/icons/facebook.svg';
import InstagramIcon from '@/assets/icons/instagram.svg';
import LinkedInIcon from '@/assets/icons/linkedin.svg';
import TwitterIcon from '@/assets/icons/twitter.svg';
import { Paragraph } from '@/components';
import { AppRoutes } from '@/constants/routes';
import { Link } from '@/navigation';
import { Author, SocialMediasType } from '@/types/models/authors';

import styles from './styles.module.scss';

type ComponentProps = Omit<Author, 'description' | 'postIds'>;

const SocialMediaIcons: Record<SocialMediasType, React.ReactNode> = {
  facebook: <FacebookIcon />,
  twitter: <TwitterIcon />,
  instagram: <InstagramIcon />,
  linkedin: <LinkedInIcon />,
};

const AuthorCard: React.FC<ComponentProps> = ({ id, name, profileImageId, socialLinks }) => (
  <Link href={`${AppRoutes.AUTHOR}/${id}`}>
    <div className={styles.author_card}>
      <div className={styles.author_card_image_circle_container}>
        <div>
          <Image src={`/images/author${profileImageId}.jpg`} width={128} height={128} alt="" />
        </div>
      </div>
      <h3>{name}</h3>
      <Paragraph style="dark" small>
        Content writer at @Company
      </Paragraph>
      <div className={styles.social_media_container}>
        {Object.entries(socialLinks).map(([iconName, linkValue]) => (
          <Link key={iconName} href={linkValue}>
            <div className={styles.social_media_item_container}>
              {SocialMediaIcons[iconName as SocialMediasType]}
            </div>
          </Link>
        ))}
      </div>
    </div>
  </Link>
);

export default React.memo(AuthorCard);
