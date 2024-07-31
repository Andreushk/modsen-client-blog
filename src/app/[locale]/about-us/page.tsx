import { Metadata } from 'next';

import {
  AboutUsHeader,
  JoinOurTeam,
  KnowMoreAboutOurTeam,
  ListOfAuthors,
  Overview,
  WhyWeStarted,
} from '@/components';

export const metadata: Metadata = {
  title: 'Modsen Client Blog | About Us',
  description: 'Learn our history, how we got started and what our mission is.',
  keywords: 'blog, authors, privacy policy',
  openGraph: {
    title: `Modsen Client Blog | About Us`,
    description: `Learn our history, how we got started and what our mission is.`,
    siteName: 'Modsen Client Blog Site',
  },
};

const AboutUs: React.FC = () => (
  <>
    <AboutUsHeader />
    <Overview />
    <KnowMoreAboutOurTeam />
    <WhyWeStarted />
    <ListOfAuthors amountOfAuthors={8} />
    <JoinOurTeam />
  </>
);

export default AboutUs;
