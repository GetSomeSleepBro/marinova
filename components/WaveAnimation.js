export default function WaveAnimation() {
  return (
    <div aria-hidden className="pointer-events-none select-none absolute bottom-0 left-0 right-0 h-24 overflow-hidden -z-10">
      <svg className="w-[200%] h-full animate-wave opacity-60" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22,103.59,29,158,17C230,49,284-4,339,3c46,6,87,45,149,52,57,7,110-26,167-32,66-7,127,17,190,29,90,17,173,10,255-8V0Z" fill="rgba(255,255,255,0.15)"></path>
      </svg>
    </div>
  )
}
