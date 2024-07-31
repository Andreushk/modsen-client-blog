import { useTranslations } from 'next-intl';

import { Paragraph } from '@/components';

import styles from './styles.module.scss';

const PrivacyPolicyHeader: React.FC = () => {
  const t = useTranslations('PrivacyPolicyPage');

  return (
    <section className={styles.privacy_policy_header}>
      <h1>{t('title')}</h1>
      <Paragraph style="dark">{`${t('last-updated')} ${new Date().getTime()}`}</Paragraph>
    </section>
  );
};

export default PrivacyPolicyHeader;
