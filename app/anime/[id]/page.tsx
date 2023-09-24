import BackButton from "#/components/BackButton"
import Button from '#/components/Button'
import DeleteButton from "#/components/DeleteButton"
import Heading from "#/components/Heading"
import { getAnime } from "#/lib/data-fetching"
import { SEASONS } from '#/lib/translations'
import { Metadata } from 'next'

export async function generateMetadata({ params: { id } }: Params): Promise<Metadata> {
  const anime = await getAnime(id)

  return {
    title: anime.title
  }
}

export default async function AnimeDetailsPage({ params: { id } }: Params) {
  const anime = await getAnime(id)

  return (
    <>
      <section className="bg-black rounded-xl p-4">
        <div className="flex justify-between items-center">
          <div>
            <Heading>{anime.title}</Heading>
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
          <BackButton />
          <Button href={`/anime/${anime.id}/edit`}>
            Editar
          </Button>
          <DeleteButton
            action={`/api/anime/${anime.id}`}
            redirectTo="/anime"
          />
        </div>
      </section>
    </>
  )
}