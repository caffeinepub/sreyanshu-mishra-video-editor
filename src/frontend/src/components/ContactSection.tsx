import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Linkedin, Loader2, Mail, Youtube } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useSubmitContactForm } from "../hooks/useQueries";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("");
  const [message, setMessage] = useState("");

  const { mutateAsync, isPending } = useSubmitContactForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const fullMessage = projectType
        ? `[Project Type: ${projectType}] ${message}`
        : message;
      await mutateAsync({ name, email, message: fullMessage });
      toast.success("Message sent! I'll get back to you shortly.");
      setName("");
      setEmail("");
      setProjectType("");
      setMessage("");
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, oklch(55% 0.12 70 / 0.6), transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
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
              Get In Touch
            </span>
            <div className="w-12 h-px bg-gold" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl md:text-5xl font-black text-white mb-4"
          >
            Let&apos;s Create Something{" "}
            <span className="text-gold">Extraordinary</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/60 text-lg"
          >
            Ready to elevate your brand&apos;s visual story? Let&apos;s talk.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label
                  htmlFor="contact-name"
                  className="text-white/70 text-sm tracking-wide"
                >
                  Full Name
                </Label>
                <Input
                  id="contact-name"
                  data-ocid="contact.name.input"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className="bg-card/50 border-border/50 focus:border-primary/60 placeholder:text-white/30"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="contact-email"
                  className="text-white/70 text-sm tracking-wide"
                >
                  Email Address
                </Label>
                <Input
                  id="contact-email"
                  data-ocid="contact.email.input"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="bg-card/50 border-border/50 focus:border-primary/60 placeholder:text-white/30"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-white/70 text-sm tracking-wide">
                Project Type
              </Label>
              <Select value={projectType} onValueChange={setProjectType}>
                <SelectTrigger
                  data-ocid="contact.project_type.select"
                  className="bg-card/50 border-border/50 focus:border-primary/60"
                >
                  <SelectValue placeholder="Select project type" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border/50">
                  <SelectItem value="Commercial">Commercial</SelectItem>
                  <SelectItem value="Music Video">Music Video</SelectItem>
                  <SelectItem value="Documentary">Documentary</SelectItem>
                  <SelectItem value="Motion Graphics">
                    Motion Graphics
                  </SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="contact-message"
                className="text-white/70 text-sm tracking-wide"
              >
                Your Message
              </Label>
              <Textarea
                id="contact-message"
                data-ocid="contact.message.textarea"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                placeholder="Tell me about your project..."
                className="bg-card/50 border-border/50 focus:border-primary/60 placeholder:text-white/30 resize-none"
              />
            </div>

            <button
              type="submit"
              data-ocid="contact.submit_button"
              disabled={isPending}
              className="w-full py-4 bg-gold text-black font-bold text-sm tracking-widest uppercase rounded-sm hover:shadow-gold-strong hover:scale-[1.02] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isPending && <Loader2 className="animate-spin" size={16} />}
              {isPending ? "Sending..." : "Send Message"}
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="p-6 border border-border/40 rounded-sm bg-card/40">
              <h3 className="font-display text-lg font-bold text-gold mb-4">
                Direct Contact
              </h3>
              <a
                href="mailto:sreyansu5559@gmail.com"
                className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors text-sm"
              >
                <Mail size={16} className="text-gold" />
                sreyansu5559@gmail.com
              </a>
            </div>

            <div className="p-6 border border-border/40 rounded-sm bg-card/40">
              <h3 className="font-display text-lg font-bold text-gold mb-4">
                Follow My Work
              </h3>
              <div className="flex flex-col gap-3">
                <a
                  href="https://www.instagram.com/hypnotic_sreyansu?igsh=MWljOHBmcjg3andl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/60 hover:text-gold transition-colors text-sm group"
                >
                  <div className="w-8 h-8 rounded-sm border border-border/50 group-hover:border-primary/50 flex items-center justify-center transition-colors">
                    <Instagram size={15} />
                  </div>
                  @hypnotic_sreyansu
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/60 hover:text-gold transition-colors text-sm group"
                >
                  <div className="w-8 h-8 rounded-sm border border-border/50 group-hover:border-primary/50 flex items-center justify-center transition-colors">
                    <Youtube size={15} />
                  </div>
                  YouTube
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/60 hover:text-gold transition-colors text-sm group"
                >
                  <div className="w-8 h-8 rounded-sm border border-border/50 group-hover:border-primary/50 flex items-center justify-center transition-colors">
                    <Linkedin size={15} />
                  </div>
                  LinkedIn
                </a>
              </div>
            </div>

            <blockquote className="relative p-6 border-l-2 border-primary">
              <p className="text-white/50 text-sm italic leading-relaxed">
                &ldquo;Every frame is a decision. Every cut is a statement.
                Together, we craft your visual legacy.&rdquo;
              </p>
              <cite className="block mt-3 text-gold text-xs tracking-widest uppercase not-italic">
                — Sreyanshu Mishra
              </cite>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
