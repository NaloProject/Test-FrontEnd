import { useStore } from "../../../store"
import { Seller } from "../types"

export function useBestSellers(): Seller[] {
  const { state } = useStore()

  return state.bestSellers ?? []
}
