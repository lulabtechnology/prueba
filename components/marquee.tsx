import Image from "next/image";
import { cn } from "@/lib/utils";

type Item = { src: string; alt: string };

export default function Marquee({
  items,
  className,
}: {
  items: Item[];
  className?: string;
}) {
  // Duplicate items for seamless looping (50% translate).
  const doubled = [...items, ...items];

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border bg-white/70",
        className
      )}
      aria-label="Productos (cinta deslizante)"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />

      <div className="flex w-[200%] animate-marquee gap-3 p-3 motion-reduce:animate-none">
        {doubled.map((it, idx) => (
          <div
            key={`${it.src}-${idx}`}
            className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-border bg-white"
          >
            <Image
              src={it.src}
              alt={it.alt}
              fill
              className="object-contain p-2"
              sizes="64px"
              priority={idx < 10}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
