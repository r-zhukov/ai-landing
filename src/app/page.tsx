import Hero from '../widgets/Hero';
import TrustStrip from '../widgets/TrustStrip';
import Features from '../widgets/Features';
import Customers from '../widgets/Customers';
import Company from '../widgets/Company';
import Testimonials from '../widgets/Testimonials';
import { Section } from '../shared/ui/ClientLayout';
import ScrollToHash from '../shared/ui/ScrollToHash';

export default function Home() {
  return (
    <>
      <ScrollToHash />
      <main style={{ width: '100%', overflow: 'hidden', background: '#181818' }}>
        <Section><Hero /></Section>
        <Section><TrustStrip /></Section>
        <Section><Features /></Section>
        <Section><Customers /></Section>
        <Section><Company /></Section>
        <Section><Testimonials /></Section>
      </main>
    </>
  );
}
