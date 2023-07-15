import Button from "#/components/Button"
import prisma from "#/prisma/client"

export const revalidate = 10

export default async function AnimeListPage() {
  const animes = await prisma.anime.findMany({
    include: {
      studio: true,
    }
  })

  return (
    <main className="p-4">
      <section className="flex justify-between py-2">
        <h1 className="text-4xl font-bold tracking-tighter px-2">Animes registrados</h1>
        <Button>Añadir</Button>
      </section>
      <section className="grid grid-cols-3 gap-4 mt-4">
        {animes.length === 0 && <p>No hay animes registrados.</p>}
        {animes.map(anime => {
          return (
            <article className="bg-black rounded-lg p-4 relative shadow" key={anime.id}>
              <h2 className="font-bold text-2xl">
                {anime.title}
              </h2>
              <h3 className="font-semibold text-neutral-400 -mt-1">
                Estudio:
                <span className="uppercase">
                  {' ' + anime.studio.name}
                </span>
              </h3>
              <p className="absolute bg-neutral-700 font-semibold p-1 rounded-lg top-3 right-2">{anime.year}</p>
              <p className="mt-2 line-clamp-1">{anime.description}</p>
              <div className="mt-4 flex">
                <Button href={`/anime/${anime.id}`}>Detalles</Button>
              </div>
            </article>
          )
        })}
      </section>
    </main>
  )
}
