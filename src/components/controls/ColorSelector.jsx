export default function ColorSelector({ currentColor, onSelect }) {
    const finishes = [
      { name: 'Matte Black', hex: '#18181b', texture: 'matte' },
      { name: 'Brushed Steel', hex: '#71717a', texture: 'metallic' },
      { name: 'Champagne Gold', hex: '#d4af37', texture: 'metallic' }
    ];
  
    return (
      <div className="flex gap-4">
        {finishes.map((finish) => (
          <button 
            key={finish.name}
            onClick={() => onSelect(finish.hex, finish.texture)}
            className={`w-10 h-10 rounded-full border-2 transition-all duration-200 ${
              currentColor === finish.hex ? 'border-white scale-110' : 'border-transparent opacity-70 hover:opacity-100'
            }`}
            style={{ backgroundColor: finish.hex }}
            title={finish.name}
          />
        ))}
      </div>
    );
  }