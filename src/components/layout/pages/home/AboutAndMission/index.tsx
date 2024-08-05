import { useTranslations } from 'next-intl';

import { Caption, Paragraph } from '@/components';
import { AppRoutes } from '@/constants/routes';
import { Link } from '@/navigation';

import styles from './styles.module.scss';

const AboutAndMission: React.FC = () => {
  const t = useTranslations('HomePage');

  return (
    <section className={styles.about_and_mission}>
      <div className={styles.about_and_mission_content}>
        <div className={styles.about_and_mission_color_line}>
          <div />
          <div />
        </div>
        <div className={styles.about_and_mission_content_container}>
          <Caption style="dark" bolded>
            {t('about-mission.about.caption')}
          </Caption>
          <h2>{t('about-mission.about.title')}</h2>
          <Paragraph style="dark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Paragraph>
          <div className={styles.read_more}>
            <Link href={AppRoutes.ABOUT_US}>{t('about-mission.about.read-more')}</Link>
          </div>
        </div>
        <div className={styles.about_and_mission_content_container}>
          <Caption style="dark" bolded>
            {t('about-mission.mission.caption')}
          </Caption>
          <h3>{t('about-mission.mission.title')}</h3>
          <Paragraph style="dark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Paragraph>
        </div>
      </div>
    </section>
  );
};

export default AboutAndMission;
