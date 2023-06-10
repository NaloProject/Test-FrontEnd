import { Inter } from 'next/font/google'
import { fetchData } from '@Redux/nfts/actions'
import { useAppDispatch, useAppSelector } from '@Redux/hooks'
import { selectNtfById } from '@Redux/nfts/selectors'
import { wrapper } from '@Redux/store'
import { useEffect } from 'react'
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'

const inter = Inter({ subsets: ['latin'] })

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

const Details: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
  // eslint-disable-next-line react/prop-types
> = ({ id }) => {
  const dispatch = useAppDispatch()
  const ntfsById = useAppSelector((state) => selectNtfById(state, id))

  console.log('Details::render - ntfsById[1]: ', ntfsById)

  useEffect(() => {
    dispatch(fetchData())
  }, [])

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    />
  )
}

export default Details
