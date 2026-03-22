import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import BlogHeroSection from '../components/BlogHeroSection';
import PostList from '../components/PostList';

export default function BlogPage() {
  return (
    <>
      <Navigation />
      <main>
        <BlogHeroSection />
        <PostList />
      </main>
      <Footer />
    </>
  );
}