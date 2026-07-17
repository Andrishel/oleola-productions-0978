import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { services } from "../../data/oleOlaData";
import { Icon } from "./Icon";

// Al elegir un pack, precarga el cotizador y hace scroll a contacto.
function selectPack(label: string) {
  window.dispatchEvent(new CustomEvent("olePreselect", { detail: label }));
  document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
}

export function Services() {
  const [active, setActive] = useState(services[0].id);
  const current = services.find((s) => s.id === active) ?? services[0];

  return (
    <section id="servicios" className="relative scroll-mt-24 bg-secondary py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-700 tracking-[0.18em] text-rosa uppercase">
            Catálogo de servicios
          </span>
          <h2 className="mt-2 font-display text-3xl font-700 text-ink sm:text-4xl">
            Elige la experiencia perfecta para tu celebración
          </h2>
          <p className="mt-3 text-ink-soft">
            Precios reales en soles (S/.). Todos los packs no incluyen movilidad.
          </p>
        </div>

        {/* Tabs */}
        <div className="reveal mt-9 flex flex-wrap justify-center gap-2">
          {services.map((s) => {
            const isActive = s.id === active;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setActive(s.id)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-600 transition-all ${
                  isActive
                    ? "bg-brand-gradient text-white shadow-glow"
                    : "bg-white text-ink-soft shadow-soft ring-1 ring-border hover:text-ink"
                }`}
              >
                <Icon name={s.icon} className="h-4 w-4" />
                {s.label}
              </button>
            );
          })}
        </div>

        {/* Contenido del tab */}
        <div id="paquetes" className="scroll-mt-24">
          <p className="reveal mt-8 text-center text-lg font-600 text-ink">
            <span className="mr-2">{current.emoji}</span>
            {current.tagline}
          </p>

          <div
            className={`mt-6 grid gap-6 ${
              current.packs.length >= 3 ? "md:grid-cols-3" : "sm:grid-cols-2"
            } ${current.packs.length === 1 ? "mx-auto max-w-md" : ""}`}
          >
            {current.packs.map((pack, i) => {
              const featured = current.packs.length > 1 && i === 1;
              return (
                <article
                  key={pack.name}
                  className={`reveal relative flex flex-col rounded-3xl border bg-white p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1.5 ${
                    featured ? "border-rosa/40 ring-2 ring-rosa/30" : "border-border"
                  }`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  {featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-rosa px-3 py-1 text-xs font-700 text-white shadow-soft">
                      Más elegido
                    </span>
                  )}

                  <div className="flex items-baseline justify-between">
                    <h3 className="font-display text-xl font-600 text-ink">{pack.name}</h3>
                    <span className="rounded-full bg-turquesa/15 px-3 py-1 text-xs font-600 text-turquesa">
                      {pack.duration}
                    </span>
                  </div>

                  <div className="mt-3 flex items-end gap-1">
                    <span className="font-display text-4xl font-700 text-gradient">S/.{pack.price}</span>
                  </div>

                  <ul className="mt-5 flex-1 space-y-2.5">
                    {pack.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-ink-soft">
                        <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-turquesa/15 text-turquesa">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {pack.note && (
                    <p className="mt-4 text-xs font-500 text-ink-soft/80">* {pack.note}</p>
                  )}

                  <button
                    type="button"
                    onClick={() => selectPack(`${current.label} — ${pack.name} (S/.${pack.price})`)}
                    className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-600 text-white transition-transform hover:-translate-y-0.5 hover:bg-rosa"
                  >
                    Cotizar este Pack <ArrowRight className="h-4 w-4" />
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
