import React from 'react';

export default function OutletModule({ isSelected, onSelect }) {
  return (
    <div 
      // Changed to w-36 h-28 to mimic 2M horizontal socket proportion
      className={`relative w-36 h-28 bg-zinc-800 rounded-sm flex items-center justify-center cursor-pointer transition-all duration-200 ${
        isSelected ? 'border-2 border-[#d4af37]' : 'border border-zinc-700/50'
      }`}
      onClick={() => onSelect()}
    >
      {/* Indian 5-pin socket visual representation */}
      <div className="w-20 h-20 rounded-full bg-zinc-900 border border-zinc-700 flex flex-col items-center justify-center gap-2 shadow-inner">
         {/* Top Earth Pin (Thicker) */}
         <div className="w-2.5 h-3 bg-black rounded-sm" />
         
         {/* Middle Live/Neutral Pins */}
         <div className="flex gap-6 w-full justify-center">
           <div className="w-1.5 h-2 bg-black rounded-sm" />
           <div className="w-1.5 h-2 bg-black rounded-sm" />
         </div>

         {/* Bottom 2-pin socket slots (often combined in Indian sockets) */}
         <div className="flex gap-4 w-full justify-center mt-0.5">
           <div className="w-1.5 h-1.5 bg-black rounded-full" />
           <div className="w-1.5 h-1.5 bg-black rounded-full" />
         </div>
      </div>
    </div>
  );
}