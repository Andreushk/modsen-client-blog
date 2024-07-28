import {
  AboutUsHeader,
  JoinOurTeam,
  KnowMoreAboutOurTeam,
  ListOfAuthors,
  Overview,
  WhyWeStarted,
} from '@/components';

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
