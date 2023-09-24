import AnimeForm from "#/components/AnimeForm";
import Heading from '#/components/Heading';
import { getAnime } from "#/lib/data-fetching";

export async function generateMetadata({ params: { id } }: Params) {
  const anime = await getAnime(id)

  return {
    title: `${anime.title} - Editar anime`
  }
}

export default async function EditAnimePage({ params: { id } }: Params) {
  const anime = await getAnime(id)

  return (
    <>
      <Heading>{anime.title} - Editar</Heading>
      <AnimeForm type="edit" anime={anime} />
    </>
  )
}