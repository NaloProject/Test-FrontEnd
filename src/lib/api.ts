import { UseFetch, useFetch } from "use-http"
import { config } from "../config"
import { NFT } from "../modules/NFT/types"
import { Seller } from "../modules/Seller/types"

export interface Data {
  nfts: NFT[]
  bestSellers: Seller[]
}

export function useFetchData(): UseFetch<Data> {
  return useFetch<Data>(config.api.dataPath, {}, [])
}
