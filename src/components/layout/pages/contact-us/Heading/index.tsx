import { useTranslations } from 'next-intl';

import { Paragraph } from '@/components';
import { inter } from '@/styles/fonts';

import styles from './styles.module.scss';

const Heading: React.FC = () => {
  const t = useTranslations('ContactUsPage');

  return (
    <section className={styles.heading} data-testid="contact-us-heading">
      <div className={styles.heading_content}>
        <span className={inter.className}>{t('heading.caption')}</span>
        <h1>{t('heading.title')}</h1>
        <Paragraph style="dark">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim.
        </Paragraph>
      </div>
    </section>
  );
};

export default Heading;
