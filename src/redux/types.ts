export type Sale = {
  id: string
  name: string
  totalMinted: number
  price: string
  like: number
  forSale: number
  timeLeft: string
  isHot: boolean
  sellerId: number
  image: string
}

export type Seller = {
  name: string
  id: number
  isVerified: false
  avatar: string
}

export type Data = {
  nfts: Sale[]
  bestSellers: Seller[]
}
