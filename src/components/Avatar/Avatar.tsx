import { FC } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

export type AvatarProps = {
  alt: string
  className?: string
  size: number
  src: string
}

const Avatar: FC<AvatarProps> = ({ alt, className, size, src }) => (
  <div
    className={clsx(
      `overflow-hidden rounded-full h-[${size}px] w-[${size}px]`,
      className
    )}
  >
    <Image src={src} width={size} height={size} alt={alt} />
  </div>
)

export default Avatar
