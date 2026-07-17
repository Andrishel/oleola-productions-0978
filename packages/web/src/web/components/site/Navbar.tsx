import { useEffect, useState } from "react";
import { Menu, X, MapPin, MessageCircle } from "lucide-react";
import { business, buildWhatsAppUrl, defaultWhatsAppMessage } from "../../data/oleOlaData";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#servicios", label: "Servicios" },
  { href: "#paquetes", label: "Paquetes" },
  { href: "#proceso", label: "Proceso" },
  { href: "#galeria", label: "Galería" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const waUrl = buildWhatsAppUrl(defaultWhatsAppMessage);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/85 shadow-soft backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#inicio" className="flex items-center gap-2">
          <img
            src={business.logo}
            alt={business.name}
            className="h-11 w-11 rounded-2xl object-cover shadow-soft ring-2 ring-white sm:h-12 sm:w-12"
          />
          <span className="font-display text-lg font-600 leading-none text-ink sm:text-xl">
            Olé Olá
            <span className="block text-[0.62rem] font-500 tracking-[0.18em] text-ink-soft uppercase">
              Producciones
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3 py-2 text-sm font-500 text-ink-soft transition-colors hover:bg-lilac/10 hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <span className="flex items-center gap-1 text-sm font-500 text-ink-soft">
            <MapPin className="h-4 w-4 text-turquesa" /> Piura, Perú
          </span>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-rosa px-4 py-2.5 text-sm font-600 text-white shadow-glow transition-transform hover:-translate-y-0.5 hover:brightness-105"
          >
            <MessageCircle className="h-4 w-4" /> Cotizar por WhatsApp
          </a>
        </div>

        <button
          type="button"
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
          className="rounded-full p-2 text-ink transition-colors hover:bg-lilac/10 lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Menú móvil */}
      {open && (
        <div className="mx-4 mb-4 rounded-3xl border border-border bg-white p-4 shadow-soft lg:hidden">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-base font-500 text-ink transition-colors hover:bg-lilac/10"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-rosa px-4 py-3 text-base font-600 text-white shadow-glow"
          >
            <MessageCircle className="h-5 w-5" /> Cotizar por WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
