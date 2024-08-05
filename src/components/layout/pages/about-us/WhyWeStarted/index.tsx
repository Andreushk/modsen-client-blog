import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Paragraph } from '@/components';

import styles from './styles.module.scss';

const IMAGE_PATH = '/images/team-at-stairs.jpg';
const IMAGE_ALT =
  'A team of colleagues sitting on steps outside an office, engaged in discussion and collaboration';

const WhyWeStarted: React.FC = () => {
  const t = useTranslations('AboutUsPage');

  return (
    <section className={styles.know_more_about_our_team}>
      <div className={styles.know_more_about_our_team_image}>
        <Image src={IMAGE_PATH} width={624} height={480} quality={50} alt={IMAGE_ALT} />
        <div />
      </div>
      <div className={styles.know_more_about_our_team_information}>
        <h2>{t('why-we-started.title')}</h2>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </h4>
        <Paragraph style="dark">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat.
        </Paragraph>
      </div>
    </section>
  );
};

export default WhyWeStarted;
