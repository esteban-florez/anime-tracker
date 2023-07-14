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
            <h4 className="font-semibold text-neutral-400 text-xl -mt-1">
              Estudio:
              <span className="uppercase">
                {' ' + anime.studio.name}
              </span>
            </h4>
          </div>
          <Button>Editar</Button>
        </div>
        <p className="text-xl font-semibold -mt-1 text-neutral-400">
          Temporada: {SEASONS[anime.season]} {anime.year}
        </p>
        <p className="text-lg mt-4">{anime.description}</p>
      </section>
    </main>
  )
}