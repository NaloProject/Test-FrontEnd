import { FC } from 'react'
import { Roboto, Open_Sans } from 'next/font/google'
import clsx from 'clsx'

import { ReactComponent as FlameIcon } from '@Svg/flame-icon.svg'
import { ReactComponent as PaintingIcon } from '@Svg/painting-icon.svg'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
})
const openSans = Open_Sans({ subsets: ['latin'] })

export type HeaderProps = {
  iconName: string
  className?: string
  subTitle: string
  title: string
}

const Icons: Record<string, FC> = {
  painting: PaintingIcon,
  flame: FlameIcon,
}

const Header: FC<HeaderProps> = ({ className, iconName, subTitle, title }) => {
  const Icon: FC | undefined = Icons[iconName]

  return (
    <header className={clsx(`flex flex-col`, className)}>
      <h1
        className={`flex align-middle ${roboto.className} text-slate-700 dark:text-slate-200`}
      >
        <span className="font-bold mr-2 text-[24px] sm:mr-2 sm:text-[28px] md:mr-3 md:text-[32px]">
          {title}
        </span>

        <span className="h-[32px] w-[20px] sm:w-[25px] md:w-[30px]">
          {Icon && <Icon />}
        </span>
      </h1>
      <h2
        className={`text-slate-400 dark:text-slate-600 text-[11px] sm:text-[12px] md:text-[14px] ${openSans.className}`}
      >
        {subTitle}
      </h2>
    </header>
  )
}

export default Header
