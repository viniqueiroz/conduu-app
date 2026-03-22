import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ForStudentsSection from './components/ForStudentsSection';
import ForInstructorsSection from './components/ForInstructorsSection';
import LeadGenSection from './components/LeadGenSection';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <ForStudentsSection />
        <ForInstructorsSection />
        <LeadGenSection />
      </main>
      <Footer />
    </>
  );
}