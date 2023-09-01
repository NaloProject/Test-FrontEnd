import { Suspense } from 'react'

import { NftList } from '@domains/nfts'
import { SellersList } from '@domains/sellers'

import { Loader } from '@ui'

const Home = () => {
	return (
		<main>
			<Suspense fallback={<Loader />}>
				<NftList />
			</Suspense>

			<Suspense fallback={<Loader />}>
				<SellersList />
			</Suspense>
		</main>
	)
}

export default Home
