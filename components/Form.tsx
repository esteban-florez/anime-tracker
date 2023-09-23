'use client'
import { useState, type FormEvent, useEffect, useRef } from "react"
import Button from "./Button"
import { useRouter } from "next/navigation"

type Props = React.PropsWithChildren<{
  action: string
  method: string
  redirectTo?: string
}>

export default function Form({ action, method, redirectTo, children }: Props) {
  const [alert, setAlert] = useState(false)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const router = useRouter()

  useEffect(() => {
    if (dialogRef.current === null) return

    if (alert) {
      dialogRef.current.showModal()
    } else {
      dialogRef.current.close()
    }
  }, [alert])

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
        setAlert(true)
      })
  }

  function handleDialogClick() {
    if (redirectTo === undefined) {
      setAlert(false)
      router.refresh()
    } else {
      router.push(redirectTo)
    }
  }

  return (
    <form action={action} method={method} onSubmit={submit}>
      {children}
      <dialog className="backdrop:w-screen backdrop:h-screen backdrop:bg-white/20 text-white p-4 bg-black rounded-lg shadow" ref={dialogRef}>
        <div className="flex flex-col items-center gap-2">
          <p>¡Operación completada con éxito!</p>
          <Button onClick={handleDialogClick}>Aceptar</Button>
        </div>
      </dialog>
    </form>
  )
}