import { FC, PropsWithChildren } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import clsx from 'clsx'

const Navbar: FC<PropsWithChildren> = ({ children }) => {
  const { pathname } = useRouter()

  const displayHomeBtn = pathname !== '/'

  return (
    <nav
      className={clsx('flex w-full items-center mb-6 md:mb-12', {
        'justify-end': !displayHomeBtn,
        'justify-between': displayHomeBtn,
      })}
    >
      {displayHomeBtn && (
        <Link
          className="flex items-center bg-rose-200 text-white font-medium text-[14px] md:text-[14px] dark:bg-sky-900 h-[28px] md:h-[32px] rounded-[6px] md:rounded-[8px] px-[24px] px-[32px]"
          href="/"
        >
          Home
        </Link>
      )}
      {children}
    </nav>
  )
}

export default Navbar
