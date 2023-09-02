'use client'

import { useSellerSoldTotal } from '../hooks/use-seller-sold-total.hook'
import { TSellerID } from '../types'

import { Loader } from '@ui'

type PSellerTotalSell = {
	sellerId: TSellerID
}

const SellerTotalSell: FC<PSellerTotalSell> = ({ sellerId }) => {
	const { error, isLoading, totalSold } = useSellerSoldTotal(sellerId)

	if (error) return null
	if (isLoading) return <Loader size={'small'} />

	return (
		<span
			className={'font-medium text-xs text-gray-500'}
			data-testid={'total-sell'}
		>
			{totalSold}&nbsp;ETH
		</span>
	)
}

export { SellerTotalSell }
