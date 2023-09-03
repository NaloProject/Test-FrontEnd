import { Suspense } from 'react'
import { AiOutlineFire } from 'react-icons/ai'

import { NftsList } from '@domains/nfts'

import { TitleWithImage } from '@components'
import { Loader, Paragraph } from '@ui'

type PHomeNfts = {
	nftsPage: number
}

const HomeNfts: FC<PHomeNfts> = ({ nftsPage }) => {
	return (
		<section>
			<div className={'mb-3'}>
				<TitleWithImage
					label={'Live Auctions'}
					img={AiOutlineFire}
				/>

				<Paragraph className={'mt-2'}>
					Enjoy! The latest hot auctions
				</Paragraph>
			</div>

			<Suspense fallback={<Loader />}>
				<NftsList nftsPage={nftsPage} />
			</Suspense>
		</section>
	)
}

export { HomeNfts }
