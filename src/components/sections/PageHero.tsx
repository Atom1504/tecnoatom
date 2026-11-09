import heroContours from "@/assets/hero-contours.svg";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
};

export function PageHero({ eyebrow, title, subtitle, children }: Props) {
  return (
    <section className="relative isolate -mt-20 overflow-hidden bg-gradient-hero pt-32 text-white">
      <div className="absolute inset-0 bg-hero-lights" aria-hidden />
      <img
        src={heroContours}
        alt=""
        aria-hidden
        decoding="async"
        className="mask-hero-edges absolute inset-0 h-full w-full object-cover opacity-35"
      />
      <div className="noise absolute inset-0 opacity-[0.22] mix-blend-screen" aria-hidden />
      <div className="container-x relative z-10 pb-20 pt-12 sm:pb-28 sm:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-white/85 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {eyebrow}
            </span>
          )}
          <h1 className="animate-fade-up mt-5 text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p
              className="animate-fade-up mx-auto mt-5 max-w-2xl text-pretty text-base text-white/75 sm:text-lg"
              style={{ animationDelay: "0.08s" }}
            >
              {subtitle}
            </p>
          )}
          {children && (
            <div
              className="animate-fade-up mt-8 flex flex-wrap items-center justify-center gap-3"
              style={{ animationDelay: "0.16s" }}
            >
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default PageHero;
