import { use } from 'react'

import { getSellers } from '@domains/sellers'

const SellersList: FC = () => {
	const sellersList = use(getSellers())

	return (
		<section>
			{sellersList.map((seller) => {
				return <div key={seller.id}>{seller.name}</div>
			})}
		</section>
	)
}

export { SellersList }
