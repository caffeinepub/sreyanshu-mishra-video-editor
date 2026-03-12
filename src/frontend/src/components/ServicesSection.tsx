import { Film, Palette, Sparkles, Wand2 } from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    icon: Film,
    title: "Video Editing",
    description:
      "From long-form documentaries to punchy social reels, every cut is deliberate. Multi-cam setups, interview sequences, narrative storytelling — I handle it all with precision.",
    details: [
      "Long-form & Short-form",
      "Multi-Cam Editing",
      "Documentary Cuts",
      "Commercial Reels",
    ],
  },
  {
    icon: Sparkles,
    title: "Motion Graphics",
    description:
      "Animated lower thirds, kinetic typography, infographics that breathe — motion graphics that communicate your message before a word is spoken.",
    details: [
      "Lower Thirds",
      "Title Cards",
      "Animated Infographics",
      "Kinetic Typography",
    ],
  },
  {
    icon: Palette,
    title: "Color Grading",
    description:
      "Science meets artistry. I craft cinematic LUTs and mood-precise color palettes that transform your footage into a visual signature your audience will recognize instantly.",
    details: [
      "Cinematic LUTs",
      "Mood-Based Color Science",
      "Film Emulation",
      "HDR Mastering",
    ],
  },
  {
    icon: Wand2,
    title: "VFX & Compositing",
    description:
      "Green screen removal, particle explosions, light leaks, sky replacements — visual enhancements that blur the line between reality and imagination.",
    details: [
      "Green Screen",
      "Particle Effects",
      "Sky Replacement",
      "Visual Enhancements",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.13, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export default function ServicesSection() {
  return (
    <section id="services-detail" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-5 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(75% 0.15 75), transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="w-12 h-px bg-gold" />
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
              Services
            </span>
            <div className="w-12 h-px bg-gold" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl md:text-5xl font-black text-white"
          >
            What I <span className="text-gold">Deliver</span>
          </motion.h2>
          {/* Animated underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-4 mx-auto h-0.5 w-24 bg-gradient-to-r from-transparent via-gold to-transparent origin-center"
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                data-ocid={`services.item.${i + 1}`}
                className="group relative p-8 border border-border/40 rounded-sm bg-card/40 backdrop-blur-sm overflow-hidden cursor-default hover:border-primary/50 animate-border-glow transition-colors duration-300"
              >
                {/* BG glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon */}
                <div className="relative z-10 mb-5">
                  <div className="w-12 h-12 rounded-sm border border-primary/40 flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="text-gold" size={22} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="relative z-10 font-display text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 text-white/60 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Details */}
                <ul className="relative z-10 space-y-1.5">
                  {service.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-center gap-2 text-sm text-white/50"
                    >
                      <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>

                {/* Bottom border */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-gold to-transparent transition-all duration-700" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
