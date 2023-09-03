import { NextResponse } from 'next/server'

import { getSellerNfts } from '@domains/nfts'

// used for client~side calculation of the total
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

	const sellerNfts = await getSellerNfts(+sellerId)

	return NextResponse.json(sellerNfts)
}
