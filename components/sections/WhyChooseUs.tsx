'use client';

import { useEffect, useRef, useState } from 'react';
import { Language, t } from '@/lib/lang';
import { Users, Zap, GitBranch, Clock } from 'lucide-react';
import Link from 'next/link';

/* ── helpers ── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* ── config ── */
const BENEFITS = [
  {
    key: '0',
    Icon: Users,
    color: '#00D9FF',
    accent: '#001F3F',
    defaultTitle: 'Équipe experte',
    defaultDesc: 'Des experts pluridisciplinaires à vos côtés pour chaque étape de votre projet, du design à la production.',
    stat: '50+', statLabel: 'experts',
  },
  {
    key: '1',
    Icon: Zap,
    color: '#FFD700',
    accent: '#00D9FF',
    defaultTitle: 'Livraison rapide',
    defaultDesc: 'Des cycles courts et agiles pour livrer de la valeur rapidement sans sacrifier la qualité.',
    stat: '2×', statLabel: 'plus vite',
  },
  {
    key: '2',
    Icon: GitBranch,
    color: '#7B2CBF',
    accent: '#5B8EFF',
    defaultTitle: 'Méthode agile',
    defaultDesc: 'Sprints, feedback continu et transparence totale pour des résultats qui correspondent à vos attentes.',
    stat: '100%', statLabel: 'agile',
  },
  {
    key: '3',
    Icon: Clock,
    color: '#00ff88',
    accent: '#00D9FF',
    defaultTitle: 'Support 24/7',
    defaultDesc: 'Une équipe disponible en permanence pour surveiller, maintenir et faire évoluer vos solutions.',
    stat: '24/7', statLabel: 'support',
  },
];

/* ── animated counter ── */
function Counter({ target, suffix = '' }: { target: string; suffix?: string }) {
  const [display, setDisplay] = useState('0');
  const num = parseFloat(target.replace(/[^0-9.]/g, ''));
  const prefix = target.match(/^[^0-9]*/)?.[0] ?? '';
  const postfix = target.match(/[^0-9.]+$/)?.[0] ?? suffix;

  useEffect(() => {
    if (isNaN(num)) { setDisplay(target); return; }
    let start: number | null = null;
    const duration = 1200;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(`${prefix}${Math.floor(eased * num)}${postfix}`);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, []);

  return <span>{display}</span>;
}

/* ── single benefit row ── */
function BenefitRow({
  Icon, color, accent, title, description, stat, statLabel, index, inView,
}: {
  Icon: React.ElementType; color: string; accent: string;
  title: string; description: string; stat: string; statLabel: string;
  index: number; inView: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const [counted, setCounted] = useState(false);

  return (
    <div
      className="relative group"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView
          ? 'translateY(0) scale(1)'
          : index % 2 === 0 ? 'translateY(30px) scale(0.97)' : 'translateY(30px) scale(0.97)',
        transition: `opacity 0.55s ease ${index * 0.12}s, transform 0.55s ease ${index * 0.12}s`,
      }}
      onMouseEnter={() => { setHovered(true); if (!counted) setCounted(true); }}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Outer glow */}
      <div
        className="absolute -inset-px rounded-2xl blur-lg transition-opacity duration-500 pointer-events-none"
        style={{ background: `linear-gradient(135deg, ${color}33, ${accent}22)`, opacity: hovered ? 1 : 0 }}
      />

      {/* Card */}
      <div
        className="relative flex gap-5 p-6 rounded-2xl border overflow-hidden transition-all duration-300"
        style={{
          background: hovered ? `linear-gradient(135deg, #060f1c, #08121f)` : '#040d18',
          borderColor: hovered ? `${color}40` : '#0f2030',
        }}
      >
        {/* Mesh texture */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, ${color} 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />

        {/* Left accent bar */}
        <div
          className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full transition-all duration-500"
          style={{
            background: `linear-gradient(to bottom, ${color}, ${accent})`,
            opacity: hovered ? 1 : 0.3,
            transform: hovered ? 'scaleY(1)' : 'scaleY(0.5)',
            transformOrigin: 'center',
          }}
        />

        {/* Icon */}
        <div className="relative flex-shrink-0 mt-1">
          <div
            className="absolute inset-0 blur-md rounded-xl transition-opacity duration-500"
            style={{ background: color, opacity: hovered ? 0.35 : 0.1 }}
          />
          <div
            className="relative w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300"
            style={{
              background: `linear-gradient(135deg, ${color}18, ${accent}18)`,
              border: `1px solid ${color}30`,
              transform: hovered ? 'scale(1.1) rotate(-4deg)' : 'scale(1)',
            }}
          >
            <Icon size={24} style={{ color, filter: `drop-shadow(0 0 6px ${color}88)` }} />
          </div>
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <h3
            className="text-base font-bold mb-1 transition-colors duration-300"
            style={{ color: hovered ? '#ffffff' : '#d1e0f0' }}
          >
            {title}
          </h3>
          <p className="text-[#5a7a94] text-sm leading-relaxed">{description}</p>
        </div>

        {/* Stat badge */}
        <div
          className="flex-shrink-0 flex flex-col items-center justify-center text-center min-w-[64px] transition-all duration-500"
          style={{ opacity: hovered ? 1 : 0.45, transform: hovered ? 'scale(1.05)' : 'scale(1)' }}
        >
          <span
            className="text-xl font-black leading-none"
            style={{
              background: `linear-gradient(135deg, ${color}, ${accent})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {counted ? <Counter target={stat} /> : stat}
          </span>
          <span className="text-[10px] text-[#3a5a74] uppercase tracking-widest mt-0.5">{statLabel}</span>
        </div>

        {/* Bottom shine line */}
        <div
          className="absolute bottom-0 left-0 h-[2px] rounded-full transition-all duration-700"
          style={{
            background: `linear-gradient(90deg, ${color}, ${accent})`,
            width: hovered ? '100%' : '0%',
          }}
        />
      </div>
    </div>
  );
}

/* ── main component ── */
export default function WhyChooseUs({ lang }: { lang: Language }) {
  const { ref: headerRef, inView: headerInView } = useInView(0.2);
  const { ref: gridRef, inView: gridInView } = useInView(0.1);
  const { ref: bannerRef, inView: bannerInView } = useInView(0.2);

  return (
    <section className="relative py-20 md:py-28 bg-[#020b14] overflow-hidden">
      <style>{`
        @keyframes orbitSpin {
          from { transform: rotate(0deg) translateX(38px) rotate(0deg); }
          to   { transform: rotate(360deg) translateX(38px) rotate(-360deg); }
        }
        @keyframes orbitSpin2 {
          from { transform: rotate(180deg) translateX(60px) rotate(-180deg); }
          to   { transform: rotate(540deg) translateX(60px) rotate(-540deg); }
        }
      `}</style>

      {/* Background blobs */}
      <div className="absolute top-1/3 -left-32 w-80 h-80 rounded-full bg-[#00D9FF] opacity-[0.04] blur-[90px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-32 w-80 h-80 rounded-full bg-[#7B2CBF] opacity-[0.05] blur-[90px] pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#7B2CBF]/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Layout: header left + grid right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20 items-start">

          {/* LEFT — sticky header */}
          <div
            ref={headerRef}
            className="lg:sticky lg:top-32 space-y-6"
            style={{
              opacity: headerInView ? 1 : 0,
              transform: headerInView ? 'translateX(0)' : 'translateX(-32px)',
              transition: 'opacity 0.7s ease, transform 0.7s ease',
            }}
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#7B2CBF]/30 bg-[#7B2CBF]/5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#7B2CBF] animate-pulse" />
              <span className="text-[#7B2CBF] text-xs font-semibold tracking-widest uppercase">
                {t(lang, 'whyChoose.eyebrow') || 'Pourquoi nous'}
              </span>
            </div>

            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight"
              style={{
                background: 'linear-gradient(135deg, #ffffff 30%, #7a93b0)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {t(lang, 'whyChoose.title') || 'Ce qui nous distingue'}
            </h2>

            <p className="text-[#5a7a94] text-base leading-relaxed">
              {t(lang, 'whyChoose.subtitle') || 'Une approche centrée sur vos résultats, pas seulement sur la technologie.'}
            </p>

            {/* Animated orbit graphic */}
            <div className="relative w-32 h-32 mt-4">
              <div className="absolute inset-0 rounded-full border border-[#00D9FF]/10" />
              <div className="absolute inset-4 rounded-full border border-[#7B2CBF]/15" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00D9FF]/30 to-[#7B2CBF]/30 border border-[#00D9FF]/40 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#00D9FF]" style={{ boxShadow: '0 0 8px #00D9FF' }} />
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center" style={{ animation: 'orbitSpin 4s linear infinite' }}>
                <div className="w-2.5 h-2.5 rounded-full bg-[#00D9FF]" style={{ boxShadow: '0 0 10px #00D9FF' }} />
              </div>
              <div className="absolute inset-0 flex items-center justify-center" style={{ animation: 'orbitSpin2 7s linear infinite' }}>
                <div className="w-2 h-2 rounded-full bg-[#7B2CBF]" style={{ boxShadow: '0 0 8px #7B2CBF' }} />
              </div>
            </div>

            {/* Global stats row */}
            <div className="flex gap-6 pt-2">
              {[
                { v: '98%', l: 'Satisfaction' },
                { v: '5+', l: "Ans d'expérience" },
              ].map(({ v, l }) => (
                <div key={l} className="flex flex-col">
                  <span
                    className="text-2xl font-black"
                    style={{
                      background: 'linear-gradient(135deg, #00D9FF, #7B2CBF)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >{v}</span>
                  <span className="text-[10px] text-[#3a5a74] uppercase tracking-widest">{l}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — benefits grid */}
          <div ref={gridRef} className="grid grid-cols-1 gap-4">
            {BENEFITS.map((b, i) => (
              <BenefitRow
                key={b.key}
                Icon={b.Icon}
                color={b.color}
                accent={b.accent}
                title={t(lang, `whyChoose.benefits.${b.key}.title`) || b.defaultTitle}
                description={t(lang, `whyChoose.benefits.${b.key}.description`) || b.defaultDesc}
                stat={b.stat}
                statLabel={b.statLabel}
                index={i}
                inView={gridInView}
              />
            ))}
          </div>
        </div>

        {/* ── Bottom CTA banner ── */}
        <div
          ref={bannerRef}
          className="relative mt-20 rounded-2xl overflow-hidden p-8 md:p-12 text-center"
          style={{
            opacity: bannerInView ? 1 : 0,
            transform: bannerInView ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
            background: 'linear-gradient(135deg, #060f1c, #08121f)',
            border: '1px solid #0f2030',
          }}
        >
          {/* Banner glow */}
          <div className="absolute inset-0 opacity-10"
            style={{ background: 'linear-gradient(135deg, #00D9FF20, transparent 50%, #7B2CBF20)' }} />

          <p className="text-[#7a93b0] text-sm uppercase tracking-widest mb-2">
            {t(lang, 'whyChoose.banner.eyebrow') || 'Prêt à démarrer ?'}
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            {t(lang, 'whyChoose.banner.title') || 'Discutons de votre projet'}
          </h3>
          <Link href={`/${lang}/contact`}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-white text-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,217,255,0.3)] hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #00D9FF, #7B2CBF)' }}
          >
            {t(lang, 'whyChoose.banner.cta') || 'Contactez-nous'}
          </Link>

        </div>

      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00D9FF]/20 to-transparent" />
    </section>
  );
}