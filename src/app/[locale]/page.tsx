import {
  AboutAndMission,
  ChooseCategory,
  FeaturedPost,
  HomeHero,
  ListOfAuthors,
  WhyWeStarted,
} from '@/components';

const Home: React.FC = () => (
  <>
    <HomeHero />
    <FeaturedPost />
    <AboutAndMission />
    <ChooseCategory />
    <WhyWeStarted />
    <ListOfAuthors />
  </>
);

export default Home;
