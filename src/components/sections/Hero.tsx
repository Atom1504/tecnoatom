import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import logoMark from "@/assets/logo-mark-light.png";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-hero text-white">
      <img
        src={heroBg}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-screen"
      />
      <div className="absolute inset-0 bg-gradient-radial opacity-80" aria-hidden />
      <div className="absolute inset-0 grid-pattern opacity-[0.08]" aria-hidden />

      <motion.div
        aria-hidden
        className="absolute -top-32 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary-glow/40 blur-3xl"
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-x relative z-10 pb-24 pt-20 sm:pb-32 sm:pt-28 lg:pb-40 lg:pt-36">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white/85 backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Empresa de Software
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl"
          >
            Soluciones{" "}
            <span className="text-gradient-accent">empresariales</span>
            <br className="hidden sm:block" /> que mueven tu operación.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-pretty text-base text-white/75 sm:text-lg"
          >
            Software a la medida, consultoría TI y Constructa ERP — la plataforma
            diseñada para empresas que ejecutan obras de licitación y construcción.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <Link
              to="/contacto"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-gradient-primary px-7 text-sm font-semibold text-primary-foreground shadow-elegant transition hover:shadow-glow hover:-translate-y-0.5"
            >
              Iniciar un proyecto
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/constructa"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-white/20 bg-white/5 px-7 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              Conoce Constructa
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-16 grid grid-cols-3 gap-4 sm:gap-8"
          >
            {[
              { k: "12+", v: "Años entregando" },
              { k: "80+", v: "Proyectos exitosos" },
              { k: "98%", v: "Retención de clientes" },
            ].map((s) => (
              <div key={s.v} className="text-center">
                <div className="text-2xl font-semibold text-white sm:text-4xl">{s.k}</div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-white/55 sm:text-xs">
                  {s.v}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.img
        src={logoMark}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 opacity-[0.07] sm:h-[420px] sm:w-[420px]"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}

export default Hero;