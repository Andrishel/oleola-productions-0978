import {
  Palette,
  Sparkles,
  Clock,
  PartyPopper,
  Music,
  Baby,
  Wand2,
  Trophy,
  Megaphone,
  MousePointerClick,
  CalendarCheck,
  Wallet,
  ClipboardList,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  Palette,
  Sparkles,
  Clock,
  PartyPopper,
  Music,
  Baby,
  Wand2,
  Trophy,
  Megaphone,
  MousePointerClick,
  CalendarCheck,
  Wallet,
  ClipboardList,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = map[name] ?? Sparkles;
  return <Cmp className={className} />;
}
