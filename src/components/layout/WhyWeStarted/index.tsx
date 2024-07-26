import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Button, Caption, Paragraph } from '@/components';

import styles from './styles.module.scss';

const WhyWeStarted: React.FC = () => {
  const t = useTranslations('HomePage');

  return (
    <section className={styles.why_we_started}>
      <div className={styles.why_we_started_container}>
        <div>
          <Image src="/images/group-of-people.jpeg" width={949} height={705} alt="" />
        </div>
        <div className={styles.why_we_started_information}>
          <Caption style="dark" bolded>
            {t('why-we-started.caption')}
          </Caption>
          <h1>{t('why-we-started.title')}</h1>
          <Paragraph style="dark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip.
          </Paragraph>
          <div>
            <Button styleType="yellow">{t('why-we-started.discover')}</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWeStarted;
