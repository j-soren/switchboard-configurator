import React from "react";
import { ShoppingCart } from "lucide-react";

export default function Header({ cartCount, cartTotal, onOpenCart }) {
  return (
    <header className="w-full h-16 bg-zinc-950 border-b border-zinc-800 flex items-center justify-between px-8 text-white shrink-0">
      <h1 className="text-xl font-light tracking-widest uppercase">
        Studio Configurator
      </h1>

      <button
        onClick={onOpenCart}
        className="flex items-center gap-4 bg-zinc-900 px-5 py-2 rounded-full border border-zinc-800 shadow-inner hover:bg-zinc-800 transition-colors cursor-pointer"
      >
        <div className="relative">
          <ShoppingCart size={18} className="text-[#d4af37]" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </div>
        <span className="text-sm font-medium">
          {cartCount} Item{cartCount !== 1 ? "s" : ""}
        </span>
        <span className="text-sm text-zinc-600">|</span>
        <span className="text-sm font-semibold text-[#d4af37]">
          ₹{cartTotal}
        </span>
      </button>
    </header>
  );
}
