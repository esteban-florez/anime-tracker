type Props = React.PropsWithChildren<{
  options: Array<{ value: string, label: string }>
}>

export default function Select({ options }: Props) {
  return (
    <select className="rounded-lg bg-neutral-600 py-1 px-2 outline-none focus:ring-1 focus:ring-red-600 placeholder:text-neutral-400" name="season" id="season">
      <option disabled>Seleccionar...</option>
      {options.map(option => (
        <option value={option.value}>{option.label}</option>
      ))}
    </select>
  )
}