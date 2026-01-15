export type LineKey = "allergy" | "premium" | "standard";

export type LineInfo = {
  key: LineKey;
  title: string;
  subtitle: string;
  bullets: string[];
  cta: string;
  anchorId: string;
  machineImage: string;
  machineAlt: string;
  tone: {
    accentClass: string;
    softBgClass: string;
    badgeClass: string;
  };
  marquee: { src: string; alt: string; label?: string }[];
};

// Menos items (8) y más grandes (lo controla Marquee size="lg")
const baseProducts = Array.from({ length: 8 }).map((_, i) => ({
  src: `/images/products/producto-${i + 1}.png`,
  alt: `Producto ${i + 1}`
}));

export const lines: LineInfo[] = [
  {
    key: "allergy",
    title: "Allergy Free",
    subtitle: "Selección enfocada en necesidades específicas y preferencias alimentarias.",
    bullets: [
      "Mix especializado para restricciones y preferencias.",
      "Control de inventario y reposición programada.",
      "Operación cuidada para una experiencia consistente."
    ],
    cta: "Quiero esta línea",
    anchorId: "lineas",
    machineImage: "/images/machines/allergy-free.png",
    machineAlt: "Vending Machine línea Allergy Free",
    tone: {
      accentClass: "text-allergy",
      softBgClass: "bg-allergySoft",
      badgeClass: "bg-allergy text-white"
    },
    marquee: baseProducts
  },
  {
    key: "premium",
    title: "Premium",
    subtitle: "Una experiencia superior para oficinas y espacios de alto tráfico.",
    bullets: [
      "Mix premium con enfoque en alta rotación y percepción.",
      "Reposición y soporte continuo.",
      "Presentación cuidada, look & feel más premium."
    ],
    cta: "Solicitar propuesta",
    anchorId: "lineas",
    machineImage: "/images/machines/premium.png",
    machineAlt: "Vending Machine línea Premium",
    tone: {
      accentClass: "text-premium",
      softBgClass: "bg-premiumSoft",
      badgeClass: "bg-premium text-white"
    },
    marquee: baseProducts
  },
  {
    key: "standard",
    title: "Standard",
    subtitle: "La opción práctica y eficiente para cubrir lo esencial.",
    bullets: [
      "Productos esenciales con excelente rotación.",
      "Mantenimiento y reposición incluidos.",
      "Ideal para áreas comunes y locales comerciales."
    ],
    cta: "Quiero esta línea",
    anchorId: "lineas",
    machineImage: "/images/machines/standard.png",
    machineAlt: "Vending Machine línea Standard",
    tone: {
      accentClass: "text-standard",
      softBgClass: "bg-standardSoft",
      badgeClass: "bg-standard text-ink"
    },
    marquee: baseProducts
  }
];
