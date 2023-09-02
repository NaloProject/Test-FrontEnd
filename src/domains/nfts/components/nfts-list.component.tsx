import { use } from 'react'

import { getNfts } from '@domains/nfts'

const NftList: FC = () => {
	const nftsList = use(getNfts())

	return (
		<ul>
			{nftsList.map((nft) => {
				return <li key={nft.id}>{nft.name}</li>
			})}
		</ul>
	)
}

export { NftList }
