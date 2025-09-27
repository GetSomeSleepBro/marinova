import { useState } from 'react'

export default function Tooltip({ label, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative inline-block" onMouseEnter={()=>setOpen(true)} onMouseLeave={()=>setOpen(false)}>
      {children}
      {open && (
        <div role="tooltip" className="tooltip absolute -top-10 left-0 px-3 py-2 rounded bg-black/75 text-white text-xs">
          {label}
        </div>
      )}
    </div>
  )
}

