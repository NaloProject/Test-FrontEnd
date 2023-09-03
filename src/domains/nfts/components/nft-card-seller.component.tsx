import { getSeller, TSellerID } from '@domains/sellers'
import { SellerEmbed } from '@domains/sellers/components/seller-embed.component'

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
