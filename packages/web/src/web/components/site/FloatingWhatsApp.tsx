import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl, defaultWhatsAppMessage } from "../../data/oleOlaData";

export function FloatingWhatsApp() {
  const waUrl = buildWhatsAppUrl(defaultWhatsAppMessage);
  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full px-4 py-3.5 font-600 text-white shadow-glow transition-transform hover:-translate-y-0.5 hover:brightness-105"
      style={{ backgroundColor: "#25D366" }}
    >
      <span className="relative flex h-6 w-6 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40"></span>
        <MessageCircle className="relative h-6 w-6" />
      </span>
      <span className="hidden text-sm sm:inline">WhatsApp</span>
    </a>
  );
}
