import { Metadata } from 'next';
import { Language, t } from '@/lib/lang';
import HeroSection from '@/components/sections/HeroSection';
import ServicePillars from '@/components/sections/ServicePillars';
import WhyChooseUs from '@/components/sections/WhyChooseUs';

export const metadata: Metadata = {
  title: 'CLYSYS CODEX - Digital Excellence',
  description: 'Software Development, Cloud Infrastructure & Digital Marketing Solutions',
};

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = (rawLang === 'en' || rawLang === 'fr' ? rawLang : 'en') as Language;

  return (
    <>
      <HeroSection lang={lang} />
      <ServicePillars lang={lang} />
      <WhyChooseUs lang={lang} />
    </>
  );
}
