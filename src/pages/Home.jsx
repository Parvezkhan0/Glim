import Hero from '../components/Hero';
import Problem from '../components/Problem';
import WhyGlim from "../components/WhyGlim";
import EarlyAccess from '../components/EarlyAccess';
import FAQs from '../components/FAQs';
import Footer from '../components/Footer';
import HowItWorksSection from '../components/HowItWorksSection';
import Header from '../components/Header';

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Problem />
      <WhyGlim />
      <HowItWorksSection />
      <EarlyAccess />
      <FAQs />
      <Footer />
    </div>
  );
};

export default Home;