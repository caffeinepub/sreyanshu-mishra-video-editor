import { Trophy } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Projects", target: 50, suffix: "+", isAward: false, isBlue: true },
  { label: "Clients", target: 80, suffix: "+", isAward: false, isBlue: true },
  {
    label: "Years of Experience",
    target: 4,
    suffix: "+ Years",
    isAward: false,
    isBlue: true,
  },
  { label: "Awards", target: 3, suffix: "", isAward: true, isBlue: false },
];

function AnimatedCounter({
  target,
  suffix,
  isAward,
  isBlue,
}: { target: number; suffix: string; isAward: boolean; isBlue: boolean }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const step = (timestamp: number, startTime: number) => {
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const eased = 1 - (1 - progress) ** 3;
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame((t) => step(t, startTime));
            else setCount(target);
          };
          requestAnimationFrame((t) => step(t, t));
        }
      },
      { threshold: 0.5 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return (
    <span
      ref={ref}
      className={`font-display text-5xl md:text-6xl font-black ${
        isAward ? "text-awards-red" : isBlue ? "text-stat-blue" : "text-gold"
      }`}
    >
      {count}
      {suffix}
    </span>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Base background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black" />

      {/* Glowing golden background layers */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, oklch(72% 0.18 75 / 0.13) 0%, transparent 70%)",
          animation: "aboutGoldPulse 4s ease-in-out infinite alternate",
        }}
      />
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(75% 0.18 75 / 0.18) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(75% 0.18 75 / 0.14) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      {/* Centre shimmer streak */}
      <div
        className="absolute left-1/2 top-0 h-full w-px pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, oklch(75% 0.18 75 / 0.25) 40%, oklch(75% 0.18 75 / 0.25) 60%, transparent 100%)",
          filter: "blur(6px)",
          transform: "translateX(-50%)",
        }}
      />
      <style>{`
        @keyframes aboutGoldPulse {
          from { opacity: 0.7; }
          to   { opacity: 1; }
        }
      `}</style>

      {/* Sreyanshu blended behind content */}
      <div
        className="absolute inset-0 pointer-events-none flex items-center justify-end"
        style={{ zIndex: 1 }}
      >
        <img
          src="/assets/uploads/Picsart_26-01-10_00-29-48-886-1.jpg"
          alt=""
          aria-hidden="true"
          style={{
            height: "95%",
            width: "auto",
            objectFit: "contain",
            objectPosition: "right center",
            mixBlendMode: "luminosity",
            filter: "brightness(0.4) sepia(0.4) hue-rotate(5deg) saturate(0.5)",
            maskImage:
              "linear-gradient(to left, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.55) 50%, transparent 90%)",
            WebkitMaskImage:
              "linear-gradient(to left, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.55) 50%, transparent 90%)",
            opacity: 0.88,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-12 h-px bg-gold" />
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
            About Me
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display text-4xl md:text-5xl font-black text-white mb-8 leading-tight"
            >
              The Craft Behind <span className="text-gold">the Frame</span>
            </motion.h2>

            {/* Animated underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-8 h-0.5 bg-gradient-to-r from-gold via-gold/50 to-transparent origin-left"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/70 text-lg leading-relaxed mb-6"
            >
              With over 4 years of immersive experience in professional video
              editing and motion graphics, I transform raw footage into
              cinematic masterpieces. Every project I take on is approached with
              a director&apos;s eye and an editor&apos;s precision — from
              sweeping documentary cuts to high-energy commercial reels.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-white/70 text-lg leading-relaxed"
            >
              I don&apos;t just edit video; I sculpt time, emotion, and
              narrative into a seamless visual experience that resonates with
              your audience long after the screen goes dark.
            </motion.p>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8 h-px bg-gradient-to-r from-gold via-gold/50 to-transparent origin-left"
            />
          </div>

          <motion.div
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.12, delayChildren: 0.2 },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                whileHover={stat.isAward ? {} : { scale: 1.03 }}
                className={`p-6 border rounded-sm bg-card/50 backdrop-blur-sm relative overflow-hidden group transition-all duration-300 ${
                  stat.isAward
                    ? "border-[#ff202060] animate-awards-pulse"
                    : stat.isBlue
                      ? "border-[#00aaff40] animate-blue-pulse"
                      : "border-border/50 hover:border-primary/50"
                }`}
                style={stat.isAward ? { cursor: "default" } : {}}
              >
                {/* Hover radial glow */}
                {!stat.isAward && !stat.isBlue && (
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(circle at 50% 50%, oklch(75% 0.15 75 / 0.12) 0%, transparent 70%)",
                    }}
                  />
                )}
                {/* Blue radial glow always-on */}
                {stat.isBlue && (
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(circle at 50% 50%, #00aaff18 0%, transparent 70%)",
                    }}
                  />
                )}
                {/* Awards red radial glow always-on */}
                {stat.isAward && (
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(circle at 50% 50%, #ff202020 0%, transparent 70%)",
                    }}
                  />
                )}

                <div className="relative z-10">
                  <AnimatedCounter
                    target={stat.target}
                    suffix={stat.suffix}
                    isAward={stat.isAward}
                    isBlue={stat.isBlue}
                  />
                  <p
                    className={`text-sm font-medium tracking-widest uppercase mt-2 flex items-center gap-1.5 ${
                      stat.isAward
                        ? "text-[#ff2020cc]"
                        : stat.isBlue
                          ? "text-[#00aaffaa]"
                          : "text-white/50"
                    }`}
                  >
                    {stat.isAward && (
                      <Trophy
                        size={13}
                        className="inline-block"
                        style={{
                          color: "#ff2020",
                          filter: "drop-shadow(0 0 4px #ff202099)",
                        }}
                      />
                    )}
                    {stat.label}
                  </p>
                </div>
                <div
                  className={`absolute bottom-0 left-0 h-0.5 transition-all duration-500 ${
                    stat.isAward
                      ? "bg-gradient-to-r from-[#ff2020] to-transparent"
                      : stat.isBlue
                        ? "bg-gradient-to-r from-[#00aaff] to-transparent"
                        : "bg-gold group-hover:w-full"
                  }`}
                  style={{
                    width:
                      stat.isAward || stat.isBlue ? "100%" : `${(i + 1) * 15}%`,
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
