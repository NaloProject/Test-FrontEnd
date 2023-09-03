import { FC } from 'react'

import { HomeNfts } from './home-nfts.component'
import { HomeSellers } from './home-sellers.component'

type PHomePage = {
	searchParams: { [key: string]: string | string[] | undefined }
}

const HomePage: FC<PHomePage> = ({ searchParams }) => {
	const nftsPage =
		typeof searchParams.page === 'string' ? Number(searchParams.page) : 1

	return (
		<div className={'max-w-5xl mx-auto space-y-16'}>
			<HomeSellers />

			<HomeNfts nftsPage={nftsPage} />
		</div>
	)
}

export default HomePage
