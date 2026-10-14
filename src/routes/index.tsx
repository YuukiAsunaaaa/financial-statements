import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <main className="min-h-screen w-full bg-slate-950 text-slate-100">
  <div className="mx-auto w-full max-w-6xl px-6 py-12">
   <div className="border-b border-slate-800 pb-6 mb-8">
          <h1 className="text-5xl font-bold tracking-tight text-red-500">
            Welcome to Kissena Baked Goods
          </h1>

          <h2 className="mt-2 text-lg font-medium text-amber-400">
            Financial Statements
          </h2>
        </div>

        <p className="max-w-3xl text-lg text-red-200">
          We are a new company. Year 2025 is our first full year
          of operations. On this site, we will disclose the
          financial statements for our investors.
        </p>

      </div>
    </main>
  )
}

