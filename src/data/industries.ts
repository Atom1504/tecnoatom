import {
  Building2,
  Factory,
  GraduationCap,
  HeartPulse,
  Landmark,
  Scale,
  ShoppingBag,
  Truck,
  Wallet,
  Wheat,
} from "lucide-react";

export type Industry = {
  icon: typeof Building2;
  name: string;
  text: string;
  color: string;
};

export const industries: Industry[] = [
  { icon: Building2, name: "Construcción", text: "ERP especializado (Constructa), control de obra, presupuestos, licitación e inventario.", color: "from-primary to-primary-glow" },
  { icon: Landmark, name: "Sector público", text: "Trámites en línea, gestión documental, contratación y tableros de control para entidades públicas.", color: "from-accent to-primary" },
  { icon: ShoppingBag, name: "Retail & comercio", text: "E-commerce, puntos de venta (POS), gestión de inventario inteligente y experiencia omnicanal.", color: "from-primary-glow to-accent" },
  { icon: Truck, name: "Logística & transporte", text: "Sistemas TMS, ruteo automatizado, tracking en tiempo real e integración con flotas vehiculares.", color: "from-accent to-primary" },
  { icon: Scale, name: "Firmas de abogados", text: "Gestión de expedientes, automatización de documentos legales, facturación y portal de clientes.", color: "from-primary to-accent" },
  { icon: HeartPulse, name: "Salud & clínicas", text: "Sistemas HIS, historias clínicas digitales y plataformas de agendamiento para EPS e IPS.", color: "from-primary-glow to-primary" },
  { icon: Wallet, name: "Finanzas & seguros", text: "Pasarelas de pago, core bancario, gestión de pólizas y automatización de procesos financieros.", color: "from-accent to-primary-glow" },
  { icon: Factory, name: "Industria & manufactura", text: "Trazabilidad de producción, sistemas MES, control de calidad y automatización IoT.", color: "from-primary to-primary-glow" },
  { icon: Wheat, name: "Agroindustria", text: "Trazabilidad de cultivo desde la siembra, gestión de cosecha y comercialización B2B.", color: "from-primary-glow to-accent" },
  { icon: GraduationCap, name: "Educación", text: "Plataformas académicas, gestión de matrículas, portales para estudiantes y analítica institucional.", color: "from-primary to-accent" },
];
