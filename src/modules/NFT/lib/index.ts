import { useStore } from "../../../store"
import { NFT } from "../types"

export function useNFTs(): NFT[] {
  const { state } = useStore()

  return state.nfts ?? []
}
