import { FC } from 'react'
import { Sale } from '@Redux/types'
import { selectSellerById } from '@Redux/nfts/selectors'
import { useAppSelector } from '@Redux/hooks'
import { ReactComponent as FlameIcon } from '@Svg/flame-icon.svg'
import { ReactComponent as FavoriteIcon } from '@Svg/favorite.svg'
import Image from 'next/image'
import Link from 'next/link'
import SellerCard from '@Components/SellerCard'

export type AuctionCardProps = {
  auction: Sale
}

const AuctionCard: FC<AuctionCardProps> = ({ auction }) => {
  const sellerById = useAppSelector((state) =>
    selectSellerById(state, auction.sellerId)
  )

  return (
    <article className="flex flex-col rounded-xl mr-1 sm:mr-2 md:mr-4 h-full">
      <div className="flex flex-col w-full p-[16px] border border-slate-200 dark:border-slate-600 rounded-tl-xl rounded-tr-xl min-h-[400px]">
        <header className="w-full relative mb-4">
          <div className="overflow-hidden flex rounded-lg w-full relative w-full h-full !relative">
            <Link
              href={`/auction/${auction.id}`}
              key={auction.id}
              className="w-full h-full !relative"
            >
              <Image
                src={auction.image}
                alt={auction.name}
                fill
                className="pointer-events-none object-cover !h-auto !relative"
              />
            </Link>
          </div>
          <div className="absolute bg-white bottom-[20px] flex left-[20px] rounded-lg px-3 py-2">
            <span className="text-slate-700 font-medium mr-2 text-[12px]">
              {auction.timeLeft}
            </span>
            {auction.isHot ? (
              <span className="inline-block w-[12px] h-[12px]">
                <FlameIcon />
              </span>
            ) : null}
          </div>
        </header>
        <div className="flex mb-3">
          <div className="flex-1">
            <h3 className="font-medium text-slate-700 dark:text-slate-300 mb-1">
              {auction.name}
            </h3>
            <h4 className="text-[12px] text-slate-300 dark:text-slate-600">
              {auction.totalMinted} Editions minted
            </h4>
          </div>
          <div className="text-[13px] text-green-400">
            {auction.forSale} for sale
          </div>
        </div>
        {sellerById && (
          <SellerCard className="mt-auto" seller={sellerById} size="small" />
        )}
      </div>
      <footer className="flex p-[16px] border border-slate-200 dark:border-slate-600 border-t-0 min-h-[77px] items-center justify-between rounded-bl-xl rounded-br-xl w-full">
        <div className="flex flex-col">
          <span className="font-bold text-[14px] text-slate-700 dark:text-slate-300 mb-1">
            {auction.price} ETH
          </span>
          <span className="text-[13px] text-slate-400">Starting Bid</span>
        </div>
        <div className="flex items-center">
          <span className="font-medium text-[11px] text-slate-400 mr-1">
            {auction.like}
          </span>
          <span className="inline-block w-[22px] h-[22px]">
            <FavoriteIcon className="fill-slate-400" />
          </span>
        </div>
      </footer>
    </article>
  )
}

export default AuctionCard
