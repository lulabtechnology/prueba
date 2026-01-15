import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Reveal from "@/components/reveal";
import Marquee from "@/components/marquee";
import { waLink } from "@/lib/links";

const benefits = [
  { title: "Instalación en tu local", desc: "Coordinamos la colocación y puesta en marcha." },
  { title: "Abastecimiento continuo", desc: "Reposición y control de inventario por línea." },
  { title: "Mantenimiento y soporte", desc: "Operación estable con atención cuando la necesites." },
  { title: "Tres líneas de servicio", desc: "Allergy Free, Premium y Standard." }
];

// Reel grande (menos items) para vibra tipo HelloFresh
const heroReel = Array.from({ length: 8 }).map((_, i) => ({
  src: `/images/products/producto-${i + 1}.png`,
  alt: `Producto ${i + 1}`
}));

export default function Hero() {
  return (
    <section className="relative overflow-hidden hero-mix">
      {/* Detalle sutil: grid sobre el mix */}
      <div className="absolute inset-0 -z-10 bg-soft-grid opacity-[0.24]" />

      <div className="container pb-10 pt-12 md:pb-14 md:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-4 py-2 text-xs font-semibold text-ink shadow-[0_10px_30px_rgba(2,6,23,0.08)] backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-brand" />
                Vending Service para tu establecimiento
              </div>

              <h1 className="mt-5 text-balance text-4xl font-extrabold tracking-tight text-ink md:text-5xl">
                Pick’n GO: vending premium, operado por expertos.
              </h1>

              <p className="mt-4 max-w-xl text-pretty text-base leading-7 text-muted md:text-lg">
                Manejo de máquinas de vending: instalamos tu máquina en tu local y la
                abastecemos con productos según la línea elegida.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <ButtonLink
                  href="#contacto"
                  size="lg"
                  className="justify-center shadow-[0_18px_40px_rgba(6,122,70,0.22)]"
                >
                  Quiero una máquina en mi local
                </ButtonLink>

                <ButtonLink href="#lineas" variant="outline" size="lg" className="justify-center">
                  Ver líneas de servicio
                </ButtonLink>
              </div>

              <div className="mt-4 text-sm text-muted">
                ¿Prefieres escribir de una vez?{" "}
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-ink underline decoration-brand/40 underline-offset-4 hover:decoration-brand"
                >
                  Abrir WhatsApp
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:pl-6">
            <div className="relative">
              {/* Glow suave */}
              <div className="absolute -inset-6 -z-10 rounded-[2.4rem] bg-white/55 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2.25rem] border border-border bg-white/85 shadow-soft backdrop-blur">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/hero/pickngo-hero.png"
                    alt="Pick’n GO vending machine en un local (placeholder)"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Banda inferior estilo “premium card” */}
                <div className="border-t border-border bg-white/90 p-4">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
                    <span className="inline-flex items-center rounded-full bg-brandSoft2 px-3 py-1 font-semibold text-ink">
                      Instalación
                    </span>
                    <span className="inline-flex items-center rounded-full bg-brandSoft2 px-3 py-1 font-semibold text-ink">
                      Abastecimiento
                    </span>
                    <span className="inline-flex items-center rounded-full bg-brandSoft2 px-3 py-1 font-semibold text-ink">
                      Soporte
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Reel grande (menos y más grande) estilo HelloFresh */}
        <div className="mt-10">
          <Reveal>
            <Marquee items={heroReel} size="lg" speed="slow" />
          </Reveal>
        </div>

        {/* Benefits */}
        <div className="mt-10 grid gap-4 md:mt-12 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <Card key={b.title} className="bg-white/85 p-6 backdrop-blur">
              <div className="text-sm font-extrabold text-ink">{b.title}</div>
              <div className="mt-2 text-sm leading-6 text-muted">{b.desc}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
