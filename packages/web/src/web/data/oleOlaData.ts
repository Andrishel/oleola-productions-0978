// ── Data centralizada del negocio: Olé Olá Producciones ──────────────────────

export const business = {
  name: "Olé Olá Producciones",
  tagline: "Animación y organización de eventos infantiles",
  city: "Piura, Perú",
  yearsBadge: "+5 Años de Experiencia en Piura",
  phone: "+51 922 852 254",
  whatsapp: "51922852254",
  email: "oleolaproducciones@gmail.com",
  instagram: "https://www.instagram.com/oleola_producciones",
  facebook: "https://www.facebook.com/profile.php?id=61579132982266",
  owner: "Gabriela Talledo Ruiz",
  deposit: "50% de adelanto para reservar",
  logo: "/images/logo.jpg",
};

export interface Skill {
  icon: string; // lucide icon name
  title: string;
  description: string;
}

export const skills: Skill[] = [
  {
    icon: "Palette",
    title: "Creatividad Temática",
    description:
      "Diseñamos cada evento a tu medida: temáticas, personajes y ambientación que hacen brillar la celebración.",
  },
  {
    icon: "Sparkles",
    title: "Animación & Dinamismo",
    description:
      "Energía positiva de principio a fin. Shows, dinámicas y juegos que mantienen a todos felices y participando.",
  },
  {
    icon: "Clock",
    title: "Puntualidad y Compromiso",
    description:
      "Dirigido por Gabriela Talledo Ruiz. Llegamos a tiempo, cumplimos lo pactado y cuidamos cada detalle.",
  },
];

export interface Pack {
  name: string;
  price: number; // soles
  duration: string;
  items: string[];
  note?: string;
}

export interface ServiceCategory {
  id: string;
  label: string;
  icon: string; // lucide icon name
  emoji: string;
  tagline: string;
  packs: Pack[];
}

export const services: ServiceCategory[] = [
  {
    id: "shows",
    label: "Shows Infantiles",
    icon: "PartyPopper",
    emoji: "🎉",
    tagline: "Diversión garantizada para los más pequeños",
    packs: [
      {
        name: "Pack 1",
        price: 190,
        duration: "2 horas",
        items: ["Animación temática", "Juegos y concursos", "Música y bailes", "Globoflexia básica"],
        note: "No incluye movilidad",
      },
      {
        name: "Pack 2",
        price: 250,
        duration: "2 horas",
        items: ["Todo lo del Pack 1", "Personaje/temática especial", "Show sorpresa", "Premios para los niños"],
        note: "No incluye movilidad",
      },
    ],
  },
  {
    id: "horaloca",
    label: "Hora Loca",
    icon: "Music",
    emoji: "🕺",
    tagline: "El toque de fiesta que todos recuerdan",
    packs: [
      {
        name: "Pack 1",
        price: 190,
        duration: "1 hora",
        items: ["Animadores con energía", "Cotillón básico", "Música bailable", "Cabezones"],
        note: "No incluye movilidad",
      },
      {
        name: "Pack 2",
        price: 270,
        duration: "1 hora",
        items: ["Todo lo del Pack 1", "Más cotillón y accesorios", "Batucada", "Robot LED / personajes"],
        note: "No incluye movilidad",
      },
      {
        name: "Pack 3",
        price: 360,
        duration: "1 hora",
        items: ["Todo lo del Pack 2", "Cotillón premium", "Efectos y humo bajo", "Show completo"],
        note: "No incluye movilidad",
      },
    ],
  },
  {
    id: "baby",
    label: "Baby Shower & Gender Reveal",
    icon: "Baby",
    emoji: "🎀",
    tagline: "Momentos únicos que se disfrutan en familia",
    packs: [
      {
        name: "Baby Shower",
        price: 180,
        duration: "Sesión",
        items: ["Animación y dinámicas", "Juegos para invitados", "Conducción del evento", "Ambiente festivo"],
        note: "No incluye movilidad",
      },
      {
        name: "Gender Reveal",
        price: 180,
        duration: "Sesión",
        items: ["Revelación con efecto especial", "Animación del momento", "Dinámicas temáticas", "Conducción del evento"],
        note: "No incluye movilidad",
      },
    ],
  },
  {
    id: "glitter",
    label: "Glitter Bar",
    icon: "Wand2",
    emoji: "✨",
    tagline: "Brillo y glam para brillar en cada foto",
    packs: [
      {
        name: "Express",
        price: 60,
        duration: "30 min",
        items: ["Estación de glitter", "Aplicación facial", "Escarcha biodegradable"],
        note: "No incluye movilidad · Neón +S/.20",
      },
      {
        name: "Estándar",
        price: 100,
        duration: "1 hora",
        items: ["Estación de glitter", "Más variedad de brillos", "Diseños faciales", "Atención personalizada"],
        note: "No incluye movilidad · Neón +S/.20",
      },
      {
        name: "Fiesta",
        price: 180,
        duration: "2 horas",
        items: ["Estación completa", "Glitter, gemas y stencils", "Diseños premium", "Para grupos grandes"],
        note: "No incluye movilidad · Neón +S/.20",
      },
    ],
  },
  {
    id: "gincanas",
    label: "Gincanas Play",
    icon: "Trophy",
    emoji: "🏆",
    tagline: "Juegos, retos y trabajo en equipo",
    packs: [
      {
        name: "Pack 1",
        price: 190,
        duration: "2 horas",
        items: ["Circuito de juegos", "Retos por equipos", "Animadores", "Premios simbólicos"],
        note: "No incluye movilidad",
      },
      {
        name: "Pack 2",
        price: 320,
        duration: "2 horas 30 min",
        items: ["Todo lo del Pack 1", "Más estaciones de juego", "Materiales premium", "Show de cierre"],
        note: "No incluye movilidad",
      },
    ],
  },
  {
    id: "activaciones",
    label: "Activaciones / Anfitrionaje",
    icon: "Megaphone",
    emoji: "📣",
    tagline: "Presencia profesional para tu marca o evento",
    packs: [
      {
        name: "Servicio",
        price: 100,
        duration: "1 hora 30 min",
        items: ["Anfitrión/a profesional", "Presentación de marca", "Conducción de dinámicas", "Imagen impecable"],
        note: "No incluye movilidad · Desde S/.100 a S/.120",
      },
    ],
  },
];

export interface Step {
  number: number;
  title: string;
  description: string;
  icon: string;
}

export const processSteps: Step[] = [
  { number: 1, title: "Elige tu Pack", description: "Explora los servicios y encuentra el ideal para tu evento.", icon: "MousePointerClick" },
  { number: 2, title: "Consulta Disponibilidad", description: "Escríbenos por WhatsApp con la fecha de tu evento.", icon: "CalendarCheck" },
  { number: 3, title: "50% de Adelanto", description: "Aseguras tu fecha con el 50% de adelanto para reservar.", icon: "Wallet" },
  { number: 4, title: "Datos del Evento", description: "Coordinamos temática, horario y detalles finales.", icon: "ClipboardList" },
  { number: 5, title: "¡A Disfrutar!", description: "Llegamos puntuales y hacemos que tu evento brille.", icon: "Sparkles" },
];

export interface GalleryItem {
  src: string;
  alt: string;
  span?: "tall" | "wide" | "normal";
}

export const gallery: GalleryItem[] = [
  { src: "/images/gallery/grupo.jpg", alt: "Evento animado por Olé Olá Producciones en Piura", span: "wide" },
  { src: "/images/gallery/confetti.jpg", alt: "Niños celebrando con confeti y globos", span: "tall" },
  { src: "/images/gallery/horaloca.jpg", alt: "Hora loca con luces neón", span: "normal" },
  { src: "/images/gallery/glitter.jpg", alt: "Glitter bar con brillos", span: "tall" },
  { src: "/images/gallery/babyshower.jpg", alt: "Ambientación de baby shower / gender reveal", span: "wide" },
  { src: "/images/gallery/gincana.jpg", alt: "Gincana de juegos al aire libre", span: "normal" },
  { src: "/images/gallery/confetti2.jpg", alt: "Fiesta infantil con confeti", span: "normal" },
];

// Distritos frecuentes en Piura para el cotizador
export const districts = [
  "Piura (Cercado)",
  "Castilla",
  "Veintiséis de Octubre",
  "Catacaos",
  "La Unión",
  "Sechura",
  "Sullana",
  "Otro / A coordinar",
];

// Utilidad: genera URL de WhatsApp con mensaje
export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const defaultWhatsAppMessage =
  "¡Hola Olé Olá Producciones! 👋 Quiero información para animar mi evento en Piura.";
