import { NFT } from "../modules/NFT/types"
import { Seller } from "../modules/Seller/types"

export type SetNFTsAction = StoreAction & { nfts: NFT[] }
export const SET_NFTS = "SET_NFTS"
export const setNFTs = (nfts: NFT[]): SetNFTsAction => ({
  type: SET_NFTS,
  nfts,
})

export type SetBestSellersAction = StoreAction & { bestSellers: Seller[] }
export const SET_BEST_SELLERS = "SET_BEST_SELLERS"
export const setBestSellers = (
  bestSellers: Seller[]
): SetBestSellersAction => ({
  type: SET_BEST_SELLERS,
  bestSellers,
})

export type StoreActionType = typeof SET_NFTS | typeof SET_BEST_SELLERS

export interface StoreAction {
  type: StoreActionType
  [key: string]: unknown
}
