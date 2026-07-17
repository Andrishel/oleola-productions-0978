import { Instagram, Facebook, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { business, buildWhatsAppUrl, defaultWhatsAppMessage } from "../../data/oleOlaData";

export function Footer() {
  const waUrl = buildWhatsAppUrl(defaultWhatsAppMessage);

  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-x-0 top-0 h-1 bg-brand-gradient" />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={business.logo}
              alt={business.name}
              className="h-12 w-12 rounded-2xl object-cover ring-2 ring-white/20"
            />
            <div>
              <p className="font-display text-lg font-600">Olé Olá</p>
              <p className="text-xs tracking-[0.18em] text-white/60 uppercase">Producciones</p>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-sm text-white/70">
            {business.tagline} en {business.city}. Creatividad, energía y puntualidad en cada celebración.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={business.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-rosa"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={business.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-turquesa"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg font-600">Contacto</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li>
              <a href={`tel:${business.whatsapp}`} className="flex items-center gap-3 hover:text-white">
                <Phone className="h-4 w-4 text-turquesa" /> {business.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${business.email}`} className="flex items-center gap-3 hover:text-white">
                <Mail className="h-4 w-4 text-rosa" /> {business.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-lilac" /> {business.city}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-600">¿Listo para tu evento?</h3>
          <p className="mt-4 text-sm text-white/70">
            Escríbenos y coordinamos la fecha. Reserva con {business.deposit}.
          </p>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-rosa px-5 py-3 text-sm font-600 text-white shadow-glow transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle className="h-5 w-5" /> Cotizar por WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <p className="px-4 text-center text-xs text-white/50">
          © {new Date().getFullYear()} {business.name} · Hecho con 💜 en Piura, Perú
        </p>
      </div>
    </footer>
  );
}
