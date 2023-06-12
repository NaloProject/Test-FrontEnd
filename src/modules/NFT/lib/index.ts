import { useStore } from "../../../store"
import { NFT } from "../types"

export function useNFTs(): NFT[] {
  const { state } = useStore()

  return state.nfts ?? []
}

export function useNFT(id?: string): NFT | null {
  const { state } = useStore()

  return id ? state.nfts.find((nft) => nft.id === id) ?? null : null
}

export function useNFTsBySeller(sellerId?: number): NFT[] {
  const nfts = useNFTs()

  return Number.isFinite(sellerId)
    ? nfts.filter((nft) => nft.sellerId === sellerId)
    : []
}
