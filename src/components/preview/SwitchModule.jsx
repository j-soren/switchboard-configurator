import React, { useState } from 'react';
import { ICON_MAP } from '../controls/IconPicker';

export default function SwitchModule({ icon, isSelected, onSelect }) {
  const [isActive, setIsActive] = useState(false);
  const CurrentIcon = ICON_MAP[icon] || ICON_MAP.power; 

  return (
    <div 
      // Changed to w-16 h-28 to mimic 1M vertical switch proportion
      className={`relative w-16 h-28 bg-zinc-800 rounded-sm flex flex-col items-center justify-center cursor-pointer transition-all duration-200 ${
        isSelected ? 'border-2 border-[#d4af37]' : 'border border-zinc-700/50'
      }`}
      onClick={() => {
        if (!isSelected) {
          onSelect();
        } else {
          setIsActive(!isActive);
        }
      }}
    >
      <div 
        className="relative z-10 transition-colors duration-300"
        style={{ 
          color: isActive ? '#d4af37' : '#52525b',
          filter: isActive ? 'drop-shadow(0 0 8px rgba(212, 175, 55, 0.6))' : 'none'
        }}
      >
        <CurrentIcon size={24} strokeWidth={1.5} />
      </div>
      {/* Optional luxury touch: A subtle physical toggle indicator line at the bottom */}
      <div className={`absolute bottom-3 w-6 h-0.5 rounded-full ${isActive ? 'bg-[#d4af37]' : 'bg-zinc-600'}`} />
    </div>
  );
}