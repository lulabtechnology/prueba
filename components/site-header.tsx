import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";
import { site } from "@/content/site";
import { waLink } from "@/lib/links";

const nav = [
  { label: "Líneas", href: "#lineas" },
  { label: "Historia", href: "#historia" },
  { label: "Servicio", href: "#servicio" },
  { label: "Contacto", href: "#contacto" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/85 backdrop-blur">
      <div className="container flex h-16 items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-9 w-9 overflow-hidden rounded-xl border border-border bg-white">
            <Image
              src="/brand/logo-pickngo.png"
              alt={`${site.name} logo`}
              fill
              className="object-contain p-1"
              sizes="36px"
              priority
            />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-extrabold tracking-tight text-ink">
              {site.name}
            </div>
            <div className="text-xs text-muted">{site.tagline}</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Navegación">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-ink/80 hover:text-ink"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            className="hidden sm:inline-flex"
          >
            WhatsApp
          </ButtonLink>
          <ButtonLink href="#contacto" variant="outline" size="sm">
            Contacto
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
