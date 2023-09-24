import prisma from "#/prisma/client"
import Select from "./Select"

type Props = React.PropsWithChildren<{
  defaultValue?: string
}>

export default async function StudioSelect({ defaultValue }: Props) {
  const studios = await prisma.studio.findMany()
  const studioOptions = studios.map(studio => ({ value: studio.id, label: studio.name }))

  return (
    <Select
      options={studioOptions}
      name="studioId"
      label="Estudio de animación"
      defaultValue={defaultValue}
    />
  )
}