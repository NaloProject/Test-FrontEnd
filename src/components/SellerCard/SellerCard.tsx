import { FC } from 'react'
import { Seller } from '@Redux/types'
import { useAppSelector } from '@Redux/hooks'
import { selectNtfBySellerId } from '@Redux/nfts/selectors'
import Avatar from '@Components/Avatar'
import clsx from 'clsx'

export type SellerProps = {
  className?: string
  index?: number
  seller: Seller
  size?: 'small' | 'medium' | 'large'
}

const SellerCard: FC<SellerProps> = ({
  className,
  index,
  seller,
  size = 'large',
}) => {
  const auction = useAppSelector((state) =>
    selectNtfBySellerId(state, seller.id)
  )
  console.log('SellerCard::render - size: ', size)

  const avatarSize = {
    small: 32,
    medium: 48,
    large: 96,
  }

  const pad = (n: string | number, width: number, z?: string) => {
    const y = z || '0'
    const num = n.toString()
    return num.length >= width
      ? n
      : new Array(width - num.length + 1).join(y) + n
  }

  return (
    <article
      className={clsx(
        'flex items-center',
        { 'mb-6': size === 'large' },
        className
      )}
    >
      {index && size === 'medium' ? (
        <span
          className={clsx(
            'text-slate-400 text-[13px] mr-3 dark:text-slate-500',
            className
          )}
        >
          {pad(index, 2)}
        </span>
      ) : null}
      <div className="relative">
        <Avatar
          alt={seller.name}
          className="flex-0 mr-4"
          size={avatarSize[size]}
          src={seller.avatar}
        />
      </div>
      <div className="flex-1">
        <h2
          className={clsx(
            'font-bold text-[14px] text-slate-700 dark:text-slate-200 my-0',
            { '!text-[20px]': size === 'large' },
            className
          )}
        >
          {seller.name}
        </h2>
        {size === 'medium' ? (
          <span className="text-slate-400 dark:text-slate-500 text-[13px]">
            {auction?.price} ETH
          </span>
        ) : null}
      </div>
    </article>
  )
}

export default SellerCard
