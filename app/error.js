"use client"
export default function Error({ error, reset }){
  return (
    <main className="min-h-screen p-6">
      <div className="max-w-sm mx-auto card text-center">
        <h2 className="font-bold text-xl mb-2">Something went wrong</h2>
        <p className="text-slate-700 mb-4">{error?.message || 'Unknown error'}</p>
        <button className="btn-primary w-full" onClick={()=>reset?.()}>Try again</button>
      </div>
    </main>
  )
}

