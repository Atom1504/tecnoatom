const clients = [
  "Inducables", "Constructora Norte", "Grupo Andina", "Minerales del Sur",
  "Vías & Obras", "AgroTech S.A.", "Banco Capital", "Aurum Hotels",
  "Logística Andes", "EcoEnergía", "Salud Vital", "InverCorp",
];

export function ClientsMarquee({
  variant = "dark",
  title = "Empresas que confían en nosotros",
}: {
  variant?: "dark" | "light";
  title?: string;
}) {
  const isDark = variant === "dark";
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
        <div className="flex animate-marquee gap-12 whitespace-nowrap will-change-transform">
          {[...clients, ...clients].map((name, i) => (
            <div
              key={i}
              className={`flex h-14 shrink-0 items-center justify-center rounded-xl border px-8 text-base font-semibold tracking-wide ${
                isDark
                  ? "border-white/10 bg-white/5 text-white/85"
                  : "border-border bg-card text-foreground/85"
              }`}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientsMarquee;