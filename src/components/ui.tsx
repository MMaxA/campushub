import type { ReactNode } from 'react'

export function Button({ children, className = '', ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={`rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 disabled:cursor-not-allowed disabled:opacity-50 ${className}`} {...props}>{children}</button>
}

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <section className={`rounded-xl border border-slate-200 bg-white p-5 shadow-sm ${className}`}>{children}</section>
}

export function EmptyState({ title, description }: { title: string; description: string }) {
  return <Card className="text-center"><h2 className="text-lg font-semibold text-slate-900">{title}</h2><p className="mt-2 text-slate-500">{description}</p></Card>
}

