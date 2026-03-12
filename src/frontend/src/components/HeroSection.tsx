import { ChevronDown } from "lucide-react";
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
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            type="button"
            data-ocid="hero.primary_button"
            onClick={() =>
              document
                .querySelector("#work")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="shimmer-border px-8 py-4 bg-gold text-black font-bold text-sm tracking-widest uppercase rounded-sm hover:shadow-gold-strong transition-all duration-300 hover:scale-105 gold-glow"
          >
            View My Work
          </button>
          <button
            type="button"
            data-ocid="hero.secondary_button"
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="shimmer-border px-8 py-4 border border-primary text-primary font-bold text-sm tracking-widest uppercase rounded-sm hover:bg-primary/10 transition-all duration-300 hover:scale-105"
          >
            Let&apos;s Collaborate
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="text-xs text-white/40 tracking-widest uppercase">
          Scroll
        </span>
        <ChevronDown className="text-gold animate-scroll-bounce" size={20} />
      </div>
    </section>
  );
}
