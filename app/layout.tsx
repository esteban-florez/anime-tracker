import './globals.css'
import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Anime Tracker',
  description: 'Una app para el registro de tus queridísimos animes.',
}

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="es" className="h-full bg-neutral-950 text-white">
      <body className={`h-full ${ubuntu.className}`}>{children}</body>
    </html>
  )
}
