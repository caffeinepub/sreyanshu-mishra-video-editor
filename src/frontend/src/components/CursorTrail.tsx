import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

export default function CursorTrail() {
  const [visible, setVisible] = useState(false);
  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  const x = useSpring(rawX, { stiffness: 180, damping: 22 });
  const y = useSpring(rawY, { stiffness: 180, damping: 22 });

  useEffect(() => {
    // Only show on desktop (pointer: fine)
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX - 8);
      rawY.set(e.clientY - 8);
      if (!visible) setVisible(true);
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [rawX, rawY, visible]);

  if (!visible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
      style={{ x, y }}
    >
      {/* Inner dot */}
      <div
        className="w-4 h-4 rounded-full"
        style={{
          background: "oklch(75% 0.15 75)",
          boxShadow:
            "0 0 6px oklch(75% 0.15 75 / 0.9), 0 0 18px oklch(75% 0.15 75 / 0.5), 0 0 35px oklch(75% 0.15 75 / 0.2)",
          opacity: 0.85,
        }}
      />
    </motion.div>
  );
}
