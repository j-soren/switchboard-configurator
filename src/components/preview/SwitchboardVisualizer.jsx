import React from "react";
import SwitchModule from "./SwitchModule";
import OutletModule from "./OutletModule";
import BlankModule from "./BlankModule";
import EmptySlot from "./EmptySlot";

export default function SwitchboardVisualizer({
  config,
  activeModuleId,
  onSelectModule,
}) {
  const totalUsedM = config.modules.reduce(
    (sum, m) => sum + (m.type === "outlet" ? 2 : 1),
    0,
  );
  const emptySlotsCount = Math.max(0, config.plateSize - totalUsedM);

  const emptySlots = Array.from({ length: emptySlotsCount }).map((_, i) => (
    <EmptySlot key={`empty-${i}`} />
  ));

  return (
    <div className="flex-1 flex items-center justify-center bg-zinc-900 p-10">
      <div
        // Changed py-5 to py-12 (3rem) to perfectly equal half the switch height (h-24 = 6rem)
        // Adjusted px-6 to px-8 for balanced horizontal framing
        className="grid gap-1 px-8 py-12 rounded-md shadow-2xl transition-all duration-500 border border-black/20"
        style={{
          gridTemplateColumns: `repeat(${config.columns || 6}, 3.5rem)`,
          background: config.material.background,
          boxShadow:
            "0 30px 60px -12px rgba(0, 0, 0, 0.8), inset 0 2px 4px rgba(255,255,255,0.2)",
        }}
      >
        {config.modules.map((module) => {
          if (module.type === "switch")
            return (
              <SwitchModule
                key={module.id}
                icon={module.icon}
                isSelected={activeModuleId === module.id}
                onSelect={() => onSelectModule(module.id)}
                boardIsLight={config.material.isLight}
                switchMaterial={config.switchMaterial}
              />
            );
          if (module.type === "outlet")
            return (
              <OutletModule
                key={module.id}
                isSelected={activeModuleId === module.id}
                onSelect={() => onSelectModule(module.id)}
                boardIsLight={config.material.isLight}
                switchMaterial={config.switchMaterial}
              />
            );
          return (
            <BlankModule
              key={module.id}
              isSelected={activeModuleId === module.id}
              onSelect={() => onSelectModule(module.id)}
              boardIsLight={config.material.isLight}
              switchMaterial={config.switchMaterial}
            />
          );
        })}
        {emptySlots}
      </div>
    </div>
  );
}
