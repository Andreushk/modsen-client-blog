import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Caption, Paragraph } from '@/components';

import styles from './styles.module.scss';

const Overview: React.FC = () => {
  const t = useTranslations('AboutUsPage');

  return (
    <section className={styles.overview}>
      <div className={styles.overview_image}>
        <Image
          src="/images/group-of-people-wide.jpg"
          width={1280}
          height={444}
          alt="Our team photo"
        />
        <div className={styles.overview_image_colorful_line}>
          <div />
          <div />
        </div>
        <div className={styles.overview_image_statistics}>
          <div>
            <span>12+</span>
            <Paragraph style="dark">{t('overview.statistics.blogs-published')}</Paragraph>
          </div>
          <div>
            <span>12K+</span>
            <Paragraph style="dark">{t('overview.statistics.views-on-finsweet')}</Paragraph>
          </div>
          <div>
            <span>30K+</span>
            <Paragraph style="dark">{t('overview.statistics.total-active-users')}</Paragraph>
          </div>
        </div>
      </div>
      <div className={styles.overview_information}>
        <div>
          <Caption style="dark" bolded>
            {t('overview.mission.caption')}
          </Caption>
          <h3>{t('overview.mission.title')}</h3>
          <Paragraph style="dark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque
            viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.
          </Paragraph>
        </div>
        <div>
          <Caption style="dark" bolded>
            {t('overview.vision.caption')}
          </Caption>
          <h3>{t('overview.vision.title')}</h3>
          <Paragraph style="dark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque
            viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.
          </Paragraph>
        </div>
      </div>
    </section>
  );
};

export default Overview;
