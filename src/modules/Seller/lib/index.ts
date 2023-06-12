import { useStore } from "../../../store"
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
