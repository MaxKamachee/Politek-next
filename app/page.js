import Hero from './components/Hero';
import FeatureSection from './components/FeatureSection';
import HowItWorksSection from './components/HowItWorksSection';
import TestimonialSection from './components/TestimonialSection';
import DemoSection from './components/DemoSection';
import PricingSection from './components/PricingSection';
import CTASection from './components/CTASection';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Navbar />
      <Hero />
      <FeatureSection />
      <HowItWorksSection />
      <DemoSection />
      <TestimonialSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </main>
  );
}
