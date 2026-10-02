import React, { useState } from "react";
import ModuleCounter from "./ModuleCounter";
import ColorSelector from "./ColorSelector";
import IconPicker from "./IconPicker";
import { Trash2, PlusCircle } from "lucide-react";
import { PLATE_SIZES } from "../../hooks/useBoardState";

// Notice onSwitchMaterialChange is now correctly added to the props here
export default function ControlPanel({
  config,
  activeModuleId,
  onAdd,
  onRemove,
  onMaterialChange,
  onSwitchMaterialChange,
  onIconChange,
  onPlateSizeChange,
  currentPrice,
  onAddToCart,
}) {
  const activeModule = config.modules.find((m) => m.id === activeModuleId);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    onAddToCart(quantity);
    setQuantity(1);
  };

  return (
    <div className="w-96 bg-zinc-950 border-l border-zinc-800 flex flex-col h-[calc(100vh-4rem)]">
      <div className="p-8 flex-1 overflow-y-auto space-y-10">
        <h2 className="text-2xl font-light tracking-wide mb-8">
          Configuration
        </h2>

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
            currentMaterial={config.material}
            onSelect={onMaterialChange}
          />
        </section>

        <section>
          <h3 className="text-sm uppercase tracking-widest text-zinc-400 mb-4">
            4. Module Finish
          </h3>
          <ColorSelector
            currentMaterial={config.switchMaterial}
            onSelect={onSwitchMaterialChange}
            allowMatchBoard={true}
          />
        </section>

        {activeModule?.type === "switch" && (
          <section>
            <h3 className="text-sm uppercase tracking-widest text-zinc-400 mb-4">
              5. Backlit Icon
            </h3>
            <IconPicker
              selectedIcon={activeModule.icon}
              onSelect={(icon) => onIconChange(activeModuleId, icon)}
            />
          </section>
        )}

        {activeModule && (
          <div className="pt-4 border-t border-zinc-800">
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

      <div className="p-6 bg-zinc-900 border-t border-zinc-800 shrink-0">
        <div className="flex justify-between items-end mb-4">
          <span className="text-sm text-zinc-400 uppercase tracking-wider">
            Subtotal
          </span>
          <span className="text-2xl font-light text-[#d4af37]">
            ₹{currentPrice * quantity}
          </span>
        </div>

        <div className="flex gap-3">
          <div className="flex items-center bg-zinc-800 rounded border border-zinc-700">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="px-4 py-4 hover:bg-zinc-700 transition-colors text-zinc-300"
            >
              -
            </button>
            <span className="w-6 text-center text-white">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="px-4 py-4 hover:bg-zinc-700 transition-colors text-zinc-300"
            >
              +
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            className="flex-1 bg-white text-black py-4 rounded font-medium tracking-wide flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors"
          >
            <PlusCircle size={18} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
