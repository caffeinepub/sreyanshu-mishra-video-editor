import { motion } from "motion/react";
import { useRef, useState } from "react";

const tools = [
  {
    name: "Adobe After Effects",
    image: "/assets/generated/after-effects-icon.dim_400x400.png",
    tagline: "Visual Effects & Motion Graphics",
    description:
      "Bringing imagination to life through particle systems, kinetic typography, and seamless compositing. After Effects is the canvas where frames become art.",
    skills: [
      "Visual Effects",
      "Motion Graphics",
      "Compositing",
      "Title Animation",
      "3D Layers",
    ],
    color: "#9b59b6",
  },
  {
    name: "DaVinci Resolve",
    image: "/assets/generated/davinci-icon.dim_400x400.png",
    tagline: "Color Grading & Post-Production",
    description:
      "Achieving the perfect cinematic look with industry-standard color science and precision audio mixing. Every frame is a painting, and DaVinci is the palette.",
    skills: [
      "Color Grading",
      "Color Correction",
      "Audio Mixing",
      "Film Grain",
      "LUT Mastering",
    ],
    color: "#e8b84b",
  },
  {
    name: "Adobe Premiere Pro",
    image: "/assets/generated/premiere-icon.dim_400x400.png",
    tagline: "Precision Editing & Storytelling",
    description:
      "Crafting compelling narratives with surgical cut precision, multi-cam editing, and seamless project management. The engine that drives every story forward.",
    skills: [
      "Non-Linear Editing",
      "Multi-Cam",
      "Audio Sync",
      "Export Mastering",
      "Collaboration",
    ],
    color: "#7b68ee",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

function ToolCard({ tool, index }: { tool: (typeof tools)[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 12;
    const y = -((e.clientX - rect.left) / rect.width - 0.5) * 12;
    setTilt({ x, y });
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      data-ocid={`tools.item.${index + 1}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.15s ease-out",
      }}
      className="relative group border border-border/40 rounded-sm bg-card/60 backdrop-blur-sm p-8 hover:border-primary/60 cursor-default"
    >
      {/* Glow on hover */}
      <div
        className="absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          boxShadow: `0 0 40px ${tool.color}20, inset 0 0 40px ${tool.color}08`,
        }}
      />

      {/* Icon */}
      <div className="relative z-10 mb-6 flex justify-center">
        <div
          className="w-24 h-24 rounded-sm overflow-hidden border border-border/50 group-hover:border-primary/50 transition-colors duration-300"
          style={{ boxShadow: `0 0 20px ${tool.color}30` }}
        >
          <img
            src={tool.image}
            alt={tool.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Name */}
      <h3 className="relative z-10 font-display text-xl font-bold text-gold text-center mb-1">
        {tool.name}
      </h3>
      <p className="relative z-10 text-white/50 text-sm text-center mb-4 italic">
        {tool.tagline}
      </p>

      {/* Description */}
      <p className="relative z-10 text-white/70 text-sm leading-relaxed mb-6">
        {tool.description}
      </p>

      {/* Skills */}
      <div className="relative z-10 flex flex-wrap gap-2">
        {tool.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 text-xs border border-primary/30 text-primary/80 rounded-full bg-primary/5 font-medium"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}

export default function ToolsSection() {
  return (
    <section id="services" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950/50 to-black" />

      {/* Decorative grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(75% 0.15 75) 1px, transparent 1px), linear-gradient(90deg, oklch(75% 0.15 75) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
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
              The Toolkit
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
            Powered by Industry-Leading <span className="text-gold">Tools</span>
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
          className="grid md:grid-cols-3 gap-6"
        >
          {tools.map((tool, i) => (
            <ToolCard key={tool.name} tool={tool} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
