import { useEffect, useState } from "react"
import useSWR from "swr"
import { config } from "../config"
import { NFT } from "../modules/NFT/types"
import { Seller } from "../modules/Seller/types"
import { useStore } from "../store"
import { setBestSellers, setNFTs } from "../store/actions"

export async function fetcher(input: RequestInfo | URL, init?: RequestInit) {
  const response = await fetch(input, init)

  return response.json()
}

export interface Data {
  nfts: NFT[]
  bestSellers: Seller[]
}

export function useFetchData(): {
  ready: boolean
  data: Data | undefined
  error: Error | null
  isLoading: boolean
} {
  const { dispatch } = useStore()
  const [ready, setReady] = useState(false)
  const { data, error, isLoading } = useSWR<Data>(config.api.dataPath, fetcher)

  useEffect(() => {
    if (data) {
      dispatch(setBestSellers(data.bestSellers))
      dispatch(setNFTs(data.nfts))
      setReady(true)
    }
  }, [data, dispatch])

  return { ready, data, error, isLoading }
}
