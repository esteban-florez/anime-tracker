import Button from "#/components/Button";
import Form from "#/components/Form";
import Heading from '#/components/Heading';
import Input from '#/components/Input';
import Select from "#/components/Select";
import { SEASONS } from "#/lib/translations";
import prisma from "#/prisma/client";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Añadir anime'
}

export default async function CreateAnimePage() {
  const seasons = Object.entries(SEASONS).map(([value, label]) => ({ value, label }))
  const studios = await prisma.studio.findMany()
  const studioOptions = studios.map(studio => ({ value: studio.id, label: studio.name }))

  return (
    <>
      <Heading>Añadir anime</Heading>
      <Form action="/api/anime" method="POST" redirectTo="/anime">
        <Input label="Título" name="title" placeholder="Escribe el título del anime..." />
        <Input label="Descripción" name="description" placeholder="Escribe la descripción del anime..." />
        <Input label="Año de emisión" name="year" placeholder="Escribe el año de emisión..." />
        <Select options={seasons} name="season" label="Temporada de emisión" />
        <Select options={studioOptions} name="studioId" label="Estudio de animación" />
        <Button type="submit">
          Enviar
        </Button>
      </Form>
    </>
  )
}