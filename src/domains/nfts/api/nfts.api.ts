import { promises as fs } from 'fs'
import path from 'path'
import { redirect } from 'next/navigation'

import { INFT } from '@domains/nfts'
import { TSellerID } from '@domains/sellers'

export const getNfts = (nftsPage: number, limit: number | null) => {
	const jsonDirectory = path.join(process.cwd(), 'src/data')

	return fs.readFile(jsonDirectory + '/data.json', 'utf8').then((data) => {
		const allNfts = JSON.parse(data)['nfts'] as INFT[]

		if (!limit) return { nfts: allNfts, maxPages: 1 }

		const maxPages = Math.ceil(allNfts.length / limit)

		if (nftsPage <= 0 || nftsPage > maxPages) redirect('/')

		const slicedResults = allNfts.slice(
			(nftsPage - 1) * limit,
			nftsPage * limit,
		)

		return {
			nfts: slicedResults,
			maxPages: maxPages,
		}
	})
}

export const getSellerNfts = async (sellerId: TSellerID) => {
	const { nfts } = await getNfts(1, null)

	return nfts.filter((nft) => nft.sellerId === sellerId)
}
