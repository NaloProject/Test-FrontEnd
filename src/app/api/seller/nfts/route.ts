import { NextResponse } from 'next/server'

import { getNfts } from '@domains/nfts'

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url)
	const sellerId = searchParams.get('sellerId')

	if (!sellerId) {
		return NextResponse.json(
			{ error: 'Internal Server Error' },
			{
				status: 500,
				headers: { 'content-type': 'application/json' },
				statusText: 'KO',
			},
		)
	}

	const { nfts, maxPages } = await getNfts(1, null)
	const sellerNfts = nfts.filter((nft) => nft.sellerId === +sellerId)

	return NextResponse.json(sellerNfts)
}