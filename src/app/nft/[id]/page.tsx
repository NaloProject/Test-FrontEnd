import { FC } from 'react'

import { getNft, NftCard } from '@domains/nfts'
import { SellerProfile } from '@domains/sellers'

import { GoHome } from '@components'

type PNft = {
	params: {
		id: string
	}
}

const Nft: FC<PNft> = async ({ params }) => {
	const { id } = params
	const nft = await getNft(id)

	if (!nft) throw new Error('NFT not found')

	const { sellerId } = nft

	return (
		<section
			className={`bg-white shadow-box rounded-3xl
			p-10 md:p-16 md:grid md:grid-cols-[1fr_auto] gap-10`}
		>
			<div>
				<GoHome className={'mb-6'} />

				<div>
					<NftCard nft={nft} />
				</div>
			</div>

			<aside className={'mt-12 md:mt-0 w-full'}>
				<SellerProfile
					sellerId={sellerId}
					embed
				/>
			</aside>
		</section>
	)
}

export default Nft
