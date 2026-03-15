import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ExploitGallery from '@/components/ExploitGallery';
import StatsSection from '@/components/StatsSection';
import ManifestoSection from '@/components/ManifestoSection';
import DownloadSection from '@/components/DownloadSection';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

/**
 * 🧠 REACT CONCEPT: Components
 * React apps are built from "components" — reusable, self-contained pieces of UI.
 * Each component is just a function that returns JSX (HTML-like syntax).
 * You compose them together like building blocks, as you see below.
 *
 * 🧠 REACT CONCEPT: JSX
 * The HTML-looking code below isn't real HTML — it's JSX, a syntax extension
 * that React transforms into JavaScript. That's why we can use {expressions}
 * inside it and why components are capitalized (to distinguish from HTML tags).
 */
const Index = () => (
  <>
    {/* 🧠 <> is a "Fragment" — a way to group elements without adding
        an extra DOM node. React components must return a single root element. */}
    <Navbar />
    <main className="max-w-7xl mx-auto px-6">
      <ScrollReveal>
        <HeroSection />
      </ScrollReveal>
      <ScrollReveal>
        <ExploitGallery />
      </ScrollReveal>
      <ScrollReveal>
        <StatsSection />
      </ScrollReveal>
      <ScrollReveal>
        <ManifestoSection />
      </ScrollReveal>
      <ScrollReveal direction="right">
        <DownloadSection />
      </ScrollReveal>
    </main>
    <Footer />
  </>
);

export default Index;
