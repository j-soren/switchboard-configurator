import React from "react";
import { X, Trash2 } from "lucide-react";

export default function CartModal({
  isOpen,
  onClose,
  cart,
  cartTotal,
  onRemove,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Blurred Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Slide-out Panel */}
      <div className="relative w-full max-w-md h-full bg-zinc-950 border-l border-zinc-800 p-8 flex flex-col shadow-2xl animate-in slide-in-from-right duration-300">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-light tracking-wide uppercase">
            Your Cart
          </h2>
          <button
            onClick={onClose}
            className="text-zinc-500 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto space-y-4 pr-2">
          {cart.length === 0 ? (
            <p className="text-zinc-500 text-center mt-10">
              Your cart is empty.
            </p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="bg-zinc-900/50 p-5 rounded-md border border-zinc-800/50 flex justify-between items-start group hover:border-zinc-700 transition-colors"
              >
                <div>
                  <h4 className="font-medium text-white mb-1">
                    {item.config.plateSize}M Modular Board
                  </h4>
                  <p className="text-xs text-zinc-400 mb-3">
                    {item.config.material.name}
                  </p>
                  <span className="inline-block bg-zinc-800 text-zinc-300 text-[10px] uppercase tracking-wider px-2 py-1 rounded">
                    Qty: {item.quantity}
                  </span>
                </div>
                <div className="flex flex-col items-end justify-between h-full min-h-[5rem]">
                  <span className="font-medium text-[#d4af37]">
                    ₹{item.price * item.quantity}
                  </span>
                  <button
                    onClick={() => onRemove(item.id)}
                    className="text-red-400/50 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100"
                    title="Remove item"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="pt-8 border-t border-zinc-800 mt-6">
          <div className="flex justify-between items-center mb-6">
            <span className="text-zinc-400 uppercase tracking-wider text-sm">
              Total
            </span>
            <span className="text-3xl font-light text-[#d4af37]">
              ₹{cartTotal}
            </span>
          </div>
          <button
            className="w-full bg-[#d4af37] text-black py-4 rounded font-medium tracking-wide hover:bg-[#ebd074] transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
            disabled={cart.length === 0}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
