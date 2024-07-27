import Image from 'next/image';
import React from 'react';

import { Paragraph } from '@/components';
import { AppRoutes } from '@/constants/routes';
import SOCIAL_MEDIA_ICONS from '@/constants/socialMediaIcons';
import { Link, useRouter } from '@/navigation';
import { Author, SocialMediasType } from '@/types/models/authors';

import styles from './styles.module.scss';

type ComponentProps = Omit<Author, 'description' | 'postIds'>;

const AuthorCard: React.FC<ComponentProps> = ({ id, name, profileImageId, socialLinks }) => {
  const router = useRouter();

  const handleCardClick = (): void => {
    router.push(`${AppRoutes.AUTHOR}/${id}`);
  };

  return (
    <div className={styles.author_card} onClick={handleCardClick}>
      <div className={styles.author_card_image_circle_container}>
        <div>
          <Image
            src={`/images/author${profileImageId}.jpg`}
            width={128}
            height={128}
            alt="Author picture"
          />
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
              {SOCIAL_MEDIA_ICONS[iconName as SocialMediasType]}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default React.memo(AuthorCard);
