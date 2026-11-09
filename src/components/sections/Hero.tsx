import { Link } from "@tanstack/react-router";
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

      <div
        aria-hidden
        className="animate-glow-pulse absolute -top-32 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary-glow/40 blur-3xl [animation-duration:8s]"
      />

      <div className="container-x relative z-10 pb-24 pt-20 sm:pb-32 sm:pt-28 lg:pb-40 lg:pt-36">
        <div className="mx-auto max-w-4xl text-center">
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white/85 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Empresa de software
          </div>

          <h1 className="animate-fade-up mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            Soluciones{" "}
            <span className="text-gradient-accent">empresariales</span>
            <br className="hidden sm:block" /> que mueven tu operación.
          </h1>

          <p
            className="animate-fade-up mx-auto mt-6 max-w-2xl text-pretty text-base text-white/75 sm:text-lg"
            style={{ animationDelay: "0.1s" }}
          >
            Software a la medida, consultoría TI y Constructa ERP — la plataforma
            diseñada para empresas que ejecutan obras de licitación y construcción.
          </p>

          <div
            className="animate-fade-up mt-10 flex flex-wrap items-center justify-center gap-3"
            style={{ animationDelay: "0.2s" }}
          >
            <Link
              to="/contacto"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-accent px-7 text-sm font-semibold text-accent-foreground transition hover:brightness-110 hover:-translate-y-0.5"
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
          </div>

          <div
            className="animate-fade-up mt-16 grid grid-cols-3 gap-4 sm:gap-8"
            style={{ animationDelay: "0.3s" }}
          >
            {[
              { k: "99+", v: "Proyectos entregados" },
              { k: "100%", v: "Cloud nativo" },
              { k: "45+", v: "Módulos desarrollados" },
            ].map((s) => (
              <div key={s.v} className="text-center">
                <div className="text-2xl font-semibold text-white sm:text-4xl">{s.k}</div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-white/55 sm:text-xs">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <img
        src={logoMark}
        alt=""
        aria-hidden
        className="animate-float pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 opacity-[0.07] sm:h-[420px] sm:w-[420px]"
      />
    </section>
  );
}

export default Hero;
