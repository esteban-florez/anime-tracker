import Button from "#/components/Button"
import prisma from "#/prisma/client"

export default async function AnimeListPage() {
  const animes = await prisma.anime.findMany({
    include: {
      studio: true,
    }
  })

  return (
    <main className="grid grid-cols-3 gap-4 p-4">
      {animes.length === 0 && <p>No hay animes registrados.</p>}
      {animes.map(anime => {
        return (
          <section className="bg-black rounded-lg p-4 relative shadow" key={anime.id}>
            <h3 className="font-bold text-2xl">
              {anime.title}
            </h3>
            <h4 className="font-semibold text-neutral-400 -mt-1">
              Estudio:
              <span className="uppercase">
                {' ' + anime.studio.name}
              </span>
            </h4>
            <p className="absolute bg-neutral-700 font-semibold p-1 rounded-lg top-3 right-2">{anime.year}</p>
            <p className="mt-2 line-clamp-1">{anime.description}</p>
            <div className="mt-4 flex">
              <Button href={`/anime/${anime.id}`}>Detalles</Button>
            </div>
          </section>
        )
      })}
    </main>
  )
}
