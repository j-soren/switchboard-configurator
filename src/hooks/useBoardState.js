import { useState } from "react";

// The complete Indian standard plate sizing
export const PLATE_SIZES = [
  { size: 1, cols: 1, label: "1M" },
  { size: 2, cols: 2, label: "2M" },
  { size: 3, cols: 3, label: "3M" },
  { size: 4, cols: 4, label: "4M" },
  { size: 6, cols: 6, label: "6M" },
  { size: 8, cols: 8, label: "8M" },
  { size: 12, cols: 6, label: "12M (2 Rows)" },
  { size: 18, cols: 6, label: "18M (3 Rows)" },
];

export function useBoardState() {
  const [boardConfig, setBoardConfig] = useState({
    material: {
      name: "Matte Black Acrylic",
      background: "#18181b",
      isLight: false,
    },
    plateSize: 6,
    columns: 6,
    modules: [
      { id: "1", type: "switch", icon: "power" },
      { id: "2", type: "outlet", icon: null },
    ],
  });

  const [activeModuleId, setActiveModuleId] = useState("1");

  const addModule = (type) => {
    const totalM = boardConfig.modules.reduce(
      (sum, m) => sum + (m.type === "outlet" ? 2 : 1),
      0,
    );
    const incomingM = type === "outlet" ? 2 : 1;

    if (totalM + incomingM > boardConfig.plateSize) {
      alert(`Plate is full! Upgrade enclosure size to add more.`);
      return;
    }

    const newId = Date.now().toString();
    setBoardConfig((prev) => ({
      ...prev,
      modules: [
        ...prev.modules,
        { id: newId, type, icon: type === "switch" ? "power" : null },
      ],
    }));
    setActiveModuleId(newId);
  };

  const removeModule = (id) => {
    setBoardConfig((prev) => {
      const newModules = prev.modules.filter((m) => m.id !== id);
      if (activeModuleId === id) {
        setActiveModuleId(newModules.length > 0 ? newModules[0].id : null);
      }
      return { ...prev, modules: newModules };
    });
  };

  const updatePlateSize = (plate) => {
    const currentTotalM = boardConfig.modules.reduce(
      (sum, m) => sum + (m.type === "outlet" ? 2 : 1),
      0,
    );
    if (currentTotalM > plate.size) {
      alert(
        `Cannot shrink to ${plate.label}. You are currently using ${currentTotalM}M.`,
      );
      return;
    }
    setBoardConfig((prev) => ({
      ...prev,
      plateSize: plate.size,
      columns: plate.cols,
    }));
  };

  const updateMaterial = (material) => {
    setBoardConfig((prev) => ({ ...prev, material }));
  };
  const updateIcon = (id, icon) =>
    setBoardConfig((prev) => ({
      ...prev,
      modules: prev.modules.map((m) => (m.id === id ? { ...m, icon } : m)),
    }));

  return {
    boardConfig,
    activeModuleId,
    setActiveModuleId,
    addModule,
    removeModule,
    updateMaterial,
    updateIcon,
    updatePlateSize,
  };
}
