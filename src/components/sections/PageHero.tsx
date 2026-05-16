import { Reveal } from "@/components/ui-custom/Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
};

export function PageHero({ eyebrow, title, subtitle, children }: Props) {
  return (
    <section className="relative isolate -mt-20 overflow-hidden bg-gradient-hero pt-32 text-white">
      <div className="absolute inset-0 bg-gradient-radial opacity-70" aria-hidden />
      <div className="absolute inset-0 grid-pattern opacity-[0.08]" aria-hidden />
      <div className="container-x relative z-10 pb-20 pt-12 sm:pb-28 sm:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-white/85 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {eyebrow}
              </span>
            </Reveal>
          )}
          <Reveal delay={0.05}>
            <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
              {title}
            </h1>
          </Reveal>
          {subtitle && (
            <Reveal delay={0.1}>
              <p className="mx-auto mt-5 max-w-2xl text-pretty text-base text-white/75 sm:text-lg">
                {subtitle}
              </p>
            </Reveal>
          )}
          {children && (
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                {children}
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}

export default PageHero;