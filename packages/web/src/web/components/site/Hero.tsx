import { MessageCircle, Sparkles, Star, ArrowDown } from "lucide-react";
import { business, buildWhatsAppUrl, defaultWhatsAppMessage } from "../../data/oleOlaData";
import { Blob, Twinkles } from "./Decor";

export function Hero() {
  const waUrl = buildWhatsAppUrl(defaultWhatsAppMessage);

  return (
    <section id="inicio" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24">
      <Blob className="-top-24 -left-24 h-80 w-80" color="#FF7EB9" />
      <Blob className="top-10 -right-20 h-72 w-72" color="#4ECDC4" />
      <Blob className="bottom-0 left-1/3 h-64 w-64" color="#A88BEB" />
      <Twinkles />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12">
        {/* Texto */}
        <div className="reveal is-visible text-center lg:text-left">
          <span className="badge-shimmer inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-600 text-ink shadow-soft ring-1 ring-lilac/30">
            <Sparkles className="h-4 w-4 text-sol" />
            {business.yearsBadge}
          </span>

          <h1 className="mt-5 font-display text-4xl font-700 leading-[1.05] text-ink sm:text-5xl xl:text-6xl">
            ¡Hagamos que tu evento en{" "}
            <span className="text-gradient">Piura brille</span> como nunca!
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base text-ink-soft sm:text-lg lg:mx-0">
            Shows infantiles, hora loca, baby shower, gender reveal, glitter bar y gincanas.
            Creatividad, energía y puntualidad para que solo te preocupes por disfrutar.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-rosa px-6 py-3.5 text-base font-600 text-white shadow-glow transition-transform hover:-translate-y-0.5 hover:brightness-105 sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" /> Cotizar por WhatsApp
            </a>
            <a
              href="#servicios"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-base font-600 text-ink shadow-soft ring-1 ring-lilac/30 transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              Ver servicios <ArrowDown className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 lg:justify-start">
            <div className="flex text-sol">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <span className="text-sm font-500 text-ink-soft">
              Familias felices en cada celebración
            </span>
          </div>
        </div>

        {/* Collage visual */}
        <div className="reveal is-visible relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="animate-float-slow overflow-hidden rounded-[2rem] shadow-glow ring-4 ring-white">
              <img
                src="/images/hero-evento.jpg"
                alt="Evento animado por Olé Olá Producciones"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-4 hidden w-40 rotate-[-6deg] overflow-hidden rounded-3xl shadow-soft ring-4 ring-white sm:block">
              <img src="/images/gallery/confetti.jpg" alt="Fiesta con confeti" className="h-28 w-full object-cover" />
            </div>

            <div className="absolute -right-3 -top-5 hidden w-36 rotate-[7deg] overflow-hidden rounded-3xl shadow-soft ring-4 ring-white sm:block">
              <img src="/images/gallery/glitter.jpg" alt="Glitter bar" className="h-28 w-full object-cover" />
            </div>

            <div className="absolute -bottom-5 right-6 rounded-2xl bg-white px-4 py-2 text-sm font-700 text-ink shadow-soft ring-1 ring-turquesa/30">
              🎉 +5 años animando Piura
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
