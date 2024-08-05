import { useTranslations } from 'next-intl';

import Caption from '@/components/ui/Caption';
import Paragraph from '@/components/ui/Paragraph';

import styles from './styles.module.scss';

const AboutUsHeader: React.FC = () => {
  const t = useTranslations('AboutUsPage');

  return (
    <section className={styles.about_us_header} data-testid="about-us-header">
      <div className={styles.about_us_header_title}>
        <Caption style="dark">{t('about-us-header.caption')}</Caption>
        <h1>{t('about-us-header.title')}</h1>
      </div>
      <div className={styles.about_us_header_description}>
        <Paragraph style="dark">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Paragraph>
      </div>
    </section>
  );
};

export default AboutUsHeader;
