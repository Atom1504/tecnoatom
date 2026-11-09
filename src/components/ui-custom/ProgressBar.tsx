import { motion, type Variants } from "framer-motion";

const fillVariants: Variants = {
  empty: { scaleX: 0 },
  filled: { scaleX: 1 },
};

/** The track drives the animation: a fill scaled to zero has no area to observe. */
export function ProgressBar({
  value,
  colorClass,
  duration = 1,
}: {
  value: number;
  colorClass: string;
  duration?: number;
}) {
  return (
    <motion.div
      className="mt-1.5 h-2 overflow-hidden rounded-full bg-white/10"
      initial="empty"
      whileInView="filled"
      viewport={{ once: true }}
    >
      <motion.div
        style={{ width: `${value}%` }}
        variants={fillVariants}
        transition={{ duration, ease: "easeOut" }}
        className={`h-full origin-left rounded-full bg-gradient-to-r ${colorClass}`}
      />
    </motion.div>
  );
}
