import React from 'react';
import ConfiguratorLayout from './components/layout/ConfiguratorLayout';
import SwitchboardVisualizer from './components/preview/SwitchboardVisualizer';
import ControlPanel from './components/controls/ControlPanel';
import { useBoardState } from './hooks/useBoardState';
import './styles/index.css';

export default function App() {
  const { 
    boardConfig,
    activeModuleId, 
    setActiveModuleId,
    addModule, 
    removeModule, 
    updateColor, 
    updateIcon 
  } = useBoardState();

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-zinc-800">
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
            onColorChange={updateColor}
            onIconChange={updateIcon}
          />
        }
      />
    </div>
  );
}