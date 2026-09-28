import React from "react";

export default function OutletModule({ isSelected, onSelect, isLight }) {
  return (
    <div
      className={`col-span-2 relative w-full h-24 rounded-sm flex items-center justify-center cursor-pointer transition-all duration-200`}
      onClick={() => onSelect()}
      style={{
        background: "transparent",
        boxShadow: isLight
          ? "inset 1px 1px 3px rgba(255,255,255,0.9), inset -1px -1px 3px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.05)"
          : "inset 1px 1px 2px rgba(255,255,255,0.15), inset -1px -1px 3px rgba(0,0,0,0.4), 0 2px 4px rgba(0,0,0,0.3)",
        border: isSelected ? "2px solid #d4af37" : "2px solid black",
      }}
    >
      {/* Precise physical coordinate container */}
      <div className="relative w-14 h-12 opacity-90">
        {/* Top Earth Pin (Larger) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-[#0a0a0b] rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,1)]" />

        {/* Middle 2-pin slots (Narrow layout, shifted inward) */}
        <div className="absolute top-5 left-2 w-2.5 h-2.5 bg-[#0a0a0b] rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,1)]" />
        <div className="absolute top-5 right-2 w-2.5 h-2.5 bg-[#0a0a0b] rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,1)]" />

        {/* Bottom Live/Neutral Pins (Wide layout) */}
        <div className="absolute bottom-0 left-1 w-2.5 h-2.5 bg-[#0a0a0b] rounded-full shadow-[inset_0_1px_3px_rgba(0,0,0,1)]" />
        <div className="absolute bottom-0 right-1 w-2.5 h-2.5 bg-[#0a0a0b] rounded-full shadow-[inset_0_1px_3px_rgba(0,0,0,1)]" />
      </div>
    </div>
  );
}
