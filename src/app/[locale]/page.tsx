import {
  AboutAndMission,
  ChooseCategory,
  FeaturedPost,
  HomeHero,
  WhyWeStarted,
} from '@/components';

const Home: React.FC = () => (
  <>
    <HomeHero />
    <FeaturedPost />
    <AboutAndMission />
    <ChooseCategory />
    <WhyWeStarted />
  </>
);

export default Home;
