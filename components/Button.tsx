import clsx from "clsx";
import Link from "next/link";

type Props = React.PropsWithChildren<{
  href?: string | undefined
  type?: 'submit' | 'reset' | 'button'
  onClick?: (() => void) | undefined
  size?: 'base' | 'lg'
}>

export default function Button({ href, onClick, children, type = 'button', size = 'base' }: Props) {
  const classes = clsx('bg-red-600 rounded-lg flex justify-center items-center px-4 font-semibold py-1 hover:bg-red-700 active:bg-red-800 transition-colors', size === 'lg' && 'text-xl')

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