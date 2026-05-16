import {
  Code2, Cloud, ShieldCheck, BrainCircuit, Database, Workflow,
  LineChart, Smartphone,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: typeof Code2;
  features: string[];
  benefits: { title: string; text: string }[];
  processSteps: { title: string; text: string }[];
};

export const services: Service[] = [
  {
    slug: "desarrollo-software",
    title: "Desarrollo de Software a la Medida",
    short: "Aplicaciones empresariales construidas para tus procesos reales.",
    description:
      "Diseñamos y construimos plataformas web y aplicaciones empresariales personalizadas, alineadas a tus procesos, objetivos y crecimiento.",
    icon: Code2,
    features: [
      "Plataformas web y SaaS empresariales",
      "Aplicaciones de gestión interna",
      "Integraciones con sistemas existentes",
      "Arquitectura escalable y modular",
      "Stack moderno: TypeScript, React, Node",
      "Mantenimiento y evolución continua",
    ],
    benefits: [
      { title: "Hecho para ti", text: "Procesos únicos merecen software único, no plantillas." },
      { title: "Escalable", text: "Arquitectura preparada para crecer con tu operación." },
      { title: "Propietario", text: "El código es tuyo. Sin dependencias ocultas." },
    ],
    processSteps: [
      { title: "Descubrimiento", text: "Entendemos tu operación, dolor y meta." },
      { title: "Diseño UX/UI", text: "Prototipos navegables antes de programar." },
      { title: "Desarrollo ágil", text: "Entregas iterativas con validación constante." },
      { title: "Despliegue & soporte", text: "Lanzamiento, capacitación y evolución." },
    ],
  },
  {
    slug: "consultoria-ti",
    title: "Consultoría TI Estratégica",
    short: "Roadmap tecnológico para decisiones de alto impacto.",
    description:
      "Acompañamos a la alta dirección a traducir objetivos de negocio en una estrategia tecnológica coherente, rentable y ejecutable.",
    icon: BrainCircuit,
    features: [
      "Diagnóstico de madurez digital",
      "Roadmap tecnológico 12-36 meses",
      "Auditoría de arquitectura y procesos",
      "Selección y evaluación de software",
      "Acompañamiento ejecutivo",
      "Gobierno TI y métricas",
    ],
    benefits: [
      { title: "Visión clara", text: "Dejas de improvisar y operas con plan." },
      { title: "ROI medible", text: "Cada inversión tecnológica se justifica." },
      { title: "Riesgo controlado", text: "Anticipamos brechas antes que sean crisis." },
    ],
    processSteps: [
      { title: "Diagnóstico", text: "Entrevistas, datos, procesos y stack actual." },
      { title: "Análisis", text: "Brechas, oportunidades y prioridades." },
      { title: "Roadmap", text: "Plan accionable por trimestre con KPIs." },
      { title: "Ejecución", text: "Acompañamos la implementación." },
    ],
  },
  {
    slug: "cloud-infraestructura",
    title: "Cloud & Infraestructura",
    short: "Infraestructura segura, elástica y optimizada en costos.",
    description:
      "Diseñamos, migramos y operamos infraestructura cloud (AWS, Azure, GCP) con foco en seguridad, alta disponibilidad y eficiencia económica.",
    icon: Cloud,
    features: [
      "Migración a la nube",
      "Arquitectura serverless y contenedores",
      "DevOps & CI/CD",
      "Optimización de costos cloud",
      "Monitoreo y observabilidad",
      "Backups y recuperación ante desastres",
    ],
    benefits: [
      { title: "Alta disponibilidad", text: "Operación 24/7 sin sobresaltos." },
      { title: "Costos bajo control", text: "Pagas sólo por lo que realmente consumes." },
      { title: "Seguridad por diseño", text: "Cumplimiento desde el primer commit." },
    ],
    processSteps: [
      { title: "Assessment", text: "Inventario de cargas y dependencias." },
      { title: "Diseño", text: "Arquitectura objetivo y plan de migración." },
      { title: "Migración", text: "Por fases, sin interrumpir operación." },
      { title: "Operación", text: "Monitoreo continuo y optimización." },
    ],
  },
  {
    slug: "ciberseguridad",
    title: "Ciberseguridad Empresarial",
    short: "Protege tus activos digitales antes que alguien los pruebe.",
    description:
      "Servicios integrales de seguridad: análisis de vulnerabilidades, hardening, políticas y respuesta a incidentes.",
    icon: ShieldCheck,
    features: [
      "Pentesting y análisis de vulnerabilidades",
      "Hardening de servidores y aplicaciones",
      "Políticas de seguridad y cumplimiento",
      "Capacitación a equipos",
      "Respuesta a incidentes",
      "Auditorías recurrentes",
    ],
    benefits: [
      { title: "Reputación protegida", text: "Una brecha cuesta más que prevenirla." },
      { title: "Cumplimiento", text: "Alineación con normativas vigentes." },
      { title: "Tranquilidad", text: "Operación con respaldo experto." },
    ],
    processSteps: [
      { title: "Evaluación", text: "Mapeo de activos y superficie de ataque." },
      { title: "Pruebas", text: "Pentest controlado a tus sistemas." },
      { title: "Remediación", text: "Plan priorizado y ejecutable." },
      { title: "Monitoreo", text: "Vigilancia y mejora continua." },
    ],
  },
  {
    slug: "automatizacion-procesos",
    title: "Automatización de Procesos",
    short: "Elimina trabajo manual repetitivo con flujos inteligentes.",
    description:
      "Diseñamos automatizaciones que liberan tiempo, reducen errores y aceleran tus procesos críticos.",
    icon: Workflow,
    features: [
      "Mapeo de procesos AS-IS / TO-BE",
      "Automatizaciones RPA y low-code",
      "Integraciones API entre sistemas",
      "Flujos de aprobación digitales",
      "Notificaciones y alertas",
      "Dashboards de seguimiento",
    ],
    benefits: [
      { title: "Productividad", text: "Tu equipo se enfoca en lo estratégico." },
      { title: "Cero errores", text: "El software no se distrae." },
      { title: "Velocidad", text: "Procesos que tomaban días, ahora minutos." },
    ],
    processSteps: [
      { title: "Análisis", text: "Identificamos cuellos de botella reales." },
      { title: "Diseño", text: "Rediseñamos el flujo, no sólo lo automatizamos." },
      { title: "Construcción", text: "Implementación con herramientas adecuadas." },
      { title: "Adopción", text: "Capacitación y mejora continua." },
    ],
  },
  {
    slug: "datos-analitica",
    title: "Datos & Analítica",
    short: "Convierte tu información en decisiones de negocio.",
    description:
      "Integramos, modelamos y visualizamos tus datos para que la dirección tome decisiones basadas en evidencia.",
    icon: LineChart,
    features: [
      "Data warehousing y ETL",
      "Modelado dimensional",
      "Dashboards ejecutivos (Power BI, Looker)",
      "KPIs operativos y estratégicos",
      "Análisis predictivo",
      "Cultura data-driven",
    ],
    benefits: [
      { title: "Decisiones rápidas", text: "Información correcta, en el momento correcto." },
      { title: "Una sola verdad", text: "Fin de los Excel contradictorios." },
      { title: "Visibilidad total", text: "Del KPI al detalle, en clicks." },
    ],
    processSteps: [
      { title: "Inventario", text: "Qué datos hay y dónde viven." },
      { title: "Integración", text: "Pipelines confiables y automáticos." },
      { title: "Modelado", text: "Diseñamos el modelo analítico." },
      { title: "Visualización", text: "Dashboards accionables." },
    ],
  },
  {
    slug: "bases-de-datos",
    title: "Diseño y Gestión de Bases de Datos",
    short: "Bases de datos rápidas, consistentes y respaldadas.",
    description:
      "Arquitectura, tunning y administración de bases de datos relacionales y NoSQL para entornos productivos exigentes.",
    icon: Database,
    features: [
      "Modelado relacional y NoSQL",
      "Optimización de consultas",
      "Replicación y alta disponibilidad",
      "Estrategias de backup y restore",
      "Migración entre motores",
      "Administración (DBA) continua",
    ],
    benefits: [
      { title: "Rendimiento", text: "Consultas que se ejecutan en milisegundos." },
      { title: "Resiliencia", text: "Recuperación garantizada ante incidentes." },
      { title: "Escala", text: "Tu data crece sin afectar al usuario." },
    ],
    processSteps: [
      { title: "Auditoría", text: "Diagnóstico de la base actual." },
      { title: "Optimización", text: "Índices, queries, configuración." },
      { title: "Resiliencia", text: "Backups, réplicas y monitoreo." },
      { title: "Mantenimiento", text: "DBA a la medida." },
    ],
  },
  {
    slug: "apps-moviles",
    title: "Aplicaciones Móviles",
    short: "Apps iOS y Android con experiencia nativa.",
    description:
      "Desarrollamos aplicaciones móviles modernas, performantes y con diseño cuidado para iOS y Android.",
    icon: Smartphone,
    features: [
      "iOS y Android nativos o React Native",
      "Diseño UX/UI centrado en el usuario",
      "Integración con backend propio",
      "Notificaciones push y analítica",
      "Publicación en App Store y Play Store",
      "Mantenimiento y nuevas versiones",
    ],
    benefits: [
      { title: "Cercanía", text: "Tu marca, en el bolsillo del cliente." },
      { title: "Engagement", text: "Notificaciones que generan retorno." },
      { title: "Marca premium", text: "Una app cuidada eleva tu negocio." },
    ],
    processSteps: [
      { title: "Estrategia", text: "Definimos plataformas y alcance." },
      { title: "Diseño", text: "Prototipos navegables iOS/Android." },
      { title: "Desarrollo", text: "Sprints con builds reales." },
      { title: "Publicación", text: "Gestionamos stores y updates." },
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);
