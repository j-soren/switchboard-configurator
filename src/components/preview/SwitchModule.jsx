import React, { useState } from "react";
import { ICON_MAP } from "../controls/IconPicker";

export default function SwitchModule({ icon, isSelected, onSelect, isLight }) {
  const [isActive, setIsActive] = useState(false);
  const CurrentIcon = ICON_MAP[icon] || ICON_MAP.power;
  const inactiveColor = isLight ? "#52525b" : "#ffffff";

  return (
    <div
      // Changed to h-24 for the perfect 1:2 modular ratio
      className={`col-span-1 relative w-full h-24 rounded-sm flex flex-col items-center justify-center cursor-pointer transition-all duration-200`}
      onClick={() => {
        if (!isSelected) onSelect();
        else setIsActive(!isActive);
      }}
      style={{
        background: "transparent",
        boxShadow: isLight
          ? "inset 1px 1px 3px rgba(255,255,255,0.9), inset -1px -1px 3px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.05)"
          : "inset 1px 1px 2px rgba(255,255,255,0.15), inset -1px -1px 3px rgba(0,0,0,0.4), 0 2px 4px rgba(0,0,0,0.3)",
        border: isSelected ? "2px solid #d4af37" : "2px solid black",
      }}
    >
      <div
        className="absolute top-5 z-10 transition-all duration-300"
        style={{
          color: isActive ? "#ff4500" : inactiveColor,
          filter: isActive
            ? "drop-shadow(0 0 10px rgba(255, 69, 0, 0.8))"
            : "none",
        }}
      >
        {/* Scaled icon down to size 20 to fit the slimmer profile */}
        <CurrentIcon size={20} strokeWidth={1.5} />
      </div>

      <div
        className="absolute bottom-2.5 w-5 h-0.5 rounded-full transition-colors duration-300"
        style={{
          backgroundColor: isActive
            ? "#ff4500"
            : isLight
              ? "#d4d4d8"
              : "#f7f7f7",
        }}
      />
    </div>
  );
}
