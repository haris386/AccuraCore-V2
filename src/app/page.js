import EverythingYouNeedSection from '@/components/EverythingYouNeedSection';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import Intelligence from '@/components/Intelligence';
import WhatMakes from '@/components/WhatMakes';

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <EverythingYouNeedSection />
      <WhatMakes />
      <Intelligence />
    </>
  );
}
