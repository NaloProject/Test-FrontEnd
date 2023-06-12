import { useStore } from "../../../store"
import { useNFTsBySeller } from "../../NFT/lib"
import { NFT } from "../../NFT/types"
import { Seller } from "../types"

export function useBestSellers(): Seller[] {
  const { state } = useStore()

  return state.bestSellers ?? []
}

export function useSeller(id?: number): Seller | null {
  const sellers = useBestSellers()

  return Number.isFinite(id)
    ? sellers.find((seller) => seller.id === id) ?? null
    : null
}

export function useSellerWalletAmount(seller: Seller): number {
  const nfts = useNFTsBySeller(seller.id)

  return nfts.reduce(
    (amount: number, nft: NFT): number => amount + parseFloat(nft.price),
    0
  )
}
