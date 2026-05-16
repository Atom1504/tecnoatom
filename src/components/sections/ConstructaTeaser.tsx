import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Building2, BarChart3, ClipboardCheck, Layers } from "lucide-react";
import constructaBg from "@/assets/constructa-bg.jpg";
import { Reveal } from "@/components/ui-custom/Reveal";

const modules = [
  { icon: ClipboardCheck, label: "Control de presupuestos" },
  { icon: BarChart3, label: "Dashboards ejecutivos" },
  { icon: Building2, label: "Avance de obra" },
  { icon: Layers, label: "Gestión de proyectos" },
];

export function ConstructaTeaser() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <img
        src={constructaBg}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-30"
        loading="lazy"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(120deg, oklch(0.12 0.04 280 / 0.95) 0%, oklch(0.18 0.08 290 / 0.85) 60%, oklch(0.28 0.13 295 / 0.8) 100%)",
        }}
        aria-hidden
      />
      <div className="container-x relative z-10 py-24 sm:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-white/85 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Producto destacado
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                <span className="text-gradient-accent">Constructa</span> ERP
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 max-w-xl text-pretty text-base text-white/75 sm:text-lg">
                El ERP creado para empresas que licitan y ejecutan obras de construcción.
                Presupuesto, compras, avance, proveedores y analítica — en una sola plataforma.
              </p>
            </Reveal>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {modules.map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-primary">
                    <m.icon className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-white/90">{m.label}</span>
                </motion.div>
              ))}
            </div>

            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/constructa"
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-accent px-7 text-sm font-semibold text-accent-foreground transition hover:brightness-110 hover:-translate-y-0.5"
                >
                  Conoce Constructa
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/contacto"
                  className="inline-flex h-12 items-center justify-center rounded-lg border border-white/20 bg-white/5 px-7 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
                >
                  Solicitar demo
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="relative">
              <div className="glass rounded-3xl border-white/10 p-6 shadow-glow">
                <div className="flex items-center justify-between text-xs text-white/60">
                  <span>OBRA · Edificio Andina · Licitación 2024-038</span>
                  <span className="rounded-full bg-accent/20 px-2 py-0.5 text-accent">En curso</span>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                  {[
                    { k: "78%", v: "Avance físico" },
                    { k: "64%", v: "Avance financiero" },
                    { k: "$2.1B", v: "Ejecutado" },
                  ].map((kpi) => (
                    <div key={kpi.v} className="rounded-xl bg-white/5 p-3">
                      <div className="text-xl font-semibold text-white">{kpi.k}</div>
                      <div className="mt-1 text-[10px] uppercase tracking-wider text-white/55">
                        {kpi.v}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 space-y-3">
                  {[
                    { name: "Cimentación", value: 100 },
                    { name: "Estructura", value: 92 },
                    { name: "Mampostería", value: 71 },
                    { name: "Acabados", value: 38 },
                  ].map((p) => (
                    <div key={p.name}>
                      <div className="flex items-center justify-between text-xs text-white/70">
                        <span>{p.name}</span>
                        <span>{p.value}%</span>
                      </div>
                      <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${p.value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-primary-glow to-accent"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                aria-hidden
                className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-r from-primary-glow/20 to-accent/20 blur-2xl"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default ConstructaTeaser;