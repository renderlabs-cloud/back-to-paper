import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ExploitGallery from '@/components/ExploitGallery';
import StatsSection from '@/components/StatsSection';
import ManifestoSection from '@/components/ManifestoSection';
import DownloadSection from '@/components/DownloadSection';
import Footer from '@/components/Footer';

const Index = () => (
  <>
    <Navbar />
    <main className="max-w-7xl mx-auto px-6">
      <HeroSection />
      <ExploitGallery />
      <StatsSection />
      <ManifestoSection />
      <DownloadSection />
    </main>
    <Footer />
  </>
);

export default Index;
