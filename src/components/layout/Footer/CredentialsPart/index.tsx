import { Paragraph } from '@/components';
import SOCIAL_MEDIA_ICONS from '@/constants/socialMediaIcons';
import { Link } from '@/navigation';
import { SocialMediasType } from '@/types/models/authors';

import SOCIAL_MEDIA_OPTIONS from './options';
import styles from './styles.module.scss';

const ADDRESS = 'Finstreet 118 2561 Fintown';
const CONTACTS = 'Hello@finsweet.com 020 7993 2905';

const CredentialsPart: React.FC = () => (
  <div className={styles.footer_credentials}>
    <div>
      <Paragraph style="light">{ADDRESS}</Paragraph>
      <Paragraph style="light">{CONTACTS}</Paragraph>
    </div>
    <div>
      {SOCIAL_MEDIA_OPTIONS.map(({ href, iconName }) => (
        <Link href={href}>{SOCIAL_MEDIA_ICONS[iconName as SocialMediasType]}</Link>
      ))}
    </div>
  </div>
);

export default CredentialsPart;
