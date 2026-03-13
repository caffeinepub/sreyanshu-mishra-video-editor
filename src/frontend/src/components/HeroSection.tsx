import { motion } from "motion/react";
import { Suspense, lazy, useMemo } from "react";

const HeroScene = lazy(() => import("./HeroScene"));

const PARTICLES = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  left: 5 + ((i * 7) % 90),
  delay: (i * 0.7) % 5,
  duration: 4 + ((i * 0.4) % 4),
  size: 2 + (i % 3),
}));

export default function HeroSection() {
  const particles = useMemo(() => PARTICLES, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/assets/generated/hero-bg.dim_1920x1080.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.3,
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      <div className="absolute inset-0 z-10">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </div>

      {/* Floating gold spark particles */}
      <div className="absolute inset-0 z-[11] pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: `${p.left}%`,
              bottom: "5%",
              width: p.size,
              height: p.size,
              background: "oklch(85% 0.18 80)",
              boxShadow: `0 0 ${p.size * 3}px oklch(85% 0.18 80), 0 0 ${p.size * 6}px oklch(75% 0.15 75 / 0.5)`,
            }}
            animate={{
              y: [0, -(100 + (p.id % 4) * 30)],
              x: [0, ((p.id % 5) - 2) * 15],
              opacity: [0, 0.9, 0.7, 0],
              scale: [1, 0.8, 0.4],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 z-10 scanlines opacity-30 pointer-events-none" />

      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 border border-primary/30 rounded-full bg-primary/5 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span className="text-sm text-primary font-medium tracking-widest uppercase">
            Professional Video Editor
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-6xl md:text-8xl font-black leading-none mb-4"
        >
          <span className="block text-white">Crafting Visual</span>
          <span className="block shimmer-text">Stories</span>
          <span className="block text-white">That Move the</span>
          <span className="block shimmer-text">World</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="text-white/60 text-lg md:text-xl mt-6 mb-3 tracking-wide"
        >
          Professional Video Editor &amp; Motion Graphics Artist
        </motion.p>

        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="font-display text-2xl md:text-3xl text-gold font-bold tracking-[0.2em] uppercase mb-10"
        >
          Sreyanshu Mishra
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="flex items-center justify-center"
        >
          <LookOverButton />
        </motion.div>
      </div>
    </section>
  );
}

function LookOverButton() {
  const handleClick = () => {
    document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      type="button"
      data-ocid="hero.primary_button"
      onClick={handleClick}
      className="group relative select-none"
      style={{
        outline: "none",
        border: "none",
        background: "none",
        padding: 0,
        cursor: "pointer",
      }}
    >
      {/* Outer glow halo */}
      <span
        className="absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "transparent",
          boxShadow:
            "0 0 40px 12px oklch(78% 0.18 80 / 0.45), 0 0 80px 24px oklch(65% 0.15 75 / 0.2)",
          pointerEvents: "none",
        }}
      />

      {/* The 3D button face */}
      <span
        className="block px-12 py-5 text-sm font-black uppercase tracking-widest text-black transition-all duration-100 rounded-sm group-active:translate-x-[4px] group-active:translate-y-[4px]"
        style={{
          background:
            "linear-gradient(145deg, #e8bc3a 0%, #c9a227 40%, #a07820 70%, #7a5c14 100%)",
          boxShadow:
            "4px 4px 0px #6b5010, 8px 8px 0px #4a380a, 12px 12px 0px #2e220600, inset -2px -2px 0px rgba(0,0,0,0.35), inset 2px 2px 0px rgba(255,240,180,0.45), 0 2px 4px rgba(0,0,0,0.6)",
          textShadow: "0 1px 0 rgba(255,255,200,0.5), 0 -1px 0 rgba(0,0,0,0.3)",
          letterSpacing: "0.25em",
          transform: "translateZ(0)",
          willChange: "transform, box-shadow",
          transition: "box-shadow 0.1s ease, transform 0.1s ease",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLSpanElement;
          el.style.boxShadow =
            "2px 2px 0px #6b5010, 4px 4px 0px #4a380a, inset -2px -2px 0px rgba(0,0,0,0.4), inset 2px 2px 0px rgba(255,240,180,0.3), 0 1px 2px rgba(0,0,0,0.5)";
          el.style.transform = "translateX(4px) translateY(4px) translateZ(0)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLSpanElement;
          el.style.boxShadow =
            "4px 4px 0px #6b5010, 8px 8px 0px #4a380a, 12px 12px 0px #2e220600, inset -2px -2px 0px rgba(0,0,0,0.35), inset 2px 2px 0px rgba(255,240,180,0.45), 0 2px 4px rgba(0,0,0,0.6)";
          el.style.transform = "translateZ(0)";
        }}
        onMouseDown={(e) => {
          const el = e.currentTarget as HTMLSpanElement;
          el.style.boxShadow =
            "0px 0px 0px #6b5010, 1px 1px 0px #4a380a, inset -3px -3px 2px rgba(0,0,0,0.5), inset 3px 3px 2px rgba(255,240,180,0.15)";
          el.style.transform = "translateX(8px) translateY(8px) translateZ(0)";
        }}
        onMouseUp={(e) => {
          const el = e.currentTarget as HTMLSpanElement;
          el.style.boxShadow =
            "2px 2px 0px #6b5010, 4px 4px 0px #4a380a, inset -2px -2px 0px rgba(0,0,0,0.4), inset 2px 2px 0px rgba(255,240,180,0.3), 0 1px 2px rgba(0,0,0,0.5)";
          el.style.transform = "translateX(4px) translateY(4px) translateZ(0)";
        }}
      >
        {/* Engraved bevel top edge highlight */}
        <span
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,248,200,0.8), transparent)",
            pointerEvents: "none",
          }}
        />
        {/* Engraved bevel left edge highlight */}
        <span
          className="absolute top-0 left-0 bottom-0 w-px"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,248,200,0.8), transparent)",
            pointerEvents: "none",
          }}
        />
        Look Over
      </span>

      {/* Bottom-right depth face (the 3D side panels) */}
      <span
        className="absolute pointer-events-none"
        style={{
          bottom: "-12px",
          left: "8px",
          right: "-12px",
          height: "12px",
          background: "linear-gradient(180deg, #4a380a, #2e2206)",
          transform: "skewX(-45deg) scaleX(0.707)",
          transformOrigin: "top right",
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        }}
      />
    </button>
  );
}
