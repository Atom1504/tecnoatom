import { Link } from "@tanstack/react-router";
import { ArrowRight, LineChart, Database, PieChart, TrendingUp, Lightbulb, BarChart3, Filter } from "lucide-react";
import { motion } from "framer-motion";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/ui-custom/Reveal";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeading } from "@/components/ui-custom/SectionHeading";

export function DatosAnaliticaPage() {
  return (
    <>
      <PageHero
        eyebrow="Datos & Analítica"
        title="Decisiones basadas en evidencia, no en intuición"
        subtitle="Integramos, modelamos y visualizamos la información de toda tu empresa en tiempo real. Construye una única fuente de verdad y despídete de los reportes manuales contradictorios."
      >
        <Link
          to="/contacto"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-accent px-7 text-sm font-semibold text-accent-foreground transition hover:brightness-110"
        >
          Agendar consultoría de datos <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      {/* Sección de Valor */}
      <section className="py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Propuesta de Valor"
            title="Tus datos valen millones si sabes cómo leerlos"
            subtitle="La mayoría de empresas tienen toneladas de información paralizada. Nosotros la convertimos en un activo estratégico."
          />
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            <Reveal>
              <div className="rounded-3xl border border-border bg-card p-8 shadow-soft h-full flex flex-col">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-500">
                  <Filter className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">El Problema</h3>
                <p className="text-muted-foreground flex-1">
                  Silos de información, métricas que no cuadran entre departamentos, y directivos esperando semanas por un reporte en Excel que ya está obsoleto al recibirlo.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-primary/30 bg-primary/5 p-8 shadow-elegant h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                  <LineChart className="h-32 w-32 text-primary" />
                </div>
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
                  <LineChart className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">La Solución</h3>
                <p className="text-foreground/80 flex-1 relative z-10">
                  Data Warehousing y pipelines ETL automatizados que alimentan Dashboards ejecutivos interactivos (Power BI, Looker, Tableau) en tiempo real.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="rounded-3xl border border-border bg-card p-8 shadow-soft h-full flex flex-col">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">El Resultado</h3>
                <p className="text-muted-foreground flex-1">
                  Visibilidad 360° del negocio. Identificas tendencias, fugas de capital y oportunidades de crecimiento con un solo clic, impulsando una cultura Data-Driven.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Sección de Capacidades */}
      <section className="bg-surface py-24 border-y border-border">
        <div className="container-x">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1 relative lg:h-[500px] rounded-3xl overflow-hidden border border-border bg-card/50 flex items-center justify-center p-8">
              <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent opacity-50" />
              {/* Representación visual abstracta de analítica */}
              <div className="relative w-full max-w-md bg-surface border border-border rounded-xl shadow-elegant p-6">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <div className="h-3 w-24 bg-foreground/20 rounded mb-2" />
                    <div className="h-6 w-32 bg-primary/20 rounded" />
                  </div>
                  <div className="flex gap-2">
                    <div className="h-6 w-16 bg-surface-2 rounded" />
                    <div className="h-6 w-16 bg-surface-2 rounded" />
                  </div>
                </div>
                <div className="flex items-end gap-3 h-32 mb-6 border-b border-border pb-2">
                  {[40, 70, 45, 90, 65, 100, 85].map((height, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                      className={`flex-1 rounded-t-sm ${i === 5 ? 'bg-primary' : 'bg-primary/20'}`}
                    />
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-surface-2 p-3 rounded-lg">
                    <div className="h-2 w-16 bg-foreground/10 rounded mb-2" />
                    <div className="h-4 w-24 bg-foreground/30 rounded" />
                  </div>
                  <div className="bg-surface-2 p-3 rounded-lg">
                    <div className="h-2 w-16 bg-foreground/10 rounded mb-2" />
                    <div className="h-4 w-24 bg-emerald-500/50 rounded" />
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Reveal>
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl mb-6">
                  De la extracción a la visualización
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Construimos la infraestructura de datos completa. No solo hacemos gráficos bonitos, aseguramos que la data detrás de ellos sea 100% íntegra y confiable.
                </p>
              </Reveal>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { icon: Database, title: "Data Warehousing", desc: "Centralizamos tus bases de datos dispersas en un solo lugar." },
                  { icon: Filter, title: "Pipelines ETL/ELT", desc: "Extracción, limpieza y transformación automática de datos." },
                  { icon: PieChart, title: "Business Intelligence", desc: "Dashboards interactivos enfocados en KPIs estratégicos." },
                  { icon: TrendingUp, title: "Análisis Predictivo", desc: "Modelos avanzados para prever demanda y comportamiento." }
                ].map((item, i) => (
                  <Reveal key={i} delay={i * 0.1}>
                    <div className="flex gap-4 items-start p-4 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors">
                      <div className="mt-1 text-primary shrink-0"><item.icon className="w-5 h-5" /></div>
                      <div>
                        <h4 className="font-semibold text-sm text-foreground">{item.title}</h4>
                        <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Orientada a Negocio */}
      <section className="py-24">
        <div className="container-x">
          <SectionHeading
            title="El impacto financiero de los datos"
            subtitle="Las empresas Data-Driven superan consistentemente a su competencia en rentabilidad, retención de clientes y eficiencia operativa."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Decisiones Ágiles", text: "Responde a los cambios del mercado en horas, no en meses. Adiós a las juntas sin información clara.", value: "⚡" },
              { title: "Única Verdad", text: "Alineación total entre Ventas, Marketing, Operaciones y Finanzas bajo los mismos indicadores.", value: "100%" },
              { title: "Detección de Fugas", text: "Identifica inmediatamente dónde estás perdiendo dinero en tu cadena de suministro u operaciones.", value: "ROI" },
              { title: "Ventaja Competitiva", text: "Entiende a tus clientes mejor que tu competencia mediante análisis de comportamiento profundo.", value: "Top" }
            ].map((b, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="relative overflow-hidden rounded-3xl bg-card border border-border p-6 sm:p-8 hover:border-primary/50 transition-colors group">
                  <div className="text-4xl font-bold text-primary/20 mb-4 group-hover:text-primary/40 transition-colors">{b.value}</div>
                  <h3 className="text-lg font-semibold mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

export default DatosAnaliticaPage;
