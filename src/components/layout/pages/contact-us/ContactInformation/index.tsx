import { useTranslations } from 'next-intl';

import Paragraph from '@/components/common/Paragraph';
import { inter } from '@/styles/fonts';

import styles from './styles.module.scss';

const ContactInformation: React.FC = () => {
  const t = useTranslations('ContactUsPage');

  return (
    <section className={styles.contact_us}>
      <div className={styles.contact_us_information}>
        <span className={`${styles.contact_us_information_caption} ${inter.className}`}>
          {t('contact-us.working-hours.caption')}
        </span>
        <div className={styles.contact_us_information_divider} />
        <h5>{t('contact-us.working-hours.days')}</h5>
        <h5>{t('contact-us.working-hours.time')}</h5>
        <Paragraph style="dark">{t('contact-us.working-hours.support')}</Paragraph>
      </div>
      <div className={styles.contact_us_information}>
        <span className={`${styles.contact_us_information_caption} ${inter.className}`}>
          {t('contact-us.contact.caption')}
        </span>
        <div className={styles.contact_us_information_divider} />
        <h5>
          <a href="tel:+020 79993 2905">{t('contact-us.contact.phone')}</a>
        </h5>
        <Paragraph style="dark">
          <a href="mailto:hello@finsweet.com">{t('contact-us.contact.email')}</a>
        </Paragraph>
      </div>
    </section>
  );
};

export default ContactInformation;
