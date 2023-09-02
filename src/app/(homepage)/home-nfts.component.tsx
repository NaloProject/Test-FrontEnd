import { Suspense } from 'react'

import { SellersList } from '@domains/sellers'

import { Loader } from '@ui'

const HomeNfts: FC = () => {
	return (
		<div>
			home nfts
			<Suspense fallback={<Loader />}>
				<SellersList />
			</Suspense>
		</div>
	)
}

export { HomeNfts }
