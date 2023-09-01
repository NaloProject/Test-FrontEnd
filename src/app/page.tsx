import { FC, Suspense } from 'react'

import { NftList } from '@domains/nfts'
import { SellersList } from '@domains/sellers'

import { Loader } from '@ui'

const Home: FC = () => {
	return (
		<>
			<Suspense fallback={<Loader />}>
				<NftList />
			</Suspense>

			<Suspense fallback={<Loader />}>
				<SellersList />
			</Suspense>
		</>
	)
}

export default Home
