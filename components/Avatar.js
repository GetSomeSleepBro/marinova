export default function Avatar({ label='User', size='16', variant='circle' }) {
  const base = `w-${size} h-${size} ${variant==='circle'?'rounded-full':'rounded-lg'} bg-white text-primary flex items-center justify-center font-bold`;
  const initials = label.split(' ').map(x=>x[0]).slice(0,2).join('').toUpperCase()
  return <span aria-label={`${label} avatar`} className={base}>{initials||'AV'}</span>
}

