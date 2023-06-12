import { config } from "../config"
import { NFT } from "../modules/NFT/types"
import { Seller } from "../modules/Seller/types"

import { useEffect, useReducer, useRef, useState } from "react"
import { useStore } from "../store"
import { setBestSellers, setNFTs } from "../store/actions"

interface FetchState<T> {
  data?: T
  error?: Error
}

type Cache<T> = { [url: string]: T }

type FetchAction<T> =
  | { type: "loading" }
  | { type: "fetched"; payload: T }
  | { type: "error"; payload: Error }

export function useFetch<T = unknown>(
  url?: string,
  options?: RequestInit
): FetchState<T> {
  const cache = useRef<Cache<T>>({})
  const cancelRequest = useRef<boolean>(false)
  const initialState: FetchState<T> = {
    error: undefined,
    data: undefined,
  }

  const fetchReducer = (
    state: FetchState<T>,
    action: FetchAction<T>
  ): FetchState<T> => {
    switch (action.type) {
      case "loading":
        return { ...initialState }
      case "fetched":
        return { ...initialState, data: action.payload }
      case "error":
        return { ...initialState, error: action.payload }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(fetchReducer, initialState)

  useEffect(() => {
    if (!url) {
      return
    }

    cancelRequest.current = false

    const fetchData = async () => {
      dispatch({ type: "loading" })

      if (cache.current[url]) {
        dispatch({ type: "fetched", payload: cache.current[url] })
        return
      }

      try {
        const response = await fetch(url, options)
        if (!response.ok) {
          throw new Error(response.statusText)
        }

        const data = (await response.json()) as T

        cache.current[url] = data

        if (cancelRequest.current) {
          return
        }

        dispatch({ type: "fetched", payload: data })
      } catch (error) {
        if (cancelRequest.current) {
          return
        }

        dispatch({ type: "error", payload: error as Error })
      }
    }

    void fetchData()

    return () => {
      cancelRequest.current = true
    }
  }, [url, options])

  return state
}

export interface Data {
  nfts: NFT[]
  bestSellers: Seller[]
}

export function useFetchData(): FetchState<Data> & { ready: boolean } {
  const { dispatch } = useStore()
  const [ready, setReady] = useState(false)
  const { data, error } = useFetch<Data>(config.api.dataPath)

  useEffect(() => {
    if (data) {
      dispatch(setBestSellers(data.bestSellers))
      dispatch(setNFTs(data.nfts))
      setReady(true)
    }
  }, [data, dispatch])

  return { ready, data, error }
}
