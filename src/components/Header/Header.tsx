import { FC } from 'react'
import Image from 'next/image'
import { Roboto, Open_Sans } from 'next/font/google'
import clsx from 'clsx'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
})
const openSans = Open_Sans({ subsets: ['latin'] })

export type HeaderProps = {
  altImageText: string
  className?: string
  icon?: string
  subTitle: string
  title: string
}

const Header: FC<HeaderProps> = ({
  altImageText,
  className,
  icon,
  subTitle,
  title,
}) => (
  <header className={clsx(`flex flex-col`, className)}>
    <h1 className={`flex align-middle ${roboto.className} text-slate-700`}>
      <span className="font-bold mr-2 text-[24px] sm:mr-2 sm:text-[28px] md:mr-3 md:text-[32px]">
        {title}
      </span>
      {icon && (
        <Image
          src={icon}
          alt={altImageText}
          height={32}
          width={32}
          className="h-[32px] w-[32px] sm:h-[40px] sm:w-[40px] md:h-[48px] md:w-[48px]"
        />
      )}
    </h1>
    <h2
      className={`text-slate-400 text-[11px] sm:text-[12px] md:text-[14px] ${openSans.className}`}
    >
      {subTitle}
    </h2>
  </header>
)

export default Header
