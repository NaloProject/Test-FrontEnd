import { use } from 'react'

import { getNfts } from '@domains/nfts'

const NftList: FC = () => {
	const nftsList = use(getNfts())

	return (
		<section>
			{nftsList.map((nft) => {
				return <div key={nft.id}>{nft.name}</div>
			})}
		</section>
	)
}

export { NftList }
