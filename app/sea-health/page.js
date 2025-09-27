import Header from '@/components/Header'

export default function Page(){
  return (
    <main className="min-h-screen p-4 pb-safe">
      <Header title="Sea Health Index" icon="Drop" backHref="/dashboard" />
      <div className="card">Coming soon: sea health indicators, trends, and actions.</div>
    </main>
  )
}
