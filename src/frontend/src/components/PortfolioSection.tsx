import { motion } from "motion/react";

const projects = [
  {
    image: "/assets/generated/portfolio-frame.dim_800x450.jpg",
    title: "Cinematic Brand Film",
    category: "Corporate / Commercial",
    tags: ["Premiere Pro", "After Effects"],
  },
  {
    image: "/assets/generated/portfolio-vfx.dim_800x450.jpg",
    title: "Motion Graphics Reel",
    category: "VFX / Motion",
    tags: ["After Effects", "3D Layers"],
  },
  {
    image: "/assets/generated/portfolio-cinematic.dim_800x450.jpg",
    title: "Cinematic Showreel",
    category: "Narrative / Film",
    tags: ["DaVinci Resolve", "Color Grading"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export default function PortfolioSection() {
  return (
    <section id="work" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-black" />

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
              Portfolio
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
            Featured <span className="text-gold">Work</span>
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
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              data-ocid={`portfolio.item.${i + 1}`}
              className="group relative overflow-hidden rounded-sm border border-border/40 cursor-pointer"
              style={{ transform: i === 1 ? "translateY(-20px)" : "none" }}
            >
              <div className="absolute -inset-px border border-primary/0 group-hover:border-primary/60 rounded-sm transition-all duration-500 z-20 pointer-events-none" />
              <div className="absolute -inset-1 border border-primary/0 group-hover:border-primary/20 rounded-sm transition-all duration-700 z-20 pointer-events-none" />

              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-primary text-xs font-medium tracking-widest uppercase mb-1">
                    {project.category}
                  </p>
                  <h3 className="font-display text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <div className="flex gap-2 mt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 bg-primary/20 border border-primary/30 text-primary/80 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <button
            type="button"
            data-ocid="portfolio.primary_button"
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="shimmer-border px-10 py-4 border border-primary/50 text-primary font-bold text-sm tracking-widest uppercase rounded-sm hover:bg-primary/10 hover:border-primary transition-all duration-300"
          >
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
}
