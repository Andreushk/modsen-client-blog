import {
  AboutAndMission,
  ChooseCategory,
  FeaturedPost,
  HomeHero,
  ListOfAuthors,
  Partners,
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
    <Partners />
  </>
);

export default Home;
