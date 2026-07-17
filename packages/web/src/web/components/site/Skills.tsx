import { skills } from "../../data/oleOlaData";
import { Icon } from "./Icon";

const accents = ["#FF7EB9", "#4ECDC4", "#A88BEB"];

export function Skills() {
  return (
    <section id="habilidades" className="relative scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-700 tracking-[0.18em] text-turquesa uppercase">
            Por qué elegirnos
          </span>
          <h2 className="mt-2 font-display text-3xl font-700 text-ink sm:text-4xl">
            Los pilares que hacen brillar cada evento
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {skills.map((s, i) => (
            <article
              key={s.title}
              className="reveal group rounded-3xl border border-border bg-white p-7 shadow-soft transition-transform duration-300 hover:-translate-y-1.5"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div
                className="flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-soft transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: accents[i % accents.length] }}
              >
                <Icon name={s.icon} className="h-7 w-7" />
              </div>
              <h3 className="mt-5 font-display text-xl font-600 text-ink">{s.title}</h3>
              <p className="mt-2 text-ink-soft">{s.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
