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
