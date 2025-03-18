import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureSection from './components/FeatureSection';
import AppExampleSection from './components/AppExampleSection';
import TestimonialSection from './components/TestimonialSection';
import PricingSection from './components/PricingSection';
import SignupCTASection from './components/CTASection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Navbar />
      <Hero />
      <FeatureSection />
      <AppExampleSection />
      <TestimonialSection />
      <PricingSection />
      <SignupCTASection />
      <Footer />
    </main>
  );
}