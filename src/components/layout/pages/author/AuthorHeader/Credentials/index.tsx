import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Paragraph, SocialLinks } from '@/components';
import { Author } from '@/types/models/authors';

import styles from './styles.module.scss';

interface ComponentProps {
  author: Author;
}

const Credentials: React.FC<ComponentProps> = ({ author }) => {
  const { profileImageId, name, socialLinks } = author;
  const t = useTranslations('AuthorPage');

  return (
    <div className={styles.author_header_content}>
      <div className={styles.author_header_content_image}>
        <Image
          src={`/images/author${profileImageId}.jpg`}
          width={251}
          height={294}
          alt="Author picture"
        />
      </div>
      <div>
        <h1>
          {t('hey-there-first-part')} {name} {t('hey-there-second-part')}
        </h1>
        <Paragraph style="dark">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris
          in aliquam sem. At risus viverra adipiscing at in tellus.
        </Paragraph>
        <SocialLinks socialMediaLinks={socialLinks} />
      </div>
    </div>
  );
};

export default Credentials;
