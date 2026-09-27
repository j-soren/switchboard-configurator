import { useState } from 'react';

export function useBoardState() {
  const [boardConfig, setBoardConfig] = useState({
    faceplateColor: '#18181b',
    texture: 'matte',
    modules: [
      { id: '1', type: 'switch', icon: 'power' },
      { id: '2', type: 'outlet', icon: null }
    ]
  });
  
  // Track which module is selected (default to the first one)
  const [activeModuleId, setActiveModuleId] = useState('1');

  const addModule = (type) => {
    // Calculate total module size: switches are 1M, outlets are 2M
    const totalM = boardConfig.modules.reduce((sum, m) => sum + (m.type === 'switch' ? 1 : 2), 0);
    const incomingM = type === 'switch' ? 1 : 2;

    // Limit to an 8M standard Indian horizontal board
    if (totalM + incomingM > 8) {
      alert("Maximum 8M capacity reached for this horizontal plate.");
      return;
    }

    const newId = Date.now().toString();
    setBoardConfig(prev => ({
      ...prev,
      modules: [...prev.modules, { id: newId, type, icon: type === 'switch' ? 'power' : null }]
    }));
    setActiveModuleId(newId);
  };

  const removeModule = (id) => {
    setBoardConfig(prev => {
      const newModules = prev.modules.filter(m => m.id !== id);
      // If the deleted module was active, select the first available module instead
      if (activeModuleId === id) {
         setActiveModuleId(newModules.length > 0 ? newModules[0].id : null);
      }
      return { ...prev, modules: newModules };
    });
  };

  const updateColor = (color, texture) => {
    setBoardConfig(prev => ({ ...prev, faceplateColor: color, texture }));
  };

  const updateIcon = (id, icon) => {
    setBoardConfig(prev => ({
      ...prev,
      modules: prev.modules.map(m => m.id === id ? { ...m, icon } : m)
    }));
  };

  return { boardConfig, activeModuleId, setActiveModuleId, addModule, removeModule, updateColor, updateIcon };
}