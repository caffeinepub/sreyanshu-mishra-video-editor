import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setActive(href);
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          type="button"
          onClick={() => handleNav("#home")}
          className="font-display text-2xl font-bold shimmer-text tracking-widest"
        >
          SM
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.href}
              data-ocid={`nav.${link.label.toLowerCase()}.link`}
              onClick={() => handleNav(link.href)}
              className={`relative text-sm font-medium tracking-wide transition-colors duration-200 ${
                active === link.href
                  ? "text-gold"
                  : "text-white/70 hover:text-white"
              } group`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300 ${
                  active === link.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </button>
          ))}
        </div>

        <div className="hidden md:block">
          <button
            type="button"
            data-ocid="nav.contact.primary_button"
            onClick={() => handleNav("#contact")}
            className="px-5 py-2 border border-primary/60 text-primary text-sm font-medium rounded-sm hover:bg-primary/10 transition-all duration-200"
          >
            Hire Me
          </button>
        </div>

        <button
          type="button"
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-black/95 backdrop-blur-md border-b border-white/5 px-6 pb-6"
        >
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.href}
              data-ocid={`nav.${link.label.toLowerCase()}.link`}
              onClick={() => handleNav(link.href)}
              className="block w-full text-left py-3 text-white/80 hover:text-gold border-b border-white/5 last:border-0 transition-colors"
            >
              {link.label}
            </button>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
