import {
  AboutAndMission,
  ChooseCategory,
  FeaturedPost,
  HomeHero,
  ListOfAuthors,
  LogoComponent,
  SpecialPost,
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
  </>
);

export default Home;
