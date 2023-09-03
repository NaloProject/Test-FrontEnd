import { getSeller, SellerEmbed, TSellerID } from '@domains/sellers'

type PNftCardSeller = {
	sellerId: TSellerID
}

const NftCardSeller: FC<PNftCardSeller> = async ({ sellerId }) => {
	const seller = await getSeller(sellerId)

	if (!seller) return null

	return (
		<SellerEmbed
			seller={seller}
			size={'small'}
		/>
	)
}

export { NftCardSeller }
