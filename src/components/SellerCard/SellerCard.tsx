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
  size?: 'small' | 'large'
}

const SellerCard: FC<SellerProps> = ({
  className,
  index,
  seller,
  size = 'large',
}) => {
  const ntfsBySellerId = useAppSelector((state) =>
    selectNtfBySellerId(state, seller.id)
  )

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
        'flex items-center pb-4 border border-t-0 border-r-0 border-b-1 sm:border-b-0 border-b-slate-200 border-l-0',
        className
      )}
    >
      {index ? (
        <span className="text-slate-400 text-[13px] mr-3 dark:text-slate-900">
          {pad(index, 2)}
        </span>
      ) : null}
      <Avatar
        alt={seller.name}
        className="flex-0 mr-4"
        size={size === 'small' ? 32 : 48}
        src={seller.avatar}
      />
      <div className="flex-1">
        <h2 className="font-bold text-[14px] text-slate-700 my-0">
          {seller.name}
        </h2>
        {size === 'large' ? (
          <span className="text-slate-400 text-[13px]">
            {ntfsBySellerId?.price} ETH
          </span>
        ) : null}
      </div>
    </article>
  )
}

export default SellerCard
