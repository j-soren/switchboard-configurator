export default function ConfiguratorLayout({ preview, controls }) {
    return (
      <div className="flex flex-col md:flex-row w-full min-h-screen bg-zinc-950">
        <div className="flex-1 flex flex-col">{preview}</div>
        <div className="w-full md:w-96 shrink-0">{controls}</div>
      </div>
    );
  }