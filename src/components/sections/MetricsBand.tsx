import { animate } from "framer-motion";
import { useLayoutEffect, useRef } from "react";
import { Reveal } from "@/components/ui-custom/Reveal";
import { canAnimateEntrance, onFirstVisible } from "@/lib/motion";

const formatCount = (value: number, suffix: string) =>
  `${Math.round(value).toLocaleString("es-CO")}${suffix}`;

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element || !canAnimateEntrance(element)) return;

    element.textContent = formatCount(0, suffix);
    let stopAnimation: (() => void) | undefined;
    const stopObserving = onFirstVisible(element, () => {
      stopAnimation = animate(0, to, {
        duration: 1.6,
        ease: "easeOut",
        onUpdate: (value) => {
          element.textContent = formatCount(value, suffix);
        },
      }).stop;
    });
    return () => {
      stopObserving();
      stopAnimation?.();
    };
  }, [to, suffix]);

  return <span ref={ref}>{formatCount(to, suffix)}</span>;
}

export function MetricsBand() {
  const metrics = [
    { value: 99, suffix: "+", label: "Proyectos entregados" },
    { value: 45, suffix: "+", label: "Módulos desarrollados" },
    { value: 150, suffix: "+", label: "Procesos optimizados" },
    { value: 100, suffix: "%", label: "Infraestructura cloud" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-hero py-16 text-white sm:py-20">
      <div className="absolute inset-0 bg-gradient-radial opacity-60" aria-hidden />
      <div className="absolute inset-0 grid-pattern opacity-[0.08]" aria-hidden />
      <div className="container-x relative z-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.08} className="text-center">
              <div className="text-5xl font-semibold tracking-tight text-gradient-accent sm:text-6xl">
                <Counter to={m.value} suffix={m.suffix} />
              </div>
              <div className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-white/65">
                {m.label}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MetricsBand;
