import { createFileRoute } from "@tanstack/react-router";
import { motion, type Variants } from "framer-motion";
import { Target, Eye, Heart, Award, Users, Lightbulb } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui-custom/SectionHeading";
import { Reveal } from "@/components/ui-custom/Reveal";
import { MetricsBand } from "@/components/sections/MetricsBand";
import { CTASection } from "@/components/sections/CTASection";
import aboutTeam from "@/assets/about-team.jpg";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/nosotros")({
  head: () =>
    seo({
      path: "/nosotros",
      title: "Nosotros — TECNOATOM",
      description:
        "Conoce a TECNOATOM: equipo, misión, visión y valores de una empresa de software con propósito.",
    }),
  component: NosotrosPage,
});

type Milestone = {
  label: string;
  period: string;
  title: string;
  text: string;
  isPresent?: boolean;
};

const timeline: Milestone[] = [
  {
    label: "2024",
    period: "Enero",
    title: "El inicio",
    text: "Nace TECNOATOM en Bucaramanga con una misión clara: transformar el desarrollo de software y crear plataformas de alto impacto.",
  },
  {
    label: "2024",
    period: "Abril",
    title: "Primeros grandes proyectos",
    text: "Comenzamos a trabajar con empresas medianas, desarrollando soluciones a medida que marcaron nuestros primeros casos de éxito.",
  },
  {
    label: "2024",
    period: "Agosto",
    title: "Lanzamiento de Constructa",
    text: "Liberamos la primera versión de nuestro ERP insignia, diseñado específicamente para revolucionar la gestión en el sector construcción.",
  },
  {
    label: "En curso",
    period: "Hoy",
    title: "Escalando el futuro",
    text: "Un equipo consolidado, infraestructura 100% cloud y una cartera de clientes en crecimiento continuo a nivel nacional.",
    isPresent: true,
  },
];

const valores = [
  { icon: Heart, title: "Compromiso", text: "Tu proyecto es nuestro proyecto. Punto." },
  { icon: Award, title: "Excelencia", text: "Lo bueno no basta. Buscamos lo notable." },
  { icon: Users, title: "Cercanía", text: "Equipos accesibles, comunicación honesta." },
  { icon: Lightbulb, title: "Innovación", text: "Curiosidad técnica al servicio del negocio." },
];

function NosotrosPage() {
  return (
    <>
      <PageHero
        eyebrow="Quiénes somos"
        title="Una empresa de software hecha por personas que aman crear"
        subtitle="Nacidos en 2024 con la visión de transformar ideas en plataformas modernas que mueven empresas reales."
      />

      {/* HISTORIA - Rediseñado con badge flotante y hover effect */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-30" aria-hidden />
        <div className="container-x grid gap-12 lg:gap-20 lg:grid-cols-2 lg:items-center relative z-10">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] shadow-elegant group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent mix-blend-overlay z-10 transition-opacity duration-700 group-hover:opacity-0" />
              <img 
                src={aboutTeam} 
                alt=""
                className="h-[400px] sm:h-[500px] w-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                loading="lazy" 
              />
              
              <div
                className="animate-float [animation-duration:4s] absolute bottom-6 left-6 sm:bottom-8 sm:left-8 z-20 rounded-2xl bg-black/40 backdrop-blur-md p-4 sm:p-5 border border-white/20 shadow-glow"
              >
                <div className="text-3xl sm:text-4xl font-bold text-white">2024</div>
                <div className="text-[10px] sm:text-xs text-white/80 uppercase tracking-widest mt-1">Año de fundación</div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <SectionHeading
              eyebrow="Nuestra historia"
              title="Tecnología con propósito"
              subtitle="Empezamos siendo un equipo ágil con grandes convicciones. Hoy somos una empresa consolidada, pero seguimos creyendo en lo mismo: el software bien hecho cambia compañías. Cada línea de código que escribimos está pensada para escalar y generar impacto real."
              align="left"
            />
          </Reveal>
        </div>
      </section>

      {/* MISIÓN, VISIÓN, PROMESA - Cards más grandes, interactivas y dinámicas */}
      <section className="bg-surface py-16 sm:py-24 relative">
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="container-x grid gap-8 lg:grid-cols-3">
          {[
            { icon: Target, title: "Misión", text: "Diseñar, construir y operar soluciones de software que generen ventajas competitivas sostenibles a nuestros clientes." },
            { icon: Eye, title: "Visión", text: "Ser referente latinoamericano en software empresarial y en plataformas verticales especializadas como Constructa." },
            { icon: Heart, title: "Promesa", text: "Software excelente, equipos comprometidos y resultados tangibles que impactan positivamente el balance financiero." },
          ].map((b, i) => (
            <Reveal key={b.title} delay={i * 0.1} className="group relative overflow-hidden rounded-[2rem] border border-border bg-card p-8 sm:p-10 transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-elegant">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-soft transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <b.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-2xl font-bold">{b.title}</h3>
                <p className="mt-3 text-base text-muted-foreground leading-relaxed">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Timeline />

      {/* VALORES - Re-estilizados */}
      <section className="bg-surface py-16 sm:py-24 relative">
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="container-x">
          <SectionHeading eyebrow="Lo que nos mueve" title="Valores que practicamos a diario" />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {valores.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08} className="group relative rounded-3xl border border-border bg-card p-8 text-center transition-all duration-300 hover:border-primary/20 hover:shadow-soft">
                <div className="absolute inset-x-0 top-0 h-1 origin-center scale-x-0 bg-gradient-primary transition-transform duration-500 group-hover:scale-x-100 rounded-t-3xl" />
                <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <MetricsBand />
      <CTASection title="Trabajemos juntos" subtitle="Tenemos el equipo, la experiencia y la pasión. Solo falta tu reto." />
    </>
  );
}

const stopsVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.3 } },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const nodeVariants: Variants = {
  hidden: { scale: 0 },
  visible: { scale: 1, transition: { type: "spring", stiffness: 320, damping: 20 } },
};

// clip-path draws the segment along whichever axis it has: down on mobile, right on desktop.
const segmentVariants: Variants = {
  hidden: { clipPath: "inset(0% 100% 100% 0%)" },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    transition: { duration: 0.5, delay: 0.1, ease: "easeInOut" },
  },
};

function Timeline() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Trayectoria"
          title="El camino recorrido"
          subtitle="Desde 2024, de una gran idea a una empresa consolidada."
          align="left"
        />

        <motion.ol
          className="mt-14 sm:mt-20 lg:grid lg:grid-cols-4"
          variants={stopsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
        >
          {timeline.map((milestone, index) => (
            <TimelineStop
              key={milestone.period}
              milestone={milestone}
              reachesPresent={index === timeline.length - 2}
            />
          ))}
        </motion.ol>
      </div>
    </section>
  );
}

function TimelineStop({
  milestone,
  reachesPresent,
}: {
  milestone: Milestone;
  reachesPresent: boolean;
}) {
  const { label, period, title, text, isPresent } = milestone;
  const segmentColor = reachesPresent
    ? "from-primary-glow to-accent"
    : "from-primary to-primary-glow";

  return (
    <motion.li
      variants={stopsVariants}
      className="grid grid-cols-[1rem_1fr] gap-x-5 lg:grid-cols-1 lg:content-start lg:gap-x-0"
    >
      <motion.div
        variants={fadeUpVariants}
        className="motion-reveal col-start-2 row-start-1 lg:col-start-1 lg:pr-8"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          {label}
        </p>
        <p
          className={`mt-1 font-display text-4xl font-semibold tracking-tight sm:text-5xl xl:text-6xl ${
            isPresent ? "text-gradient" : ""
          }`}
        >
          {period}
        </p>
      </motion.div>

      <div
        className="col-start-1 row-span-2 row-start-1 flex flex-col items-center lg:row-span-1 lg:row-start-2 lg:my-7 lg:flex-row"
        aria-hidden
      >
        <motion.span
          variants={nodeVariants}
          className="motion-reveal relative z-10 mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center lg:mt-0"
        >
          {isPresent && (
            <span className="absolute inset-0 animate-ping rounded-full bg-accent/60 motion-reduce:animate-none" />
          )}
          <span
            className={`relative h-3 w-3 rounded-full ${isPresent ? "bg-accent" : "bg-primary"}`}
          />
        </motion.span>

        {isPresent ? (
          <motion.span
            variants={segmentVariants}
            className="motion-reveal timeline-future hidden flex-1 border-t-2 border-dashed border-accent lg:block"
          />
        ) : (
          <motion.span
            variants={segmentVariants}
            className={`motion-reveal w-0.5 flex-1 bg-gradient-to-b lg:h-0.5 lg:w-auto lg:bg-gradient-to-r ${segmentColor}`}
          />
        )}
      </div>

      <motion.div
        variants={fadeUpVariants}
        className={`motion-reveal col-start-2 row-start-2 pt-3 lg:col-start-1 lg:row-start-3 lg:pb-0 lg:pr-10 lg:pt-0 ${
          isPresent ? "" : "pb-12"
        }`}
      >
        <h3 className="text-balance text-lg font-semibold sm:text-xl lg:min-h-14 xl:min-h-0">
          {title}
        </h3>
        <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{text}</p>
      </motion.div>
    </motion.li>
  );
}
