import Image from 'next/image';

import { Paragraph } from '@/components';

import styles from './styles.module.scss';

const KnowMoreAboutOurTeam: React.FC = () => (
  <section className={styles.know_more_about_our_team}>
    <div className={styles.know_more_about_our_team_information}>
      <h2>Our team of creatives</h2>
      <h4>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
      </h4>
      <Paragraph style="dark">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat.
      </Paragraph>
    </div>
    <div className={styles.know_more_about_our_team_image}>
      <Image src="/images/arms.jpg" width={624} height={480} alt="Your team" />
      <div />
    </div>
  </section>
);

export default KnowMoreAboutOurTeam;
