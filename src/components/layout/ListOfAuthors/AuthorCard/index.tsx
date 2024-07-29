import Image from 'next/image';
import React from 'react';

import { Paragraph, SocialLinks } from '@/components';
import { AppRoutes } from '@/constants/routes';
import { useRouter } from '@/navigation';
import { Author } from '@/types/models/authors';

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
      <SocialLinks socialMediaLinks={socialLinks} />
    </div>
  );
};

export default React.memo(AuthorCard);
