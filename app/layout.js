import './globals.css'

export const metadata = {
  title: 'Politek - Politics that actually matters to you',
  description: 'Understand how political decisions impact your life in seconds, not hours. No bias, no jargon, just clarity.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-900 text-white font-sans">{children}</body>
    </html>
  )
}
