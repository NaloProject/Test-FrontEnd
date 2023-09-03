import { TSellerID } from '@domains/sellers'

export interface INFT {
	id: string
	name: string
	totalMinted: number
	price: string
	like: number
	forSale: number
	timeLeft: string
	isHot: boolean
	sellerId: TSellerID
	image: string
}
