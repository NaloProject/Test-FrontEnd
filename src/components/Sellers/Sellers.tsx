import { FC } from 'react'
import { useAppSelector } from '@Redux/hooks'
import { selectAllSellers } from '@Redux/nfts/selectors'
import Link from 'next/link'
import { Seller } from '@Redux/types'
import PaintingIcon from '@Svg/painting-icon.svg'
import Header from '@Components/Header'
import SellerCard from '@Components/SellerCard/SellerCard'
import clsx from 'clsx'

type SellersProps = {
  className?: string
}

const Sellers: FC<SellersProps> = ({ className }) => {
  const sellers = useAppSelector(selectAllSellers)

  return (
    <section className={clsx('w-full', className)}>
      <Header
        altImageText="Best sellers"
        className="mb-9"
        icon={PaintingIcon}
        subTitle="Best seller this week's NFTs"
        title="Best sellers"
      />
      <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[14px] sm:gap-[20px] md:gap-[28px] w-full">
        {sellers?.map((seller: Seller, index) => (
          <Link
            href={`/seller/${seller.id}`}
            key={seller.id}
            className=" pb-4 border border-t-0 border-r-0 border-b-1 sm:border-b-0 border-b-slate-200 dark:border-b-slate-700 border-l-0 last-of-type:border-b-0"
          >
            <SellerCard index={index + 1} seller={seller} size="medium" />
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Sellers
