import { useEffect } from 'react'
import { fetchData } from '@Redux/nfts/actions'
import { useAppDispatch } from '@Redux/hooks'
import { wrapper } from '@Redux/store'

import Sellers from '@Components/Sellers'
import Auctions from '@Components/Auctions'
import Layout from '@Components/Layout'
import { InferGetServerSidePropsType, NextPage } from 'next'

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await store.dispatch(fetchData())
    return {
      props: {},
    }
  }
)

const HomePage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
  // eslint-disable-next-line react/prop-types
> = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchData())
  }, [])

  return (
    <Layout>
      <Sellers className="mb-12 sm:mb-24" />
      <Auctions />
    </Layout>
  )
}

export default HomePage
