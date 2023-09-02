import { useMemo } from 'react'
import useSWRImmutable from 'swr/immutable'

import { INFT } from '@domains/nfts'
import { TSellerID } from '@domains/sellers'

const fetcher = ([url, sellerId]: [string, TSellerID]) =>
	fetch(`${url}?sellerId=${sellerId}`).then((res) => res.json())

const useSellerSoldTotal = (sellerId: TSellerID) => {
	const {
		data: allNfts,
		error,
		isLoading,
	} = useSWRImmutable<INFT[]>(['/api/seller/nfts', sellerId], fetcher)

	const totalSold = useMemo(() => {
		const total = allNfts?.reduce((acc, nft) => {
			acc += nft.totalMinted * +nft.price
			return acc
		}, 0)

		if (total === undefined) return null

		return total.toFixed(2).replace(/\.0+$/, '')
	}, [allNfts])

	return { totalSold, isLoading, error }
}

export { useSellerSoldTotal }
