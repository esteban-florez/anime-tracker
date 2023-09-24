import AnimeForm from "#/components/AnimeForm";
import Heading from '#/components/Heading';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Añadir anime'
}

export default async function CreateAnimePage() {
  return (
    <>
      <Heading>Añadir anime</Heading>
      <AnimeForm type="create" />
    </>
  )
}