import clsx from 'clsx'

type Props = React.PropsWithChildren<{ className?: string | undefined }>

export default function Heading({ children, className }: Props) {
  return (
    <h1 className={clsx('text-4xl font-bold tracking-tighter', className)}>
      {children}
    </h1>
  )
}