import { FC } from 'react'
import { Sale } from '@Redux/types'

import { ReactComponent as FlameIcon } from '@Svg/flame-icon.svg'

import Image from 'next/image'
import Link from 'next/link'

export type AuctionListItemProps = {
  auction: Sale
}

const AuctionListItem: FC<AuctionListItemProps> = ({ auction }) => (
  <Link
    href={`/auction/${auction.id}`}
    key={auction.id}
    className="flex w-full mb-4 pb-4 border border-t-0 border-r-0 border-b-1 sm:border-b-0 border-b-slate-200 dark:border-b-slate-700 border-l-0 last-of-type:border-b-0"
  >
    <article className="flex w-full">
      <div className="h-[64px] w-[64px] lg:h-[128px] lg:w-[128px] mr-4">
        <div className="overflow-hidden flex rounded-lg w-full relative h-[64px] w-[64px] lg:h-[128px] lg:w-[128px]">
          <Image
            src={auction.image}
            alt={auction.name}
            height={64}
            width={64}
            className="pointer-events-none h-[64px] w-[64px] lg:h-[128px] lg:w-[128px]"
          />
        </div>
      </div>

      <div className="flex-1">
        <h3 className="font-medium lg:font-bold text-[16px] lg:text-[24px] text-slate-700 dark:text-slate-300 mb-1">
          {auction.name}
        </h3>
        <h4 className="text-[12px] text-slate-300 dark:text-slate-600">
          {auction.totalMinted} Editions minted
        </h4>
      </div>

      <div className="flex flex-col items-end">
        <span className="font-bold text-[14px] text-slate-700 dark:text-slate-300 mb-1">
          {auction.price} ETH
        </span>
        <span className="text-[13px] text-slate-400 flex-1">Starting Bid</span>
        {auction.isHot ? (
          <div className="hidden lg:block bg-slate-200 dark:bg-slate-400 bottom-[20px] flex rounded-lg px-3 py-2">
            <span className="text-slate-700 font-medium mr-2 text-[12px]">
              {auction.timeLeft} left
            </span>

            <span className="inline-block w-[12px] h-[12px]">
              <FlameIcon />
            </span>
          </div>
        ) : null}
      </div>
    </article>
  </Link>
)

export default AuctionListItem
