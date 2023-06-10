import { Open_Sans, Roboto } from 'next/font/google'
import { fetchData } from '@Redux/nfts/actions'
import { useAppDispatch, useAppSelector } from '@Redux/hooks'
import { selectNtfById, selectSellerById } from '@Redux/nfts/selectors'
import { wrapper } from '@Redux/store'
import { useEffect } from 'react'
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import Layout from '@Components/Layout'
import SellerCard from '@Components/SellerCard'
import Image from 'next/image'

import { ReactComponent as FlameIcon } from '@Svg/flame-icon.svg'
import { ReactComponent as FavoriteIcon } from '@Svg/favorite.svg'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
})
const openSans = Open_Sans({ subsets: ['latin'] })

type Props = {
  id: string
}

export const getServerSideProps: GetServerSideProps<Props> =
  wrapper.getServerSideProps((store) => async ({ params }) => {
    const id = params?.id as string
    await store.dispatch(fetchData())
    return {
      props: {
        id,
      },
    }
  })

const AuctionPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
  // eslint-disable-next-line react/prop-types
> = ({ id }) => {
  const dispatch = useAppDispatch()
  const auction = useAppSelector((state) => selectNtfById(state, id))

  const seller = useAppSelector((state) =>
    selectSellerById(state, Number(auction?.sellerId))
  )

  useEffect(() => {
    dispatch(fetchData())
  }, [])

  if (!auction) {
    return <section className="w-full">Auction not found.</section>
  }

  return (
    <Layout>
      <h1
        className={`${roboto.className} font-bold mb-2 text-[24px] sm:mb-4 sm:text-[28px] md:text-[32px] text-slate-700 dark:text-slate-200`}
      >
        <span className="font-bold mr-2 text-[24px] sm:mr-2 sm:text-[28px] md:mr-3 md:text-[32px]">
          {auction.name}
        </span>
      </h1>
      <h2
        className={`flex items-center text-slate-400 dark:text-slate-600 text-[11px] sm:text-[12px] md:text-[14px] ${openSans.className} mb-6 md:mb-8 lg-mb-12`}
      >
        <span className="mr-3">Sold by</span>{' '}
        {seller ? (
          <SellerCard seller={seller} size="small" />
        ) : (
          <span>[no corresponding seller found]</span>
        )}
      </h2>
      <section className="w-full">
        <header className="w-full relative mb-4">
          <div className="overflow-hidden flex rounded-lg w-full relative w-full h-full !relative">
            <Image
              src={auction.image}
              alt={auction.name}
              fill
              className="pointer-events-none object-cover !h-auto !relative"
            />
          </div>
          <div className="absolute bg-white bottom-[20px] flex left-[20px] rounded-lg px-3 py-2">
            <span className="text-slate-700 font-medium mr-2 text-[12px]">
              {auction.timeLeft} left
            </span>
            {auction.isHot ? (
              <span className="inline-block w-[12px] h-[12px]">
                <FlameIcon />
              </span>
            ) : null}
          </div>
        </header>
        <div className="flex">
          <div className="flex mb-3">
            <div className="flex-1">
              <p className="text-[13px] text-green-400">
                {auction.forSale} for sale
              </p>
              <h4 className="text-[12px] text-slate-300 dark:text-slate-600">
                {auction.totalMinted} Editions minted
              </h4>
            </div>
          </div>
        </div>
        <p className="text-[13px] text-slate-700 dark:text-slate-200 mb-6 md:mb-8 lg-mb-12">
          Suspendisse eget ex mi. Donec rhoncus quis turpis in tincidunt. In
          bibendum ornare erat, non tincidunt leo vehicula non. Suspendisse
          potenti. Praesent faucibus, nisl et blandit semper, risus sem aliquet
          nibh, a egestas ligula purus quis ex. Nunc ultrices ultrices maximus.
          Maecenas nisl mi, luctus at volutpat viverra, porttitor eu ligula. Ut
          dapibus diam imperdiet condimentum luctus. Suspendisse at tempor
          tellus. Maecenas tincidunt bibendum enim, sed dignissim eros lobortis
          in. Curabitur rutrum, felis sit amet dictum vehicula, risus leo luctus
          dolor, et mollis lacus erat at justo.
        </p>
        <footer className="flex p-[16px] border border-slate-200 dark:border-slate-600 min-h-[77px] items-center justify-between rounded-xl w-full">
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
      </section>
    </Layout>
  )
}

export default AuctionPage
