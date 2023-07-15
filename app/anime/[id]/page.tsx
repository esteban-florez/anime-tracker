import Button from '#/components/Button'
import { SEASONS } from "#/lib/translations"
import prisma from '#/prisma/client'
import { notFound } from 'next/navigation'

interface Context {
  params: {
    id: string
  }
}

export default async function AnimeDetailsPage({ params: { id } }: Context) {
  const anime = await prisma.anime.findUnique({
    where: { id },
    include: {
      studio: true,
    }
  })

  if (anime === null) {
    notFound()
  }

  return (
    <main className="p-4">
      <section className="bg-black rounded-xl p-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-bold text-4xl">
              {anime.title}
            </h1>
            <h2 className="font-semibold text-neutral-400 text-xl -mt-1">
              Estudio:
              <span className="uppercase">
                {' ' + anime.studio.name}
              </span>
            </h2>
          </div>
        </div>
        <p className="text-xl font-semibold -mt-1 text-neutral-400">
          Temporada: {SEASONS[anime.season]} {anime.year}
        </p>
        <p className="text-lg mt-4">{anime.description}</p>
        <div className="mt-4 flex gap-2">
          <Button href="/anime">Volver al listado</Button>
          <Button>Editar</Button>
        </div>
      </section>
    </main>
  )
}