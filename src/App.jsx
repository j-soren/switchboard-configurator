import React, { useState } from "react";
import Header from "./components/layout/Header";
import ConfiguratorLayout from "./components/layout/ConfiguratorLayout";
import SwitchboardVisualizer from "./components/preview/SwitchboardVisualizer";
import ControlPanel from "./components/controls/ControlPanel";
import CartModal from "./components/layout/CartModal";
import { useBoardState } from "./hooks/useBoardState";
import "./styles/index.css";

export default function App() {
  // Local state to manage the Cart Modal visibility
  const [isCartOpen, setIsCartOpen] = useState(false);

  const {
    boardConfig,
    activeModuleId,
    setActiveModuleId,
    addModule,
    removeModule,
    updateMaterial,
    updateSwitchMaterial, // The newly added independent module material state
    updateIcon,
    updatePlateSize,
    cart,
    currentPrice,
    cartCount,
    cartTotal,
    addToCart,
    removeFromCart,
  } = useBoardState();

  return (
    <div className="h-screen bg-zinc-950 text-white font-sans selection:bg-zinc-800 flex flex-col overflow-hidden relative">
      <Header
        cartCount={cartCount}
        cartTotal={cartTotal}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <ConfiguratorLayout
        preview={
          <SwitchboardVisualizer
            config={boardConfig}
            activeModuleId={activeModuleId}
            onSelectModule={setActiveModuleId}
          />
        }
        controls={
          <ControlPanel
            config={boardConfig}
            activeModuleId={activeModuleId}
            onAdd={addModule}
            onRemove={removeModule}
            onMaterialChange={updateMaterial}
            onSwitchMaterialChange={updateSwitchMaterial} // Passed to ControlPanel
            onIconChange={updateIcon}
            onPlateSizeChange={updatePlateSize}
            currentPrice={currentPrice}
            onAddToCart={addToCart}
          />
        }
      />

      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        cartTotal={cartTotal}
        onRemove={removeFromCart}
      />
    </div>
  );
}
