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
		<div className={'max-w-5xl mx-auto space-y-16'}>
			<HomeSellers />

			<Suspense fallback={<Loader />}>
				<HomeNfts nftsPage={nftsPage} />
			</Suspense>
		</div>
	)
}

export default HomePage
