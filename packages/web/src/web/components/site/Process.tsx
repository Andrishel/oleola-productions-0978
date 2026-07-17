import { processSteps } from "../../data/oleOlaData";
import { Icon } from "./Icon";

export function Process() {
  return (
    <section id="proceso" className="relative scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-700 tracking-[0.18em] text-lilac uppercase">
            Reservar es fácil
          </span>
          <h2 className="mt-2 font-display text-3xl font-700 text-ink sm:text-4xl">
            5 pasos y tu evento está listo
          </h2>
          <p className="mt-3 text-ink-soft">
            Aseguras tu fecha con el 50% de adelanto. El resto, el día del evento.
          </p>
        </div>

        <div className="relative mt-14">
          {/* línea conectora (desktop) */}
          <div className="absolute left-0 right-0 top-7 hidden h-1 rounded-full bg-brand-gradient opacity-30 lg:block" />

          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {processSteps.map((step, i) => (
              <li
                key={step.number}
                className="reveal relative flex flex-col items-center text-center"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow">
                  <Icon name={step.icon} className="h-6 w-6" />
                  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-700 text-ink shadow-soft ring-1 ring-border">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-600 text-ink">{step.title}</h3>
                <p className="mt-1.5 text-sm text-ink-soft">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
