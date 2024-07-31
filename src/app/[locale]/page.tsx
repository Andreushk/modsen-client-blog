import { Metadata } from 'next';

import {
  AboutAndMission,
  ChooseCategory,
  FeaturedPost,
  HomeHero,
  JoinOurTeam,
  ListOfAuthors,
  LogoComponent,
  SpecialPost,
  Testimonials,
} from '@/components';

export const metadata: Metadata = {
  title: 'Modsen Client Blog | Home',
  description:
    'Check out the latest publications from our authors! You will definitely find something interesting for you. Explore the different categories of posts, see our history and reviews',
};

const Home: React.FC = () => (
  <>
    <HomeHero />
    <FeaturedPost />
    <AboutAndMission />
    <ChooseCategory />
    <SpecialPost />
    <ListOfAuthors />
    <LogoComponent />
    <Testimonials />
    <JoinOurTeam />
  </>
);

export default Home;
