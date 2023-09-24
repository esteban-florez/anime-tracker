import Button from "./Button"
import Form from "./Form"

type Props = React.PropsWithChildren<{
  action: string
}>

export default function DeleteButton({ action }: Props) {
  return (
    <Form action={action} method="DELETE">
      <Button type="submit">Eliminar</Button>
    </Form>
  )
}