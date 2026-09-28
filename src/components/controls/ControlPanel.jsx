import React from "react";
import ModuleCounter from "./ModuleCounter";
import ColorSelector from "./ColorSelector";
import IconPicker from "./IconPicker";
import { Trash2 } from "lucide-react";
import { PLATE_SIZES } from "../../hooks/useBoardState"; // Import plate sizes

export default function ControlPanel({
  config,
  activeModuleId,
  onAdd,
  onRemove,
  onMaterialChange,
  onIconChange,
  onPlateSizeChange,
}) {
  const activeModule = config.modules.find((m) => m.id === activeModuleId);

  return (
    <div className="w-96 bg-zinc-950 border-l border-zinc-800 p-8 h-screen overflow-y-auto flex flex-col">
      <h2 className="text-2xl font-light tracking-wide mb-8">Configuration</h2>

      <div className="space-y-10 flex-1">
        {/* MOVED TO TOP: Frame Size */}
        <section>
          <h3 className="text-sm uppercase tracking-widest text-zinc-400 mb-4">
            1. Enclosure Size
          </h3>
          <div className="grid grid-cols-4 gap-2 mb-2">
            {PLATE_SIZES.map((plate) => (
              <button
                key={plate.label}
                onClick={() => onPlateSizeChange(plate)}
                className={`px-2 py-2 text-xs rounded border transition-colors ${
                  config.plateSize === plate.size
                    ? "bg-zinc-800 border-white text-white"
                    : "border-zinc-800 text-zinc-500 hover:border-zinc-600 hover:text-zinc-300"
                }`}
              >
                {plate.label}
              </button>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-sm uppercase tracking-widest text-zinc-400 mb-4">
            2. Add Modules
          </h3>
          <ModuleCounter onAdd={onAdd} />
        </section>

        <section>
          <h3 className="text-sm uppercase tracking-widest text-zinc-400 mb-4">
            3. Faceplate Finish
          </h3>
          <ColorSelector
            currentColor={config.faceplateColor}
            onSelect={(color, texture) => onMaterialChange(color, texture)}
          />
        </section>

        {activeModule?.type === "switch" && (
          <section>
            <h3 className="text-sm uppercase tracking-widest text-zinc-400 mb-4">
              4. Backlit Icon
            </h3>
            <IconPicker
              selectedIcon={activeModule.icon}
              onSelect={(icon) => onIconChange(activeModuleId, icon)}
            />
          </section>
        )}
      </div>

      {activeModule && (
        <div className="pt-8 mt-8 border-t border-zinc-800">
          <button
            onClick={() => onRemove(activeModuleId)}
            className="flex items-center gap-2 text-sm text-red-400/70 hover:text-red-400 transition-colors w-full p-2 rounded hover:bg-red-950/30"
          >
            <Trash2 size={16} />
            Remove Selected{" "}
            {activeModule.type === "switch"
              ? "Switch"
              : activeModule.type === "outlet"
                ? "Outlet"
                : "Blank"}
          </button>
        </div>
      )}
    </div>
  );
}
