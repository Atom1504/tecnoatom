import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => `${Math.round(v).toLocaleString("es-CO")}${suffix}`);

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration: 1.6, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, mv, to]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export function MetricsBand() {
  const metrics = [
    { value: 99, suffix: "+", label: "Proyectos entregados" },
    { value: 45, suffix: "+", label: "Módulos operativos" },
    { value: 150, suffix: "+", label: "Procesos optimizados" },
    { value: 100, suffix: "%", label: "Infraestructura Cloud" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-hero py-16 text-white sm:py-20">
      <div className="absolute inset-0 bg-gradient-radial opacity-60" aria-hidden />
      <div className="absolute inset-0 grid-pattern opacity-[0.08]" aria-hidden />
      <div className="container-x relative z-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center"
            >
              <div className="text-5xl font-semibold tracking-tight text-gradient-accent sm:text-6xl">
                <Counter to={m.value} suffix={m.suffix} />
              </div>
              <div className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-white/65">
                {m.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MetricsBand;