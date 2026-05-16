import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoLight from "@/assets/logo-tecnoatom-light.png";
import logoDark from "@/assets/logo-tecnoatom-dark.png";
import { services } from "@/data/services";

const mainLinks = [
  { to: "/", label: "Inicio" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/constructa", label: "Constructa" },
  { to: "/industrias", label: "Industrias" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const isActive = (to: string) => pathname === to;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container-x">
        <div
          className={`flex items-center justify-between rounded-2xl border border-transparent px-4 py-2.5 transition-all duration-500 ${
            scrolled
              ? "glass border-border shadow-soft"
              : "bg-transparent"
          }`}
        >
          <Link to="/" className="flex items-center gap-2">
            <img
              src={scrolled ? logoDark : logoLight}
              alt="TECNOATOM"
              className="h-8 w-auto sm:h-9"
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {mainLinks.slice(0, 2).map((l) => (
              <NavLink key={l.to} {...l} active={isActive(l.to)} scrolled={scrolled} />
            ))}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                to="/servicios"
                className={`group flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition ${
                  pathname.startsWith("/servicios")
                    ? scrolled ? "text-primary" : "text-white"
                    : scrolled ? "text-foreground hover:text-primary" : "text-white/85 hover:text-white"
                }`}
              >
                Servicios
                <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
              </Link>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-1/2 top-full -translate-x-1/2 pt-3"
                  >
                    <div className="glass w-[560px] rounded-2xl p-3 shadow-elegant">
                      <div className="grid grid-cols-2 gap-1">
                        {services.map((s) => (
                          <Link
                            key={s.slug}
                            to="/servicios/$slug"
                            params={{ slug: s.slug }}
                            className="group flex items-start gap-3 rounded-xl p-3 transition hover:bg-surface-2"
                          >
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground">
                              <s.icon className="h-4 w-4" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-foreground">{s.title}</div>
                              <div className="text-xs text-muted-foreground line-clamp-1">{s.short}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {mainLinks.slice(2).map((l) => (
              <NavLink key={l.to} {...l} active={isActive(l.to)} scrolled={scrolled} />
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              to="/contacto"
              className="inline-flex h-10 items-center justify-center rounded-lg bg-gradient-primary px-5 text-sm font-medium text-primary-foreground shadow-elegant transition hover:shadow-glow hover:-translate-y-0.5"
            >
              Cotizar proyecto
            </Link>
          </div>

          <button
            className={`inline-flex h-10 w-10 items-center justify-center rounded-lg lg:hidden ${
              scrolled ? "text-foreground hover:bg-surface-2" : "text-white hover:bg-white/10"
            }`}
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menú"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="container-x mt-2 lg:hidden"
          >
            <div className="glass rounded-2xl p-3 shadow-elegant">
              <div className="flex flex-col">
                {mainLinks.slice(0, 2).map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="rounded-lg px-3 py-3 text-sm font-medium hover:bg-surface-2"
                  >
                    {l.label}
                  </Link>
                ))}
                <Link
                  to="/servicios"
                  className="rounded-lg px-3 py-3 text-sm font-medium hover:bg-surface-2"
                >
                  Servicios
                </Link>
                <div className="ml-3 mt-1 flex flex-col border-l border-border pl-3">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      to="/servicios/$slug"
                      params={{ slug: s.slug }}
                      className="rounded-lg px-3 py-2 text-xs text-muted-foreground hover:text-primary"
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
                {mainLinks.slice(2).map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="rounded-lg px-3 py-3 text-sm font-medium hover:bg-surface-2"
                  >
                    {l.label}
                  </Link>
                ))}
                <Link
                  to="/contacto"
                  className="mt-2 inline-flex h-11 items-center justify-center rounded-lg bg-gradient-primary text-sm font-medium text-primary-foreground shadow-elegant"
                >
                  Cotizar proyecto
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavLink({
  to,
  label,
  active,
  scrolled,
}: {
  to: string;
  label: string;
  active: boolean;
  scrolled: boolean;
}) {
  return (
    <Link
      to={to}
      className={`rounded-md px-3 py-2 text-sm font-medium transition ${
        active
          ? scrolled
            ? "text-primary"
            : "text-white"
          : scrolled
            ? "text-foreground hover:text-primary"
            : "text-white/85 hover:text-white"
      }`}
    >
      {label}
    </Link>
  );
}

export default Navbar;