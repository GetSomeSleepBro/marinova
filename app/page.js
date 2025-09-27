import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen p-6 animate-fadeIn">
      <div className="w-full max-w-sm text-center space-y-6">
        <h1 className="text-3xl font-extrabold">AquaVision</h1>
        <p className="text-white/80">Dive into the ocean of data.</p>
        <div className="grid gap-3">
          <Link className="btn-primary touch-target" href="/roles" aria-label="Open roles selection">Get Started</Link>
          <Link className="btn-ghost touch-target" href="/guest" aria-label="Enter guest explorer mode">Guest Explorer Mode</Link>
        </div>
      </div>
    </main>
  )
}

