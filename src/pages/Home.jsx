import HeroSection from '../components/home/HeroSection';
import ProfessionalExcellence from '../components/home/ProfessionalExcellence';
import ExpertiseSection from '../components/home/ExpertiseSection';
import CTASection from '../components/home/CTASection';

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProfessionalExcellence />
      <ExpertiseSection />
      <CTASection />
    </div>
  );
};

export default Home;