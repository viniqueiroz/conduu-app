import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import AboutHeroSection from '../components/AboutHeroSection';
import OurStorySection from '../components/OurStorySection';
import ValuesSection from '../components/ValuesSection';
import TeamSection from '../components/TeamSection';

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        <AboutHeroSection />
        <OurStorySection />
        <ValuesSection />
        <TeamSection />
      </main>
      <Footer />
    </>
  );
}