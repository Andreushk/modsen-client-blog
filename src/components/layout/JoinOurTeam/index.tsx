import { useTranslations } from 'next-intl';

import { Button, Paragraph } from '@/components';
import { AppRoutes } from '@/constants/routes';
import { Link } from '@/navigation';

import styles from './styles.module.scss';

const JoinOurTeam: React.FC = () => {
  const t = useTranslations('HomePage');

  return (
    <section className={styles.join_us}>
      <h2>{t('join-our-team.title')}</h2>
      <Paragraph style="dark">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
      </Paragraph>
      <div className={styles.join_us_button}>
        <Link href={AppRoutes.CONTACT_US}>
          <Button styleType="yellow">{t('join-our-team.button')}</Button>
        </Link>
      </div>
    </section>
  );
};

export default JoinOurTeam;
