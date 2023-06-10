import { FC } from 'react'
import { useAppSelector } from '@Redux/hooks'
import { selectAllNtfs } from '@Redux/nfts/selectors'
import Header from '@Components/Header'
import clsx from 'clsx'
import FlameIcon from '@Svg/flame-icon.svg'
import SlideShow from '@Components/SlideShow'
import AuctionCard from '@Components/AuctionCard'
import Link from 'next/link'

type AuctionsProps = {
  className?: string
}

const Auctions: FC<AuctionsProps> = ({ className }) => {
  const auctions = useAppSelector(selectAllNtfs)

  return (
    <section className={clsx('w-full', className)}>
      <Header
        altImageText="flame"
        className="mb-9"
        icon={FlameIcon}
        subTitle="Enjoy the latest hot auctions"
        title="Live auctions"
      />
      <SlideShow slidesToShow={1} slidesToScroll={1}>
        {auctions?.map((auction) => (
          <Link href={`/auction/${auction.id}`} key={auction.id}>
            <AuctionCard auction={auction} key={auction.id} />
          </Link>
        ))}
      </SlideShow>
    </section>
  )
}

export default Auctions