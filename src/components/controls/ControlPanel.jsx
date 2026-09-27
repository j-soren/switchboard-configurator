import React from 'react';
import ModuleCounter from './ModuleCounter';
import ColorSelector from './ColorSelector';
import IconPicker from './IconPicker';
import { Trash2 } from 'lucide-react'; // Import a sleek trash icon

export default function ControlPanel({ config, activeModuleId, onAdd, onRemove, onColorChange, onIconChange }) {
  const activeModule = config.modules.find(m => m.id === activeModuleId);

  return (
    <div className="w-96 bg-zinc-950 border-l border-zinc-800 p-8 h-screen overflow-y-auto flex flex-col">
      <h2 className="text-2xl font-light tracking-wide mb-8">Configuration</h2>
      
      <div className="space-y-10 flex-1">
        <section>
          <h3 className="text-sm uppercase tracking-widest text-zinc-400 mb-4">Modules</h3>
          <ModuleCounter onAdd={onAdd} />
        </section>

        <section>
          <h3 className="text-sm uppercase tracking-widest text-zinc-400 mb-4">Faceplate Finish</h3>
          <ColorSelector 
             currentColor={config.faceplateColor} 
             onSelect={(color, texture) => onColorChange(color, texture)} 
          />
        </section>

        {/* Dynamic Section: Only renders if a Switch is selected */}
        {activeModule?.type === 'switch' && (
          <section>
            <h3 className="text-sm uppercase tracking-widest text-zinc-400 mb-4">
              Backlit Icon
            </h3>
            <IconPicker 
              selectedIcon={activeModule.icon} 
              onSelect={(icon) => onIconChange(activeModuleId, icon)} 
            />
          </section>
        )}
      </div>

      {/* Delete Action at the bottom of the panel */}
      {activeModule && (
        <div className="pt-8 mt-8 border-t border-zinc-800">
          <button
            onClick={() => onRemove(activeModuleId)}
            className="flex items-center gap-2 text-sm text-red-400/70 hover:text-red-400 transition-colors w-full p-2 rounded hover:bg-red-950/30"
          >
            <Trash2 size={16} />
            Remove Selected {activeModule.type === 'switch' ? 'Switch' : 'Outlet'}
          </button>
        </div>
      )}
    </div>
  );
}