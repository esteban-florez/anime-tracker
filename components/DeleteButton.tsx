import Button from "./Button"
import Form from "./Form"

type Props = React.PropsWithChildren<{
  action: string
  redirectTo?: string
}>

export default function DeleteButton({ action, redirectTo }: Props) {
  return (
    <Form action={action} redirectTo={redirectTo} method="DELETE">
      <Button type="submit">Eliminar</Button>
    </Form>
  )
}