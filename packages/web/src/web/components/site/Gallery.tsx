import { gallery } from "../../data/oleOlaData";

function spanClass(span?: string) {
  if (span === "tall") return "row-span-2";
  if (span === "wide") return "sm:col-span-2";
  return "";
}

export function Gallery() {
  return (
    <section id="galeria" className="relative scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-700 tracking-[0.18em] text-turquesa uppercase">Galería</span>
          <h2 className="mt-2 font-display text-3xl font-700 text-ink sm:text-4xl">
            Momentos que hacen brillar Piura
          </h2>
          <p className="mt-3 text-ink-soft">Un vistazo a la magia que creamos en cada evento.</p>
        </div>

        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {gallery.map((item, i) => (
            <figure
              key={item.src}
              className={`reveal group relative overflow-hidden rounded-3xl shadow-soft ${spanClass(item.span)}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
