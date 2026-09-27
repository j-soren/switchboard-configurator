export default function ModuleCounter({ onAdd }) {
    return (
      <div className="flex gap-4">
        <button 
          onClick={() => onAdd('switch')} 
          className="px-4 py-2 text-sm border border-zinc-700 hover:bg-zinc-800 rounded transition-colors"
        >
          + Add Switch
        </button>
        <button 
          onClick={() => onAdd('outlet')} 
          className="px-4 py-2 text-sm border border-zinc-700 hover:bg-zinc-800 rounded transition-colors"
        >
          + Add Outlet
        </button>
      </div>
    );
  }