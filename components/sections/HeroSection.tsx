import Link from 'next/link';
import Image from 'next/image';
import { Language, t } from '@/lib/lang';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import HeroIllustration from './HeroIllustration';

export default function HeroSection({ lang }: { lang: Language }) {
  return (
    <section
      className="relative h-screen max-h-screen flex items-center overflow-hidden"
    >
      {/* Deep space background */}
      <div className="absolute inset-0 bg-[#00050F]"></div>

      {/* Star field dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.6 + 0.1,
            }}
          />
        ))}
      </div>

      {/* Ambient glow blobs */}
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#00D9FF] opacity-[0.06] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#7B2CBF] opacity-[0.08] blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#0a1628] opacity-50 blur-[80px] pointer-events-none" />

      {/* Main Content — Two Columns */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-12 w-full ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ─── LEFT: Text Content ─── */}
          <div className="flex flex-col space-y-6">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 w-fit px-4 py-2 rounded-full border border-[#00D9FF]/30 bg-[#00D9FF]/5 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-[#00D9FF]" />
              <span className="text-[#00D9FF] text-sm font-medium tracking-wide uppercase">
                {t(lang, 'hero.badge') || 'Next Generation AI Platform'}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl xl:text-5xl font-extrabold leading-[1.1] tracking-tight">
              <span className="text-white">{t(lang, 'hero.title.line1') || 'Transformez vos'}</span>
              <br />
              <span
                className="bg-gradient-to-r from-[#00D9FF] via-[#5B8EFF] to-[#7B2CBF] bg-clip-text text-transparent"
              >
                {t(lang, 'hero.title.line2') || 'données en décisions'}
              </span>
            </h1>


            {/* Description */}
            <p className="text-[#94A3B8] text-base md:text-lg leading-relaxed max-w-xl">
              {t(lang, 'hero.description') ||
                'Une plateforme intelligente qui connecte vos équipes, automatise vos processus et révèle des insights cachés pour vous propulser vers la réussite.'}
            </p>


            {/* Stats row */}
            <div className="flex gap-8 pt-0">
              {[
                { value: '10x', label: t(lang, 'hero.stat1.label') || 'Plus rapide' },
                { value: '99.9%', label: t(lang, 'hero.stat2.label') || 'Disponibilité' },
                { value: '500+', label: t(lang, 'hero.stat3.label') || 'Entreprises' },
              ].map((stat) => (
                <div key={stat.value} className="flex flex-col">
                  <span className="text-2xl font-bold text-white">{stat.value}</span>
                  <span className="text-sm text-[#64748B]">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                asChild
                size="lg"
                className="relative group bg-gradient-to-r from-[#00D9FF] to-[#4F46E5] text-white font-semibold text-base px-8 py-6 rounded-xl shadow-[0_0_20px_rgba(0,217,255,0.3)] hover:shadow-[0_0_35px_rgba(0,217,255,0.5)] transition-all duration-300 overflow-hidden"
              >
                <Link href={`/${lang}/contact`}>
                  <span className="relative z-10 flex items-center gap-2">
                    {t(lang, 'hero.cta1') || 'Démarrer maintenant'}
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00D9FF] to-[#7B2CBF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border border-white/10 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:border-[#00D9FF]/50 text-base px-8 py-6 rounded-xl transition-all duration-300"
              >
                <Link href={`/${lang}/solutions`}>
                  {t(lang, 'hero.cta2') || 'Voir les solutions'}
                </Link>
              </Button>
            </div>
          </div>

          {/* ─── RIGHT: Visual Panel ─── */}
          <div className="relative flex items-center justify-center lg:justify-end">

            {/* Outer glow ring */}
            <div className="absolute w-[420px] h-[420px] rounded-full border border-[#00D9FF]/10 animate-[spin_20s_linear_infinite]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#00D9FF] shadow-[0_0_12px_4px_rgba(0,217,255,0.6)]" />
            </div>
            <div className="absolute w-[340px] h-[340px] rounded-full border border-[#7B2CBF]/15 animate-[spin_14s_linear_infinite_reverse]">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-[#7B2CBF] shadow-[0_0_10px_4px_rgba(123,44,191,0.5)]" />
            </div>

            {/* Central glow backdrop */}
            <div className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-[#00D9FF]/15 to-[#7B2CBF]/20 blur-[60px]" />

            {/* Logo / Illustration */}
            {/* <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 flex items-center justify-center drop-shadow-[0_0_60px_rgba(0,217,255,0.3)]">
              <Image
                src="/logo-hero.png"
                alt="Platform visual"
                fill
                className="object-contain animate-[float_6s_ease-in-out_infinite]"
                priority
              />
            </div> */}
            {/* Logo / Illustration */}
            <div className="relative z-10 w-52 h-52 md:w-64 md:h-64 flex items-center justify-center">
              <HeroIllustration />
            </div>

            {/* Floating feature cards */}
            <div className="absolute top-4 -left-4 md:-left-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-3 shadow-xl animate-[float_5s_ease-in-out_infinite]">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_2px_rgba(52,211,153,0.5)]" />
                <span className="text-white text-sm font-medium whitespace-nowrap">
                  {t(lang, 'hero.card1')}
                </span>
              </div>
            </div>


            {/* Card 2: En bas à gauche, décalée vers le centre pour l'équilibre */}
            <div className="absolute -bottom-4 -left-2 md:-left-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-3 shadow-xl animate-[float_7s_ease-in-out_infinite_1s]">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00D9FF] shadow-[0_0_6px_2px_rgba(0,217,255,0.5)]" />
                <span className="text-white text-sm font-medium whitespace-nowrap">
                  {t(lang, 'hero.card2')}
                </span>
              </div>
            </div>

            <div className="absolute top-1/8 -right-4 md:-right-8 -translate-y-1/2 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-3 shadow-xl animate-[float_6s_ease-in-out_infinite_0.5s]">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#7B2CBF] shadow-[0_0_6px_2px_rgba(123,44,191,0.5)]" />
                <span className="text-white text-sm font-medium whitespace-nowrap">
                  {t(lang, 'hero.card3')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[#64748B] text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-5 h-5 text-[#00D9FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}