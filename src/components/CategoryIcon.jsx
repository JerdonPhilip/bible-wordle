import React from 'react';
import { Users, MapPin, PawPrint, Package, CalendarDays, Lightbulb, Sparkles } from 'lucide-react';

const CATEGORY_ICONS = {
  all: Sparkles,
  people: Users,
  places: MapPin,
  animals: PawPrint,
  things: Package,
  events: CalendarDays,
  concepts: Lightbulb,
};

export default function CategoryIcon({ category, size = 14, className = '' }) {
  const Icon = CATEGORY_ICONS[category] || Package;
  return <Icon size={size} className={className} aria-hidden="true" strokeWidth={2.25} />;
}
