import clsx from "clsx";
import Link from "next/link";

type Props = React.PropsWithChildren<{
  href?: string
  type?: 'submit' | 'reset' | 'button'
  onClick?: () => void
  size?: 'base' | 'lg'
  className?: string
}>

export default function Button({ href, onClick, children, type = 'button', className = '' }: Props) {
  const classes = clsx('bg-red-600 rounded-lg flex justify-center items-center px-4 font-semibold py-1 hover:bg-red-700 active:bg-red-800 transition-colors', className)

  if (href === undefined) {
    return (
      <button className={classes} type={type} onClick={onClick}>
        {children}
      </button>
    )
  }

  return (
    <Link className={classes} href={href}>
      {children}
    </Link>
  )
}