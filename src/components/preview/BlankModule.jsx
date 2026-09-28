import React from "react";

export default function BlankModule({ isSelected, onSelect }) {
  return (
    <div
      className={`col-span-1 relative w-full h-24 rounded-sm flex items-center justify-center cursor-pointer transition-all duration-200 ${
        isSelected ? "border-2 border-white" : "border border-zinc-700/50"
      }`}
      onClick={() => onSelect()}
    >
      {/* Subtle inner line to mimic the physical seam of a blank plate */}
      <div className="w-[85%] h-[92%] border border-zinc-700/30 rounded-sm" />
    </div>
  );
}
