import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

const clients = [
  { name: "Koffy Lovers", logo: "/clientes/koffy.png", className: "scale-100" },
  { name: "Cámara de Comercio de Bucaramanga", logo: "/clientes/ccb.png", className: "scale-125" },
  { name: "F", logo: "/clientes/f.png", className: "scale-[0.8]" },
  { name: "I&M Ingeniería y Minerales S.A.S", logo: "/clientes/im.png", className: "scale-[1.8]" },
  { name: "Gavassa", logo: "/clientes/gavassa.png", className: "scale-150" },
  { name: "Aguardiente Superior", logo: "/clientes/superior.png", className: "scale-90" },
  { name: "Theatron", logo: "/clientes/theatron.png", className: "scale-100" },
  { name: "Guanes Coffee", logo: "/clientes/guanes.png", className: "scale-125" },
  { name: "Jägermeister", logo: "/clientes/jagermeister.png", className: "scale-90" },
  { name: "LC Soluciones", logo: "/clientes/lc.png", className: "scale-[0.85]" },
];

export function ClientsMarquee({
  variant = "dark",
  title = "Empresas que confían en nosotros",
}: {
  variant?: "dark" | "light";
  title?: string;
}) {
  const isDark = variant === "dark";
  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true }, [
    AutoScroll({ playOnInit: true, speed: 0.8, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);

  return (
    <section
      className={`relative overflow-hidden py-14 ${
        isDark ? "bg-gradient-hero text-white" : "bg-surface text-foreground"
      }`}
    >
      {isDark && <div className="absolute inset-0 bg-gradient-radial opacity-60" aria-hidden />}
      <div className="container-x relative z-10">
        <p
          className={`text-center text-xs font-medium uppercase tracking-[0.22em] ${
            isDark ? "text-white/65" : "text-muted-foreground"
          }`}
        >
          {title}
        </p>
      </div>
      <div className="relative mt-8">
        <div
          className={`pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r ${
            isDark ? "from-[oklch(0.18_0.05_285)] to-transparent" : "from-surface to-transparent"
          }`}
        />
        <div
          className={`pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l ${
            isDark ? "from-[oklch(0.18_0.05_285)] to-transparent" : "from-surface to-transparent"
          }`}
        />
        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex touch-pan-y" style={{ willChange: "transform" }}>
            {clients.map((client, i) => (
              <div
                key={i}
                className="group mr-8 flex h-28 w-60 shrink-0 select-none items-center justify-center rounded-2xl bg-white p-4 shadow-sm transition-transform hover:-translate-y-1"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  title={client.name}
                  draggable={false}
                  className={`pointer-events-none max-h-full max-w-full object-contain transition-transform group-hover:scale-110 ${client.className || ""}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientsMarquee;
