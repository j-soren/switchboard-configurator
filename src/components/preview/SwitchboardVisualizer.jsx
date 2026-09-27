import React from 'react';
import SwitchModule from './SwitchModule';
import OutletModule from './OutletModule';

export default function SwitchboardVisualizer({ config, activeModuleId, onSelectModule }) {
  return (
    <div className="flex-1 flex items-center justify-center bg-zinc-900 p-10">
      <div 
        // Tightened gap-1 to simulate modular units sitting flush next to each other
        // px-8 py-6 gives the outer plate border typical of Roma/Legrand plates
        className="flex gap-1 px-8 py-6 rounded-md shadow-2xl transition-all duration-500 ease-in-out border border-zinc-700/30"
        style={{ 
          backgroundColor: config.faceplateColor,
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7), inset 0 1px 2px rgba(255,255,255,0.15)',
        }}
      >
        {config.modules.map((module) => (
          module.type === 'switch' 
            ? <SwitchModule 
                key={module.id} 
                icon={module.icon} 
                isSelected={activeModuleId === module.id}
                onSelect={() => onSelectModule(module.id)}
              />
            : <OutletModule 
                key={module.id} 
                isSelected={activeModuleId === module.id}
                onSelect={() => onSelectModule(module.id)}
              />
        ))}
      </div>
    </div>
  );
}