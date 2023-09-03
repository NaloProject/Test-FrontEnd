import { FC, Suspense } from 'react'

import { HomeNfts } from './home-nfts.component'
import { HomeSellers } from './home-sellers.component'

import { Loader } from '@ui'

type PHomePage = {
	searchParams: { [key: string]: string | string[] | undefined }
}

const HomePage: FC<PHomePage> = ({ searchParams }) => {
	const nftsPage =
		typeof searchParams.page === 'string' ? Number(searchParams.page) : 1

	return (
		<div
			className={`space-y-16 bg-white shadow-box
			rounded-3xl p-10 lg:p-16`}
		>
			<HomeSellers />

			<Suspense fallback={<Loader center />}>
				<HomeNfts nftsPage={nftsPage} />
			</Suspense>
		</div>
	)
}

export default HomePage
