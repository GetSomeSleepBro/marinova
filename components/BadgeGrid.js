export default function BadgeGrid({ items=[] }) {
  return (
    <div className="grid grid-cols-4 gap-3">
      {items.map(b => (
        <div key={b.id} className="flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-ocean-100 text-primary flex items-center justify-center font-bold">{b.emoji}</div>
          <div className="text-xs mt-1 text-white/90">{b.name}</div>
        </div>
      ))}
    </div>
  )
}

