import { SEASONS } from "#/lib/translations";
import { Anime, Studio } from "@prisma/client";
import BackButton from "./BackButton";
import Button from "./Button";
import Form from "./Form";
import Input from "./Input";
import Select from "./Select";
import StudioSelect from "./StudioSelect";

type Props = React.PropsWithChildren<{
  type: 'create'
  anime?: undefined
} | {
  type: 'edit'
  anime: Anime & { studio: Studio }
}>

export default function AnimeForm({ type, anime }: Props) {
  const action = type === 'edit' ? `/api/anime/${anime.id}` : '/api/anime'
  const method = type === 'edit' ? 'PUT' : 'POST'
  const seasons = Object.entries(SEASONS).map(([value, label]) => ({ value, label }))

  return (
    <div className="bg-black p-4 mt-4" >
      <Form action={action} method={method} redirectTo="/anime">
        <Input
          label="Título"
          name="title"
          placeholder="Escribe el título del anime..."
          defaultValue={anime?.title}
        />
        <Input
          label="Descripción"
          name="description"
          placeholder="Escribe la descripción del anime..."
          defaultValue={anime?.description}
        />
        <Input
          label="Año de emisión"
          name="year"
          placeholder="Escribe el año de emisión..."
          defaultValue={anime?.year.toString()}
        />
        <Select
          options={seasons}
          name="season"
          label="Temporada de emisión"
          defaultValue={anime?.season}
        />
        <StudioSelect defaultValue={anime?.studioId} />
        <div className="flex gap-2">
          <BackButton />
          <Button type="submit">
            Enviar
          </Button>
        </div>
      </Form>
    </div>
  )
}