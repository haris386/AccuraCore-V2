import Contact from '@/components/Contact';
import EverythingYouNeedSection from '@/components/EverythingYouNeedSection';
import FAQs from '@/components/FAQs';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import Intelligence from '@/components/Intelligence';
import Organized from '@/components/Organized';
import Plans from '@/components/Plans';
import SlideShow from '@/components/slideshow';
import WhatMakes from '@/components/WhatMakes';

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <EverythingYouNeedSection />
      <WhatMakes />
      <Intelligence />
      <SlideShow />
      <Plans />
      <Organized />
      <FAQs />
      <Contact />
      <Footer />
    </>
  );
}
