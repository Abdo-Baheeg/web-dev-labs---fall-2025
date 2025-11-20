import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedCourses from './components/FeaturedCourses';
import TrustedCompanies from './components/TrustedCompanies';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedCourses />
      <TrustedCompanies />
    </>
  );
};

export default HomePage;