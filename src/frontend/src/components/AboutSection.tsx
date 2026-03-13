import { Trophy } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
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
        isAward ? "text-awards-red" : isBlue ? "text-white/60" : "text-gold"
      }`}
    >
      {count}
      {suffix}
    </span>
  );
}

function InstagramCard() {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-60, 60], [18, -18]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-60, 60], [-18, 18]), {
    stiffness: 200,
    damping: 20,
  });

  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.a
      ref={cardRef}
      href="https://www.instagram.com/hypnotic_sreyansu?igsh=MWljOHBmcjg3andl"
      target="_blank"
      rel="noopener noreferrer"
      data-ocid="about.instagram.link"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 800,
      }}
      className="mt-10 inline-flex items-center gap-4 group cursor-pointer select-none"
    >
      {/* 3D Card */}
      <div
        style={{ transformStyle: "preserve-3d" }}
        className="relative px-6 py-4 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl overflow-hidden"
      >
        {/* Instagram gradient fill */}
        <div
          className="absolute inset-0 opacity-20 group-hover:opacity-35 transition-opacity duration-500"
          style={{
            background:
              "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
          }}
        />
        {/* Shimmer streak */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.08) 50%, transparent 70%)",
            animation: "igShimmer 3s ease-in-out infinite",
          }}
        />
        {/* Glow border */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            boxShadow:
              "0 0 24px 4px rgba(220,39,67,0.25), 0 0 8px 1px rgba(240,148,51,0.2)",
          }}
        />

        {/* Floating orb behind icon */}
        <div
          className="absolute -top-4 -left-4 w-20 h-20 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(240,148,51,0.3) 0%, transparent 70%)",
            filter: "blur(12px)",
          }}
        />

        <div
          className="relative z-10 flex items-center gap-4"
          style={{ transform: "translateZ(20px)" }}
        >
          {/* Instagram SVG icon */}
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
            style={{
              background:
                "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
              boxShadow:
                "0 4px 20px rgba(220,39,67,0.5), 0 0 10px rgba(240,148,51,0.4)",
            }}
          >
            <svg
              role="img"
              aria-label="Instagram"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Instagram</title>
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </div>

          <div>
            <p className="text-white/50 text-xs tracking-[0.2em] uppercase mb-0.5">
              Follow on
            </p>
            <p
              className="text-white font-bold text-lg tracking-wide"
              style={{ textShadow: "0 0 12px rgba(240,148,51,0.6)" }}
            >
              @hypnotic_sreyansu
            </p>
          </div>

          {/* Arrow */}
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{
              duration: 1.6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="ml-2 text-white/50 group-hover:text-white/90 transition-colors"
          >
            <svg
              role="img"
              aria-label="Go to Instagram"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <title>Go to Instagram</title>
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes igShimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </motion.a>
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

            {/* Instagram 3D Card */}
            <InstagramCard />
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
                      ? "border-white/10"
                      : "border-border/50 hover:border-primary/50"
                }`}
                style={stat.isAward ? { cursor: "default" } : {}}
              >
                {!stat.isAward && !stat.isBlue && (
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(circle at 50% 50%, oklch(75% 0.15 75 / 0.12) 0%, transparent 70%)",
                    }}
                  />
                )}
                {stat.isBlue && (
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(circle at 50% 50%, #00aaff18 0%, transparent 70%)",
                    }}
                  />
                )}
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
