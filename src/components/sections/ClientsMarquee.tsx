import { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { Pause, Play } from "lucide-react";
import { prefersReducedMotion } from "@/lib/motion";

const clients = [
  { name: "Koffy Lovers", logo: "/clientes/koffy.png", className: "scale-100" },
  { name: "Cámara de Comercio de Bucaramanga", logo: "/clientes/ccb.png", className: "scale-125" },
  { name: "FUTURA", logo: "/clientes/f.png", className: "scale-[0.8]" },
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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: true }, [
    AutoScroll({ playOnInit: false, speed: 0.8, stopOnInteraction: false }),
  ]);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const isHeld = isPaused || isHovered;
  const isHeldRef = useRef(isHeld);

  useEffect(() => {
    if (prefersReducedMotion()) setIsPaused(true);
  }, []);

  useEffect(() => {
    const autoScroll = emblaApi?.plugins().autoScroll;
    if (!emblaApi || !autoScroll) return;
    // The plugin restarts itself after a drag, even while the carousel is paused.
    const stayHeld = () => {
      if (isHeldRef.current) queueMicrotask(autoScroll.stop);
    };
    emblaApi.on("autoScroll:play", stayHeld);
    return () => {
      emblaApi.off("autoScroll:play", stayHeld);
    };
  }, [emblaApi]);

  useEffect(() => {
    isHeldRef.current = isHeld;
    const autoScroll = emblaApi?.plugins().autoScroll;
    if (!autoScroll) return;
    if (isHeld) autoScroll.stop();
    else autoScroll.play();
  }, [emblaApi, isHeld]);

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
      <div
        className="mask-marquee-edges relative mt-8"
        onPointerEnter={(event) => event.pointerType === "mouse" && setIsHovered(true)}
        onPointerLeave={(event) => event.pointerType === "mouse" && setIsHovered(false)}
      >
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
      <div className="container-x relative z-10 mt-5 flex justify-center">
        <button
          type="button"
          onClick={() => setIsPaused((paused) => !paused)}
          className={`inline-flex h-8 items-center gap-1.5 rounded-full px-3 text-xs font-medium transition ${
            isDark
              ? "text-white/70 hover:bg-white/10 hover:text-white"
              : "text-muted-foreground hover:bg-surface-2 hover:text-foreground"
          }`}
        >
          {isPaused ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
          {isPaused ? "Reanudar carrusel" : "Pausar carrusel"}
        </button>
      </div>
    </section>
  );
}

export default ClientsMarquee;
