import React from 'react';
import { Power, Lightbulb, Fan, Tv, Music, Wifi, Shield, Coffee } from 'lucide-react';

// Map string IDs to their respective Lucide React components
export const ICON_MAP = {
  power: Power,
  light: Lightbulb,
  fan: Fan,
  tv: Tv,
  music: Music,
  wifi: Wifi,
  shield: Shield,
  coffee: Coffee,
};

export default function IconPicker({ selectedIcon, onSelect }) {
  const icons = Object.keys(ICON_MAP);

  return (
    <div className="grid grid-cols-4 gap-3">
      {icons.map((iconId) => {
        const IconComponent = ICON_MAP[iconId];
        const isActive = selectedIcon === iconId;

        return (
          <button
            key={iconId}
            onClick={() => onSelect(iconId)}
            className={`flex flex-col items-center justify-center p-3 rounded-md border transition-all duration-200 ${
              isActive 
                ? 'bg-zinc-800 border-[#d4af37] text-[#d4af37]' 
                : 'bg-zinc-900 border-zinc-800 text-zinc-500 hover:text-zinc-300 hover:border-zinc-700'
            }`}
            title={iconId}
          >
            <IconComponent size={24} strokeWidth={isActive ? 2 : 1.5} />
            <span className="text-[9px] uppercase tracking-wider mt-2 opacity-80">
              {iconId}
            </span>
          </button>
        );
      })}
    </div>
  );
}