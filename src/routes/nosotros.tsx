import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Heart, Award, Users, Lightbulb, Rocket, Briefcase, MonitorSmartphone, TrendingUp } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui-custom/SectionHeading";
import { Reveal } from "@/components/ui-custom/Reveal";
import { MetricsBand } from "@/components/sections/MetricsBand";
import { CTASection } from "@/components/sections/CTASection";
import aboutTeam from "@/assets/about-team.jpg";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Nosotros — TECNOATOM" },
      { name: "description", content: "Conoce a TECNOATOM: equipo, misión, visión y valores de una empresa de software con propósito." },
      { property: "og:title", content: "Nosotros — TECNOATOM" },
      { property: "og:description", content: "Equipo, misión y visión de TECNOATOM." },
    ],
  }),
  component: NosotrosPage,
});

const timeline = [
  {
    period: "Enero 2024",
    title: "El Inicio",
    text: "Nace TECNOATOM en Bucaramanga con una misión clara: transformar el desarrollo de software y crear plataformas de alto impacto.",
    icon: Rocket
  },
  {
    period: "Abril 2024",
    title: "Primeros Grandes Proyectos",
    text: "Comenzamos a trabajar con empresas medianas, desarrollando soluciones a medida que marcaron nuestros primeros casos de éxito.",
    icon: Briefcase
  },
  {
    period: "Agosto 2024",
    title: "Lanzamiento de Constructa",
    text: "Liberamos la primera versión de nuestro ERP insignia, diseñado específicamente para revolucionar la gestión en el sector construcción.",
    icon: MonitorSmartphone
  },
  {
    period: "Hoy",
    title: "Escalando el Futuro",
    text: "Un equipo consolidado, infraestructura 100% cloud y una cartera de clientes en crecimiento continuo a nivel nacional.",
    icon: TrendingUp
  }
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
                alt="Equipo TECNOATOM" 
                className="h-[400px] sm:h-[500px] w-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                loading="lazy" 
              />
              
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 z-20 rounded-2xl bg-black/40 backdrop-blur-md p-4 sm:p-5 border border-white/20 shadow-glow"
              >
                <div className="text-3xl sm:text-4xl font-bold text-white">2024</div>
                <div className="text-[10px] sm:text-xs text-white/80 uppercase tracking-widest mt-1">Año de fundación</div>
              </motion.div>
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
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, type: "spring" }}
              className="group relative overflow-hidden rounded-[2rem] border border-border bg-card p-8 sm:p-10 transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-elegant"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-soft transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <b.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-2xl font-bold">{b.title}</h3>
                <p className="mt-3 text-base text-muted-foreground leading-relaxed">{b.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <AnimatedTimeline />

      {/* VALORES - Re-estilizados */}
      <section className="bg-surface py-16 sm:py-24 relative">
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="container-x">
          <SectionHeading eyebrow="Lo que nos mueve" title="Valores que practicamos a diario" />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {valores.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative rounded-3xl border border-border bg-card p-8 text-center transition-all duration-300 hover:border-primary/20 hover:shadow-soft"
              >
                <div className="absolute inset-x-0 top-0 h-1 origin-center scale-x-0 bg-gradient-primary transition-transform duration-500 group-hover:scale-x-100 rounded-t-3xl" />
                <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <MetricsBand />
      <CTASection title="Trabajemos juntos" subtitle="Tenemos el equipo, la experiencia y la pasión. Sólo falta tu reto." />
    </>
  );
}

function AnimatedTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end 80%"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden" ref={containerRef}>
      <div className="container-x relative z-10">
        <SectionHeading 
          eyebrow="Nuestra Historia" 
          title="El camino recorrido" 
          subtitle="De una gran idea a una empresa consolidada en tiempo récord durante 2024." 
        />
        
        <div className="relative mt-20 sm:mt-24 mx-auto max-w-4xl">
          {/* Background Line */}
          <div className="absolute left-[31px] top-0 bottom-0 w-0.5 bg-border lg:left-1/2 lg:-translate-x-1/2" />
          
          {/* Animated Scroll Line */}
          <motion.div 
            className="absolute left-[31px] top-0 w-0.5 bg-gradient-primary lg:left-1/2 lg:-translate-x-1/2 origin-top"
            style={{ height: lineHeight }}
          />

          <div className="space-y-8 sm:space-y-12">
            {timeline.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ item, index }: { item: any, index: number }) {
  const isEven = index % 2 === 0;

  return (
    <div className="relative pl-20 lg:pl-0 lg:grid lg:grid-cols-2 lg:gap-12 items-center group">
      {/* Node / Icon */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-16 flex justify-center lg:left-1/2 lg:-translate-x-1/2 z-10">
        <motion.div 
          initial={{ scale: 0, rotate: -90 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-background border-2 border-border shadow-glow flex items-center justify-center text-primary z-10 transition-all duration-500 group-hover:scale-110 group-hover:border-primary group-hover:bg-primary/5 group-hover:shadow-elegant"
        >
          <item.icon className="h-5 w-5 sm:h-6 sm:w-6" />
        </motion.div>
      </div>

      {/* Content Column */}
      <div className={`${isEven ? "lg:col-start-1 lg:text-right" : "lg:col-start-2 lg:text-left"}`}>
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
          className="relative p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-soft transition-all duration-300 group-hover:shadow-elegant group-hover:-translate-y-1"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-primary mb-3 sm:mb-4 ring-1 ring-primary/20">
            {item.period}
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{item.title}</h3>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{item.text}</p>
        </motion.div>
      </div>
    </div>
  );
}
