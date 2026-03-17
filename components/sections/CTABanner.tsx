import Link from 'next/link';
import { Language, t } from '@/lib/lang';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function CTABanner({ lang }: { lang: Language }) {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#001F3F] via-[#00D9FF] to-[#7B2CBF] opacity-90"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          {t(lang, 'ctaBanner.title')}
        </h2>
        
        <p className="text-lg md:text-xl text-white/90">
          {t(lang, 'ctaBanner.description')}
        </p>

        <Button
          asChild
          size="lg"
          className="bg-white text-foreground hover:bg-white/90 transition-all text-base"
        >
          <Link href={`/${lang}/contact`}>
            {t(lang, 'ctaBanner.cta')}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          
        </Button>
      </div>
    </section>
  );
}
