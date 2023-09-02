export type TSellerID = number

export interface ISeller {
	name: string
	id: TSellerID
	isVerified: boolean
	avatar: string
}
