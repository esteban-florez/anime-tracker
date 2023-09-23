type Props = React.PropsWithChildren<{
  options: Array<{ value: string, label: string }>
  name: string
  label: string
}>

export default function Select({ options, name, label }: Props) {
  return (
    <div className="mb-4 space-y-2">
      <label className="block font-semibold" htmlFor={name}>
        {label}
      </label>
      <select className="rounded-lg bg-neutral-600 py-1 px-2 outline-none focus:ring-1 focus:ring-red-600 placeholder:text-neutral-400" name={name} id={name}>
        <option disabled>Seleccionar...</option>
        {options.map(option => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  )
}