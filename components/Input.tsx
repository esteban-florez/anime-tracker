import { HTMLInputTypeAttribute } from 'react'

type Props = React.PropsWithChildren<{
  label: string
  placeholder: string
  name: string
  type?: HTMLInputTypeAttribute
}>

export default function Input({ label, placeholder, name, type = 'text' }: Props) {
  return (
    <div className="mb-4 space-y-2">
      <label className="block font-semibold" htmlFor={name}>{label}</label>
      <input className="rounded-lg bg-neutral-600 py-1 px-2 outline-none focus:ring-1 focus:ring-red-600 placeholder:text-neutral-400" placeholder={placeholder} type={type} name={name} id={name} />
    </div>
  )
}