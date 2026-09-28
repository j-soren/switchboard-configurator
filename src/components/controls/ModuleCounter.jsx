export default function ModuleCounter({ onAdd }) {
  return (
    <div className="flex gap-3 flex-wrap">
      <button
        onClick={() => onAdd("switch")}
        className="px-4 py-2 text-sm border border-zinc-700 hover:bg-zinc-800 rounded transition-colors"
      >
        + Switch
      </button>
      <button
        onClick={() => onAdd("outlet")}
        className="px-4 py-2 text-sm border border-zinc-700 hover:bg-zinc-800 rounded transition-colors"
      >
        + Outlet
      </button>
      <button
        onClick={() => onAdd("blank")}
        className="px-4 py-2 text-sm border border-zinc-800 text-zinc-400 hover:bg-zinc-800 hover:text-white rounded transition-colors"
      >
        + Blank
      </button>
    </div>
  );
}
