import Hero from './components/Hero';
import AboutSection from './components/aboutSection';
import Navbar from './components/Navbar';

export default function Page() {
  return (
    <main className="min-h-screen bg-black">
    <Navbar />
    <Hero />
    <AboutSection />

    </main>
  );
}
