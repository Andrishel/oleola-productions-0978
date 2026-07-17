import { useEffect, useMemo, useState } from "react";
import { MessageCircle, CalendarDays, User, MapPin, StickyNote, Package } from "lucide-react";
import { services, districts, business, buildWhatsAppUrl } from "../../data/oleOlaData";

function usePackageOptions() {
  return useMemo(() => {
    const opts: string[] = [];
    for (const s of services) {
      for (const p of s.packs) {
        opts.push(`${s.label} — ${p.name} (S/.${p.price})`);
      }
    }
    return opts;
  }, []);
}

export function Quoter() {
  const packageOptions = usePackageOptions();
  const [name, setName] = useState("");
  const [pkg, setPkg] = useState("");
  const [date, setDate] = useState("");
  const [district, setDistrict] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail;
      if (detail && packageOptions.includes(detail)) setPkg(detail);
    };
    window.addEventListener("olePreselect", handler as EventListener);
    return () => window.removeEventListener("olePreselect", handler as EventListener);
  }, [packageOptions]);

  const message = useMemo(() => {
    const lines = [
      "¡Hola Olé Olá Producciones! 🎉 Quiero cotizar un evento:",
      "",
      `• Nombre: ${name || "—"}`,
      `• Paquete: ${pkg || "—"}`,
      `• Fecha: ${date || "—"}`,
      `• Distrito (Piura): ${district || "—"}`,
      `• Notas: ${notes || "—"}`,
      "",
      "Entiendo que se reserva con el 50% de adelanto. ¿Me confirman disponibilidad?",
    ];
    return lines.join("\n");
  }, [name, pkg, date, district, notes]);

  const waUrl = buildWhatsAppUrl(message);

  const inputCls =
    "w-full rounded-2xl border border-border bg-white px-4 py-3 text-ink placeholder:text-ink-soft/60 outline-none transition focus:border-lilac focus:ring-2 focus:ring-lilac/30";
  const labelCls = "flex items-center gap-2 text-sm font-600 text-ink";

  return (
    <section id="contacto" className="relative scroll-mt-24 overflow-hidden bg-secondary py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-700 tracking-[0.18em] text-rosa uppercase">Cotiza ahora</span>
          <h2 className="mt-2 font-display text-3xl font-700 text-ink sm:text-4xl">
            Arma tu cotización por WhatsApp
          </h2>
          <p className="mt-3 text-ink-soft">
            Completa los datos y te enviamos con un solo clic. Reserva con {business.deposit}.
          </p>
        </div>

        <div className="reveal mt-10 rounded-[2rem] border border-border bg-white p-6 shadow-soft sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className={labelCls} htmlFor="q-name">
                <User className="h-4 w-4 text-turquesa" /> Nombre
              </label>
              <input
                id="q-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Tu nombre"
                className={inputCls}
              />
            </div>

            <div className="space-y-1.5">
              <label className={labelCls} htmlFor="q-pkg">
                <Package className="h-4 w-4 text-turquesa" /> Paquete
              </label>
              <select id="q-pkg" value={pkg} onChange={(e) => setPkg(e.target.value)} className={inputCls}>
                <option value="">Selecciona un paquete</option>
                {packageOptions.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <label className={labelCls} htmlFor="q-date">
                <CalendarDays className="h-4 w-4 text-turquesa" /> Fecha del evento
              </label>
              <input
                id="q-date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className={inputCls}
              />
            </div>

            <div className="space-y-1.5">
              <label className={labelCls} htmlFor="q-district">
                <MapPin className="h-4 w-4 text-turquesa" /> Distrito (Piura)
              </label>
              <select
                id="q-district"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className={inputCls}
              >
                <option value="">Selecciona tu distrito</option>
                {districts.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5 sm:col-span-2">
              <label className={labelCls} htmlFor="q-notes">
                <StickyNote className="h-4 w-4 text-turquesa" /> Notas
              </label>
              <textarea
                id="q-notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
                placeholder="Temática, cantidad de niños, hora de inicio…"
                className={`${inputCls} resize-none`}
              />
            </div>
          </div>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-rosa px-6 py-4 text-base font-700 text-white shadow-glow transition-transform hover:-translate-y-0.5 hover:brightness-105"
          >
            <MessageCircle className="h-5 w-5" /> Enviar cotización por WhatsApp
          </a>
          <p className="mt-3 text-center text-xs text-ink-soft">
            Te responderemos lo antes posible al {business.phone}.
          </p>
        </div>
      </div>
    </section>
  );
}
