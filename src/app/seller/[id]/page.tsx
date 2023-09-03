import { FC } from 'react'

import { SellerNfts } from '@/seller/[id]/seller-nfts.component'
import { SellerProfile } from '@/seller/[id]/seller-profile.component'

type PSellerPage = {
	params: {
		id: string
	}
}

const SellerPage: FC<PSellerPage> = ({ params }) => {
	const { id } = params

	return (
		<div className={'max-w-5xl mx-auto space-y-16'}>
			<SellerProfile sellerId={+id} />

			<SellerNfts sellerId={+id} />
		</div>
	)
}

export default SellerPage
