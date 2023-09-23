'use client'
import { useState, type FormEvent } from "react"
import Button from "./Button"

type Props = React.PropsWithChildren<{
  action: string
  method: string
  redirectTo: string
}>

export default function Form({ action, method, redirectTo, children }: Props) {
  const [alertIsOpen, setAlertIsOpen] = useState(false)

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData.entries())
    const url = `http://localhost:3000${action}`
    const bodyInit = {
      body: JSON.stringify(data), method
    }

    fetch(url, bodyInit)
      .then(response => response.json())
      .then(json => {
        console.log(json)
        setAlertIsOpen(true)
      })
  }

  return (
    <form className="bg-black p-4 mt-4" action={action} method={method} onSubmit={submit}>
      {children}
      <dialog open={alertIsOpen}>
        <p>Se mandó fino</p>
        <Button href={redirectTo}>Aceptar</Button>
      </dialog>
    </form>
  )
}