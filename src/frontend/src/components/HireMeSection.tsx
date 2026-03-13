import {
  Award,
  Clock,
  Film,
  Layers,
  Mail,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

const reasons = [
  {
    icon: Zap,
    title: "Lightning-Fast Delivery",
    desc: "Deadlines are sacred. Every project delivered on time, every time, without compromising quality.",
    color: "blue",
  },
  {
    icon: Award,
    title: "Award-Winning Quality",
    desc: "Recognized work with 20+ accolades. Every frame crafted with cinematic precision.",
    color: "red",
  },
  {
    icon: Film,
    title: "Pro-Level Software Mastery",
    desc: "After Effects, DaVinci Resolve, Premiere Pro — wielded at an expert level for stunning results.",
    color: "blue",
  },
  {
    icon: Layers,
    title: "Full-Stack Post-Production",
    desc: "Color grading, VFX, motion graphics — one editor, complete control over your final cut.",
    color: "red",
  },
  {
    icon: Clock,
    title: "4+ Years Experience",
    desc: "Deep expertise built across 50+ projects for 80+ satisfied clients across multiple industries.",
    color: "blue",
  },
  {
    icon: Star,
    title: "Storytelling That Sells",
    desc: "Visuals that don't just look good — they engage audiences and convert viewers into customers.",
    color: "red",
  },
  {
    icon: Sparkles,
    title: "Unique Creative Vision",
    desc: "No templates, no cookie-cutter edits. Every project gets a signature cinematic treatment.",
    color: "blue",
  },
];

export default function HireMeSection() {
  return (
    <section id="hire-me" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, oklch(55% 0.22 250 / 0.4), transparent 55%), radial-gradient(ellipse at 70% 50%, oklch(55% 0.22 25 / 0.35), transparent 55%)",
        }}
      />
      {/* Animated grid lines */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(oklch(70% 0.2 250) 1px, transparent 1px), linear-gradient(90deg, oklch(70% 0.2 250) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Email bar above section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          <div
            className="flex items-center gap-3 px-6 py-3 rounded-sm border border-blue-500/40 bg-blue-500/10"
            style={{
              boxShadow:
                "0 0 24px oklch(60% 0.28 250 / 0.3), inset 0 0 20px oklch(60% 0.28 250 / 0.05)",
            }}
          >
            <Mail size={16} className="text-blue-400" />
            <a
              href="mailto:sreyansu5559@gmail.com"
              className="text-blue-300 text-sm tracking-widest font-medium hover:text-blue-200 transition-colors"
              data-ocid="hire_me.email.link"
            >
              sreyansu5559@gmail.com
            </a>
          </div>
        </motion.div>

        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div
              className="w-12 h-px"
              style={{ background: "oklch(60% 0.28 250)" }}
            />
            <span
              className="text-sm tracking-[0.3em] uppercase font-medium"
              style={{
                color: "oklch(70% 0.28 250)",
                textShadow: "0 0 16px oklch(60% 0.28 250 / 0.8)",
              }}
            >
              The Case For Me
            </span>
            <div
              className="w-12 h-px"
              style={{ background: "oklch(60% 0.28 250)" }}
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl md:text-6xl font-black text-white mb-4"
          >
            Why Should You{" "}
            <span
              style={{
                color: "oklch(65% 0.3 25)",
                textShadow:
                  "0 0 30px oklch(60% 0.3 25 / 0.8), 0 0 60px oklch(55% 0.25 25 / 0.4)",
              }}
            >
              Hire Me?
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/60 text-lg max-w-2xl mx-auto"
          >
            Because mediocre video editing is everywhere. Exceptional
            storytelling is rare.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reasons.map((reason, i) => {
            const isBlue = reason.color === "blue";
            const primary = isBlue ? "oklch(65% 0.3 250)" : "oklch(65% 0.3 25)";
            const glow = isBlue
              ? "oklch(60% 0.28 250 / 0.5)"
              : "oklch(60% 0.28 25 / 0.5)";
            const bgGlow = isBlue
              ? "oklch(55% 0.25 250 / 0.06)"
              : "oklch(55% 0.25 25 / 0.06)";

            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 40, rotateX: 15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                whileHover={{ scale: 1.04, y: -6 }}
                data-ocid={`hire_me.card.${i + 1}`}
                style={{
                  perspective: 800,
                  transformStyle: "preserve-3d",
                }}
                className="relative group cursor-default"
              >
                {/* 3D card body */}
                <div
                  className="relative p-6 rounded-sm border h-full"
                  style={{
                    background: `linear-gradient(135deg, ${bgGlow}, oklch(10% 0.02 0 / 0.8))`,
                    borderColor: `${primary}55`,
                    boxShadow: `0 0 0 1px ${primary}22, 0 4px 30px ${glow}33`,
                    transition: "box-shadow 0.3s",
                  }}
                >
                  {/* Glowing top edge accent */}
                  <div
                    className="absolute top-0 left-4 right-4 h-px"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${primary}, transparent)`,
                    }}
                  />

                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-sm flex items-center justify-center mb-4 border"
                    style={{
                      borderColor: `${primary}44`,
                      background: `${primary}15`,
                      boxShadow: `0 0 20px ${glow}`,
                    }}
                  >
                    <reason.icon
                      size={22}
                      style={{
                        color: primary,
                        filter: `drop-shadow(0 0 8px ${glow})`,
                      }}
                    />
                  </div>

                  <h3
                    className="font-display font-bold text-base mb-2"
                    style={{ color: primary, textShadow: `0 0 12px ${glow}` }}
                  >
                    {reason.title}
                  </h3>
                  <p className="text-white/55 text-sm leading-relaxed">
                    {reason.desc}
                  </p>

                  {/* Corner accents */}
                  <div
                    className="absolute top-2 right-2 w-3 h-3 border-t border-r"
                    style={{ borderColor: `${primary}66` }}
                  />
                  <div
                    className="absolute bottom-2 left-2 w-3 h-3 border-b border-l"
                    style={{ borderColor: `${primary}66` }}
                  />
                </div>
              </motion.div>
            );
          })}

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: reasons.length * 0.08 }}
            whileHover={{ scale: 1.04, y: -6 }}
            className="relative group sm:col-span-2 lg:col-span-1"
          >
            <a
              href="mailto:sreyansu5559@gmail.com"
              data-ocid="hire_me.cta.button"
              className="block p-6 rounded-sm border h-full text-center"
              style={{
                background:
                  "linear-gradient(135deg, oklch(55% 0.28 250 / 0.12), oklch(55% 0.28 25 / 0.12))",
                borderColor: "oklch(60% 0.28 250 / 0.5)",
                boxShadow:
                  "0 0 30px oklch(60% 0.28 250 / 0.25), 0 0 30px oklch(60% 0.28 25 / 0.15)",
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, oklch(65% 0.3 250), oklch(65% 0.3 25))",
                }}
              />
              <Mail
                size={32}
                className="mx-auto mb-4"
                style={{
                  color: "oklch(75% 0.25 250)",
                  filter: "drop-shadow(0 0 12px oklch(60% 0.28 250 / 0.8))",
                }}
              />
              <h3
                className="font-display font-black text-xl mb-2"
                style={{
                  background:
                    "linear-gradient(90deg, oklch(70% 0.28 250), oklch(70% 0.28 25))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Ready to Work Together?
              </h3>
              <p className="text-white/50 text-sm mb-4">
                Drop me an email and let's talk about your project.
              </p>
              <span
                className="text-sm font-bold tracking-widest uppercase"
                style={{
                  color: "oklch(70% 0.28 250)",
                  textShadow: "0 0 12px oklch(60% 0.28 250)",
                }}
              >
                sreyansu5559@gmail.com
              </span>
            </a>
          </motion.div>
        </div>

        {/* Bottom divider quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-4">
            <div
              className="w-16 h-px"
              style={{ background: "oklch(60% 0.28 250 / 0.5)" }}
            />
            <span className="text-white/30 text-xs tracking-widest uppercase">
              Excellence is not optional
            </span>
            <div
              className="w-16 h-px"
              style={{ background: "oklch(60% 0.28 25 / 0.5)" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
