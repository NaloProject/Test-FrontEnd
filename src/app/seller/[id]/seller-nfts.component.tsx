import { RiNftFill } from 'react-icons/ri'

import { getSellerNfts, NftsList } from '@domains/nfts'
import { TSellerID } from '@domains/sellers'

import { TitleWithImage } from '@components'

type PSellerProfile = {
	sellerId: TSellerID
}

const SellerNfts: FC<PSellerProfile> = async ({ sellerId }) => {
	const nfts = await getSellerNfts(sellerId)

	return (
		<section>
			<div className={'mb-8'}>
				<TitleWithImage
					label={'His Auctions'}
					img={RiNftFill}
				/>
			</div>

			<NftsList nfts={nfts} />
		</section>
	)
}

export { SellerNfts }
