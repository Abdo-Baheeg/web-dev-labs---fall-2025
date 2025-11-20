import Hero from './components/Hero';
import EssentialSkills from './components/EssentialSkills';
import AICareer from './components/AICareer';
import CourseGrid from './components/CourseGrid';
import TrustedCompanies from './components/TrustedCompanies';
import Footer from './components/Footer';

const HomePage = () => {
  return (
    <>
      <Hero />
      <EssentialSkills />
      <AICareer />
      <CourseGrid />
      <TrustedCompanies />
      <Footer />
    </>
  );
};

export default HomePage;