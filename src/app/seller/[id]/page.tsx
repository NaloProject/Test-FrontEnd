import { FC } from 'react'

import { SellerNfts } from './seller-nfts.component'

import { SellerProfile } from '@domains/sellers'

type PSellerPage = {
	params: {
		id: string
	}
}

const SellerPage: FC<PSellerPage> = ({ params }) => {
	const { id } = params

	return (
		<div
			className={`bg-white shadow-box rounded-3xl p-10 lg:p-16 max-w-5xl mx-auto space-y-16`}
		>
			<SellerProfile sellerId={+id} />

			<SellerNfts sellerId={+id} />
		</div>
	)
}

export default SellerPage
