import Link from 'next/link'

import { NftCard } from './nft-card.component'

import { INFT } from '@domains/nfts'

import { Paragraph } from '@ui'

type PNftsList = {
	nfts: INFT[]
}

const NftsList: FC<PNftsList> = ({ nfts }) => {
	if (!nfts.length) return <Paragraph>No NFTs for the moment</Paragraph>

	return (
		<ul
			className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto w-full
				xl:grid-cols-4 gap-5 max-w-[20rem] sm:max-w-[30rem] md:max-w-[40rem] lg:max-w-none`}
		>
			{nfts.map((nft) => {
				const { id } = nft

				return (
					<li key={nft.id}>
						<Link
							href={`/nft/${id}`}
							className={'group'}
						>
							<NftCard nft={nft} />
						</Link>
					</li>
				)
			})}
		</ul>
	)
}

export { NftsList }
