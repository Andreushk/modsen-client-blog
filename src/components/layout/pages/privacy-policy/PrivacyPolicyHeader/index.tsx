import { useLocale, useTranslations } from 'next-intl';

import { Paragraph } from '@/components';
import { LocaleTypes } from '@/types/locale';
import getPublicationDate from '@/utils/getPublicationDate';

import styles from './styles.module.scss';

const PrivacyPolicyHeader: React.FC = () => {
  const locale = useLocale() as LocaleTypes;
  const t = useTranslations('PrivacyPolicyPage');

  return (
    <section className={styles.privacy_policy_header}>
      <h1>{t('title')}</h1>
      <Paragraph style="dark">{`${t('last-updated')} ${getPublicationDate(new Date().getTime(), locale, false, true, true)}`}</Paragraph>
    </section>
  );
};

export default PrivacyPolicyHeader;
