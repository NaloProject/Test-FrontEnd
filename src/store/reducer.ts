import { NFT } from "../modules/NFT/types"
import { Seller } from "../modules/Seller/types"
import {
  SET_BEST_SELLERS,
  SET_NFTS,
  SetBestSellersAction,
  SetNFTsAction,
  StoreAction,
} from "./actions"

export interface StoreState {
  bestSellers: Seller[]
  nfts: NFT[]
}

export const initialState: StoreState = {
  bestSellers: [],
  nfts: [],
}

export default function reducer(
  state: StoreState,
  action: StoreAction
): StoreState {
  switch (action.type) {
    case SET_NFTS: {
      const { nfts } = action as SetNFTsAction

      return {
        ...state,
        nfts,
      }
    }

    case SET_BEST_SELLERS: {
      const { bestSellers } = action as SetBestSellersAction

      return {
        ...state,
        bestSellers,
      }
    }

    default:
      return state
  }
}
