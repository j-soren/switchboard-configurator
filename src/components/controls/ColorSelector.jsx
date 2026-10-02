import React from "react";

export const FINISHES = [
  // Solid Matte Finishes
  { name: "CI-101 White", background: "#f8f9fa", isLight: true },
  { name: "CI-102 Dark Blue", background: "#0a2947", isLight: false },
  { name: "CI-103 Teal", background: "#123f36", isLight: false },
  { name: "CI-104 Ivory White", background: "#f3f1e6", isLight: true },
  { name: "CI-105 Fog Grey", background: "#3b4954", isLight: false },
  { name: "CI-106 Iron Grey", background: "#50575b", isLight: false },
  { name: "CI-107 Brown", background: "#6d0808", isLight: false },
  { name: "CI-109 Dark Grey", background: "#59585d", isLight: false },
  { name: "CI-110 Grey", background: "#787a79", isLight: false },
  { name: "CI-119 Silver", background: "#e1e3de", isLight: true },
  { name: "CI-120 Dove Grey", background: "#c3cac8", isLight: true },
  { name: "CI-133 Black", background: "#151515", isLight: false },
  // Wood & Marble Finishes
  {
    name: "CI-30S Zebrano",
    background: "url(/textures/zebrano.jpg) center/cover",
    isLight: false,
  },
  {
    name: "CI-306 Scot Pine",
    background: "url(/textures/scot-pine.jpg) center/cover",
    isLight: false,
  },
  {
    name: "CI-307 Early American",
    background: "url(/textures/early-american.jpg) center/cover",
    isLight: false,
  },
  {
    name: "CI-414 Brecia Marble",
    background: "url(/textures/brecia-marble.jpg) center/cover",
    isLight: false,
  },
  {
    name: "CI-403 Café Rosita",
    background: "url(/textures/cafe-rosita.jpg) center/cover",
    isLight: true,
  },
  {
    name: "CI-404 Empress Grey",
    background: "url(/textures/empress-grey.jpg) center/cover",
    isLight: false,
  },
];

export default function ColorSelector({
  currentMaterial,
  onSelect,
  allowMatchBoard,
}) {
  // Add the transparent option if requested
  const options = allowMatchBoard
    ? [
        { name: "Match Board", background: "transparent", isLight: null },
        ...FINISHES,
      ]
    : FINISHES;

  return (
    <div className="flex gap-3 flex-wrap">
      {options.map((finish) => (
        <button
          key={finish.name}
          onClick={() => onSelect(finish)}
          className={`w-12 h-12 rounded-full border-2 transition-all duration-200 ${
            currentMaterial?.name === finish.name
              ? "border-[#d4af37] scale-110 shadow-lg"
              : "border-zinc-700 opacity-70 hover:opacity-100"
          }`}
          style={{
            // Give the transparent option a diagonal striped pattern so it is visible in the UI
            background:
              finish.background === "transparent"
                ? "repeating-linear-gradient(45deg, #18181b, #18181b 4px, #27272a 4px, #27272a 8px)"
                : finish.background,
          }}
          title={finish.name}
        />
      ))}
    </div>
  );
}
