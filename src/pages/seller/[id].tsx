import { Roboto } from 'next/font/google'
import { fetchData } from '@Redux/nfts/actions'
import { useAppDispatch, useAppSelector } from '@Redux/hooks'
import { selectNtfsBySellerId, selectSellerById } from '@Redux/nfts/selectors'
import { wrapper } from '@Redux/store'
import { useEffect } from 'react'
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import Layout from '@Components/Layout'
import SellerCard from '@Components/SellerCard'
import AuctionListItem from '@Components/AuctionListItem'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
})

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

const SellerPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
  // eslint-disable-next-line react/prop-types
> = ({ id }) => {
  const dispatch = useAppDispatch()
  const seller = useAppSelector((state) => selectSellerById(state, Number(id)))
  const auctions = useAppSelector((state) =>
    selectNtfsBySellerId(state, seller?.id)
  )

  useEffect(() => {
    dispatch(fetchData())
  }, [])

  if (!seller) {
    return <section className="w-full">Seller not found.</section>
  }

  return (
    <Layout>
      {seller && <SellerCard seller={seller} size="large" />}
      <h2
        className={`${roboto.className} font-bold mb-2 text-[24px] sm:mb-4 sm:text-[28px] md:text-[32px] text-slate-700 dark:text-slate-200`}
      >
        Sales
      </h2>
      <section className="w-full">
        {auctions?.map((auction) => (
          <AuctionListItem auction={auction} key={auction.id} />
        ))}
      </section>
    </Layout>
  )
}

export default SellerPage
