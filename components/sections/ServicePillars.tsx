'use client';

import { useEffect, useRef, useState } from 'react';
import { Language, t } from '@/lib/lang';
import { Code2, Cloud, BarChart3, ArrowRight } from 'lucide-react';

const GRADIENTS = [
  { from: '#00D9FF', to: '#5B8EFF', stop: '#3b6fd4' },
  { from: '#5B8EFF', to: '#7B2CBF', stop: '#6a3aaa' },
  { from: '#7B2CBF', to: '#00D9FF', stop: '#3bbfd4' },
];

const ICONS = [Code2, Cloud, BarChart3];

const PARTICLES = [
  { x: 20, y: 30, size: 2, delay: '0s',   dur: '3s'   },
  { x: 75, y: 20, size: 1.5, delay: '0.5s', dur: '4s' },
  { x: 50, y: 70, size: 2.5, delay: '1s',   dur: '2.5s'},
  { x: 85, y: 65, size: 1,   delay: '1.5s', dur: '3.5s'},
  { x: 15, y: 80, size: 2,   delay: '0.8s', dur: '4.2s'},
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

interface CardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
  inView: boolean;
}

function ServiceCard({ icon: Icon, title, description, index, inView }: CardProps) {
  const g = GRADIENTS[index];
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative group cursor-default"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Glow behind card */}
      <div
        className="absolute -inset-px rounded-2xl blur-xl transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, ${g.from}, ${g.to})`,
          opacity: hovered ? 0.25 : 0,
        }}
      />

      {/* Card border gradient */}
      <div
        className="absolute inset-0 rounded-2xl p-px transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, ${g.from}40, ${g.to}40)`,
          opacity: hovered ? 1 : 0.4,
        }}
      >
        <div className="w-full h-full rounded-2xl bg-[#040d18]" />
      </div>

      {/* Main card surface */}
      <div className="relative rounded-2xl bg-[#060f1c] border border-white/5 p-8 overflow-hidden h-full flex flex-col gap-6">

        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(${g.from}66 1px, transparent 1px), linear-gradient(90deg, ${g.from}66 1px, transparent 1px)`,
            backgroundSize: '28px 28px',
          }}
        />

        {/* Animated corner accent */}
        <div
          className="absolute top-0 right-0 w-32 h-32 rounded-bl-full transition-all duration-700"
          style={{
            background: `radial-gradient(circle at top right, ${g.from}18, transparent 70%)`,
            transform: hovered ? 'scale(1.4)' : 'scale(1)',
          }}
        />

        {/* Floating particles */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
          {PARTICLES.map((p, i) => (
            <circle
              key={i}
              cx={`${p.x}%`} cy={`${p.y}%`}
              r={p.size}
              fill={i % 2 === 0 ? g.from : g.to}
              opacity={hovered ? 0.6 : 0.15}
              style={{
                transition: 'opacity 0.4s ease',
                animation: `floatParticle ${p.dur} ease-in-out infinite ${p.delay}`,
              }}
            />
          ))}
        </svg>

        {/* Index number watermark */}
        <span
          className="absolute bottom-4 right-6 text-7xl font-black pointer-events-none select-none leading-none transition-all duration-500"
          style={{
            background: `linear-gradient(135deg, ${g.from}, ${g.to})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            opacity: hovered ? 0.12 : 0.06,
            transform: hovered ? 'scale(1.1) translateY(-4px)' : 'scale(1)',
          }}
        >
          0{index + 1}
        </span>

        {/* Icon */}
        <div className="relative w-fit">
          {/* Icon glow */}
          <div
            className="absolute inset-0 blur-lg rounded-xl transition-opacity duration-500"
            style={{
              background: `linear-gradient(135deg, ${g.from}, ${g.to})`,
              opacity: hovered ? 0.6 : 0.3,
            }}
          />
          <div
            className="relative p-4 rounded-xl transition-transform duration-300"
            style={{
              background: `linear-gradient(135deg, ${g.from}22, ${g.to}22)`,
              border: `1px solid ${g.from}40`,
              transform: hovered ? 'scale(1.08) rotate(-3deg)' : 'scale(1)',
            }}
          >
            <Icon
              size={32}
              style={{
                stroke: `url(#grad-${index})`,
                filter: `drop-shadow(0 0 6px ${g.from}88)`,
              }}
            />
            {/* SVG gradient def for icon stroke */}
            <svg width="0" height="0" className="absolute">
              <defs>
                <linearGradient id={`grad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={g.from} />
                  <stop offset="100%" stopColor={g.to} />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col gap-3 flex-1">
          <h3 className="text-xl font-bold text-white tracking-tight">{title}</h3>
          <p className="text-[#7a93b0] text-sm leading-relaxed">{description}</p>
        </div>

        {/* CTA link */}
        <div
          className="flex items-center gap-2 text-sm font-medium transition-all duration-300"
          style={{
            color: g.from,
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'translateX(0)' : 'translateX(-8px)',
          }}
        >
          <span>En savoir plus</span>
          <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
        </div>

        {/* Bottom gradient line */}
        <div
          className="absolute bottom-0 left-0 h-[2px] rounded-full transition-all duration-700"
          style={{
            background: `linear-gradient(90deg, ${g.from}, ${g.to})`,
            width: hovered ? '100%' : '0%',
          }}
        />
      </div>
    </div>
  );
}

export default function ServicePillars({ lang }: { lang: Language }) {
  const { ref, inView } = useInView();
  const { ref: headerRef, inView: headerInView } = useInView(0.2);

  const services = [
    { key: 'pillar1', Icon: ICONS[0] },
    { key: 'pillar2', Icon: ICONS[1] },
    { key: 'pillar3', Icon: ICONS[2] },
  ];

  return (
    <section className="relative py-20 md:py-28 bg-[#02080f] overflow-hidden">
      {/* keyframes injected inline */}
      <style>{`
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0px) scale(1); }
          50%       { transform: translateY(-10px) scale(1.2); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
      `}</style>

      {/* Background ambient blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#00D9FF] opacity-[0.04] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-[#7B2CBF] opacity-[0.05] blur-[100px] pointer-events-none" />

      {/* Horizontal separator top */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00D9FF]/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div
          ref={headerRef}
          className="text-center mb-16 space-y-4"
          style={{
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00D9FF]/20 bg-[#00D9FF]/5 mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00D9FF] animate-pulse" />
            <span className="text-[#00D9FF] text-xs font-semibold tracking-widest uppercase">
              {t(lang, 'services.eyebrow') || 'Ce que nous faisons'}
            </span>
          </div>

          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight"
            style={{
              background: 'linear-gradient(135deg, #ffffff 40%, #7a93b0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {t(lang, 'services.title') || 'Nos piliers de service'}
          </h2>

          <p className="text-[#7a93b0] text-lg max-w-2xl mx-auto leading-relaxed">
            {t(lang, 'services.subtitle') || 'Une expertise complète pour couvrir tous vos besoins technologiques et marketing.'}
          </p>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#00D9FF]/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#00D9FF]/60" />
            <div className="h-px w-24 bg-gradient-to-r from-[#00D9FF]/40 via-[#7B2CBF]/40 to-transparent" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#7B2CBF]/60" />
            <div className="h-px w-12 bg-gradient-to-r from-[#7B2CBF]/40 to-transparent" />
          </div>
        </div>

        {/* ── Cards grid ── */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map(({ key, Icon }, index) => (
            <ServiceCard
              key={key}
              icon={Icon}
              title={t(lang, `services.${key}.title`) || ['Développement Logiciel', 'Cloud & Infrastructure', 'Business & Marketing'][index]}
              description={t(lang, `services.${key}.description`) || ['Applications web, mobile et API sur mesure avec les meilleures technologies modernes.', 'Architecture cloud scalable, DevOps et monitoring pour une infrastructure fiable.', 'Stratégie digitale, SEO, automatisation marketing et growth hacking.'][index]}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>

      {/* Horizontal separator bottom */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#7B2CBF]/20 to-transparent" />
    </section>
  );
}