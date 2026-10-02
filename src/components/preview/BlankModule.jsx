import React from "react";

export default function BlankModule({
  isSelected,
  onSelect,
  boardIsLight,
  switchMaterial,
}) {
  // Determine actual background and lighting based on the selection
  const isTransparent = switchMaterial.background === "transparent";
  const isLight = isTransparent ? boardIsLight : switchMaterial.isLight;
  const bg = switchMaterial.background;

  return (
    <div
      className={`col-span-1 relative w-full h-24 rounded-sm flex items-center justify-center cursor-pointer transition-all duration-200`}
      onClick={() => onSelect()}
      style={{
        background: bg,
        boxShadow: isLight
          ? "inset 1px 1px 3px rgba(255,255,255,0.9), inset -1px -1px 3px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.05)"
          : "inset 1px 1px 2px rgba(255,255,255,0.15), inset -1px -1px 3px rgba(0,0,0,0.4), 0 2px 4px rgba(0,0,0,0.3)",
        border: isSelected ? "2px solid #d4af37" : "2px solid transparent",
      }}
    >
      {/* Subtle inner line to mimic the physical seam of a blank plate */}
      <div
        className="w-[85%] h-[92%] rounded-sm"
        style={{
          border: isLight
            ? "1px solid rgba(0,0,0,0.05)"
            : "1px solid rgba(255,255,255,0.05)",
        }}
      />
    </div>
  );
}
