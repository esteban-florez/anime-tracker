import Button from "#/components/Button"
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
    <html lang="es" className="h-full bg-neutral-800 text-white">
      <body className={`h-full ${ubuntu.className}`}>
        <div className="h-full">
          <header className="flex justify-between bg-neutral-700 shadow p-4 items-center">
            <h1 className="font-bold tracking-tighter text-3xl">
              Anime Tracker
            </h1>
            <div className="flex items-center gap-4">
              <p className="font-semibold">Esteban Florez</p>
              <Button>Salir</Button>
            </div>
          </header>
          {children}
        </div>
      </body>
    </html>
  )
}
