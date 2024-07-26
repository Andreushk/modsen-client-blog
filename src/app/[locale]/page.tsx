import {
  AboutAndMission,
  ChooseCategory,
  FeaturedPost,
  HomeHero,
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
  </>
);

export default Home;
