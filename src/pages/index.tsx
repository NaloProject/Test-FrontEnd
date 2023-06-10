import { useEffect } from 'react'
import { fetchData } from '@Redux/nfts/actions'
import { useAppDispatch } from '@Redux/hooks'
import { wrapper } from '@Redux/store'

import Sellers from '@Components/Sellers'
import Auctions from '@Components/Auctions'
import Layout from '@Components/Layout'

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    console.log('2. Page.getServerSideProps uses the store to dispatch things')
    await store.dispatch(fetchData())
    console.log('Home::render - State on server', store.getState())
    return {
      props: {},
    }
  }
)

export default function Home() {
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
