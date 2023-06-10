import { FC } from 'react'
import { useAppSelector } from '@Redux/hooks'
import { selectAllNtfs } from '@Redux/nfts/selectors'
import Header from '@Components/Header'
import clsx from 'clsx'
import SlideShow from '@Components/SlideShow'
import AuctionCard from '@Components/AuctionCard'

type AuctionsProps = {
  className?: string
}

const Auctions: FC<AuctionsProps> = ({ className }) => {
  const auctions = useAppSelector(selectAllNtfs)

  return (
    <section className={clsx('w-full', className)}>
      <Header
        className="mb-9"
        iconName="flame"
        subTitle="Enjoy the latest hot auctions"
        title="Live auctions"
      />
      <SlideShow slidesToShow={1} slidesToScroll={1}>
        {auctions?.map((auction) => (
          <AuctionCard auction={auction} key={auction.id} />
        ))}
      </SlideShow>
    </section>
  )
}

export default Auctions
