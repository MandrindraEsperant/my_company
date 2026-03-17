// HeroIllustration.tsx
// Drop-in SVG illustration: server stack + cloud + floating code nodes
// All animations are CSS keyframes — no external deps needed
// Add the keyframes below to your globals.css

export default function HeroIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none">
      <style>{`
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        @keyframes floatY2 {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-7px); }
        }
        @keyframes dash {
          to { stroke-dashoffset: -40; }
        }
        @keyframes pulse-ring {
          0%   { r: 6; opacity: 0.9; }
          100% { r: 18; opacity: 0; }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.2; }
        }
        @keyframes rise {
          0%   { transform: translateY(0) scale(1);   opacity: 0.7; }
          100% { transform: translateY(-28px) scale(0.6); opacity: 0; }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .float-main  { animation: floatY  5s ease-in-out infinite; }
        .float-cloud { animation: floatY2 4s ease-in-out infinite 0.8s; }
        .dash-line   { stroke-dasharray: 6 4; animation: dash 1.2s linear infinite; }
        .blink       { animation: blink 2s ease-in-out infinite; }
      `}</style>

      <svg
        viewBox="0 0 360 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-[380px] h-auto"
        aria-hidden="true"
      >
        {/* ── Defs ── */}
        <defs>
          <linearGradient id="cyanViolet" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#00D9FF" />
            <stop offset="100%" stopColor="#7B2CBF" />
          </linearGradient>
          <linearGradient id="serverGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%"   stopColor="#0D2A45" />
            <stop offset="100%" stopColor="#071520" />
          </linearGradient>
          <linearGradient id="serverFace" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#0a2035" />
            <stop offset="100%" stopColor="#0d2d47" />
          </linearGradient>
          <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#1a3a5c" />
            <stop offset="100%" stopColor="#12264a" />
          </linearGradient>
          <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="glowStrong" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="7" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* ── Background subtle grid ── */}
        <g opacity="0.06">
          {[0,1,2,3,4,5].map(i => (
            <line key={`h${i}`} x1="0" y1={i*60} x2="360" y2={i*60} stroke="#00D9FF" strokeWidth="0.5"/>
          ))}
          {[0,1,2,3,4,5,6].map(i => (
            <line key={`v${i}`} x1={i*60} y1="0" x2={i*60} y2="340" stroke="#00D9FF" strokeWidth="0.5"/>
          ))}
        </g>

        {/* ══════════════════════════════
            SERVER STACK (isometric-ish)
        ══════════════════════════════ */}
        <g className="float-main" style={{ transformOrigin: '180px 210px' }}>

          {/* Shadow/glow under stack */}
          <ellipse cx="180" cy="295" rx="70" ry="10" fill="#00D9FF" opacity="0.08" filter="url(#glow)" />

          {/* ── Rack unit 3 (bottom) ── */}
          <rect x="100" y="255" width="160" height="30" rx="4" fill="url(#serverGrad)" stroke="#1a3f5c" strokeWidth="1"/>
          <rect x="100" y="255" width="160" height="5"  rx="2" fill="#00D9FF" opacity="0.15"/>
          {/* LED row */}
          {[0,1,2,3,4,5,6].map(i => (
            <circle key={i} cx={118 + i*10} cy="268" r="2.5"
              fill={i % 3 === 0 ? '#00D9FF' : i % 3 === 1 ? '#7B2CBF' : '#22d3ee'}
              opacity="0.9"
              style={{ animation: `blink ${1.2 + i*0.3}s ease-in-out infinite` }}
              filter="url(#glow)"
            />
          ))}
          <rect x="218" y="261" width="30" height="12" rx="2" fill="#0a1e30" stroke="#1a3f5c" strokeWidth="0.8"/>
          <rect x="220" y="263" width="12" height="8"  rx="1" fill="#00D9FF" opacity="0.5"/>

          {/* ── Rack unit 2 (middle) ── */}
          <rect x="100" y="218" width="160" height="30" rx="4" fill="url(#serverGrad)" stroke="#1a3f5c" strokeWidth="1"/>
          <rect x="100" y="218" width="160" height="5"  rx="2" fill="#7B2CBF" opacity="0.2"/>
          {[0,1,2,3,4,5,6].map(i => (
            <circle key={i} cx={118 + i*10} cy="231" r="2.5"
              fill={i % 2 === 0 ? '#7B2CBF' : '#00D9FF'}
              opacity="0.8"
              style={{ animation: `blink ${1.5 + i*0.25}s ease-in-out infinite ${i*0.1}s` }}
              filter="url(#glow)"
            />
          ))}
          {/* Progress bar */}
          <rect x="218" y="224" width="30" height="5" rx="2" fill="#0a1e30"/>
          <rect x="218" y="224" width="22" height="5" rx="2" fill="url(#cyanViolet)" opacity="0.8"/>

          {/* ── Rack unit 1 (top) ── */}
          <rect x="100" y="181" width="160" height="30" rx="4" fill="url(#serverGrad)" stroke="#1a3f5c" strokeWidth="1"/>
          <rect x="100" y="181" width="160" height="5"  rx="2" fill="#00D9FF" opacity="0.25"/>
          {[0,1,2].map(i => (
            <circle key={i} cx={118 + i*10} cy="194" r="2.5"
              fill="#00ff88" opacity="0.9"
              style={{ animation: `blink ${0.9 + i*0.4}s ease-in-out infinite` }}
              filter="url(#glow)"
            />
          ))}
          {/* Fan slots */}
          {[0,1].map(i => (
            <rect key={i} x={155 + i*22} y="186" width="16" height="16" rx="8"
              fill="#071520" stroke="#1a3f5c" strokeWidth="0.8"/>
          ))}
          {[0,1].map(i => (
            <g key={i} style={{ transformOrigin: `${163 + i*22}px 194px`, animation: `spinSlow ${0.8 + i*0.3}s linear infinite` }}>
              <line x1={163 + i*22} y1="188" x2={163 + i*22} y2="200" stroke="#00D9FF" strokeWidth="1" opacity="0.6"/>
              <line x1={157 + i*22} y1="194" x2={169 + i*22} y2="194" stroke="#00D9FF" strokeWidth="1" opacity="0.6"/>
            </g>
          ))}
          <rect x="218" y="187" width="30" height="12" rx="2" fill="#0a1e30" stroke="#1a3f5c" strokeWidth="0.8"/>
          <rect x="220" y="189" width="26" height="4" rx="1" fill="#7B2CBF" opacity="0.7"/>
          <rect x="220" y="194" width="18" height="4" rx="1" fill="#00D9FF" opacity="0.5"/>

          {/* Rack frame */}
          <rect x="96"  y="178" width="168" height="110" rx="5" fill="none" stroke="#1e4060" strokeWidth="1.5"/>
          <rect x="96"  y="178" width="168" height="6"   rx="3" fill="#00D9FF" opacity="0.1"/>
        </g>

        {/* ══════════════════════════════
            CLOUD (top-right)
        ══════════════════════════════ */}
        <g className="float-cloud" style={{ transformOrigin: '268px 100px' }}>
          <ellipse cx="268" cy="110" rx="42" ry="28" fill="url(#cloudGrad)" stroke="#1a3f5c" strokeWidth="1" filter="url(#glow)"/>
          <ellipse cx="248" cy="118" rx="28" ry="20" fill="url(#cloudGrad)" stroke="#1a3f5c" strokeWidth="1"/>
          <ellipse cx="288" cy="116" rx="24" ry="18" fill="url(#cloudGrad)" stroke="#1a3f5c" strokeWidth="1"/>
          {/* Cloud shine */}
          <ellipse cx="260" cy="100" rx="18" ry="6" fill="#00D9FF" opacity="0.06"/>
          {/* Cloud icon inside */}
          <text x="258" y="115" textAnchor="middle" fontSize="18" fill="url(#cyanViolet)" opacity="0.9" filter="url(#glow)">☁</text>
        </g>

        {/* ══════════════════════════════
            CODE SNIPPET (top-left)
        ══════════════════════════════ */}
        <g style={{ animation: 'floatY2 6s ease-in-out infinite 1.5s', transformOrigin: '82px 115px' }}>
          <rect x="28" y="75" width="108" height="82" rx="8" fill="#050f1a" stroke="#1a3f5c" strokeWidth="1" opacity="0.95"/>
          {/* Title bar */}
          <rect x="28" y="75" width="108" height="16" rx="8" fill="#0a1e30"/>
          <circle cx="40" cy="83" r="3" fill="#ff5f57"/>
          <circle cx="51" cy="83" r="3" fill="#febc2e"/>
          <circle cx="62" cy="83" r="3" fill="#28c840"/>
          {/* Code lines */}
          {[
            { y: 103, w: 55, c: '#7B2CBF' },
            { y: 114, w: 38, c: '#00D9FF' },
            { y: 125, w: 65, c: '#5B8EFF' },
            { y: 136, w: 44, c: '#7B2CBF' },
            { y: 147, w: 30, c: '#00D9FF' },
          ].map((l, i) => (
            <g key={i}>
              <rect x="40" y={l.y - 7} width="8" height="7" rx="1" fill="#1a3f5c" opacity="0.5"/>
              <rect x="52" y={l.y - 7} width={l.w} height="7" rx="2" fill={l.c} opacity="0.25"/>
            </g>
          ))}
          {/* Cursor blink */}
          <rect x="52" y="141" width="2" height="8" rx="1" fill="#00D9FF" className="blink"/>
        </g>

        {/* ══════════════════════════════
            CONNECTING LINES (dashed)
        ══════════════════════════════ */}
        {/* Code → Server */}
        <line x1="136" y1="130" x2="155" y2="181" stroke="#00D9FF" strokeWidth="1" opacity="0.3" className="dash-line"/>
        {/* Cloud → Server */}
        <line x1="248" y1="125" x2="220" y2="181" stroke="#7B2CBF" strokeWidth="1" opacity="0.3" className="dash-line"/>
        {/* Cloud → Code */}
        <line x1="240" y1="112" x2="136" y2="108" stroke="#5B8EFF" strokeWidth="1" opacity="0.2" className="dash-line"/>

        {/* ══════════════════════════════
            FLOATING DATA PACKETS
        ══════════════════════════════ */}
        {[
          { cx: 155, cy: 175, delay: '0s' },
          { cx: 220, cy: 178, delay: '0.6s' },
          { cx: 188, cy: 170, delay: '1.2s' },
        ].map((p, i) => (
          <circle key={i} cx={p.cx} cy={p.cy} r="3" fill="url(#cyanViolet)"
            filter="url(#glow)"
            style={{ animation: `rise 2s ease-out infinite ${p.delay}` }}
          />
        ))}

        {/* ══════════════════════════════
            PULSE RINGS on server top
        ══════════════════════════════ */}
        <circle cx="180" cy="181" r="6" fill="none" stroke="#00D9FF" strokeWidth="1.5" opacity="0.6"
          style={{ animation: 'pulse-ring 2s ease-out infinite' }}
          filter="url(#glowStrong)"
        />
        <circle cx="180" cy="181" r="6" fill="none" stroke="#7B2CBF" strokeWidth="1"
          style={{ animation: 'pulse-ring 2s ease-out infinite 1s' }}
        />

        {/* ══════════════════════════════
            BOTTOM LABEL
        ══════════════════════════════ */}
        <text x="180" y="320" textAnchor="middle" fontSize="9" fill="#00D9FF" opacity="0.4" letterSpacing="3">
          CLOUD · CODE · INFRA
        </text>
      </svg>
    </div>
  );
}
