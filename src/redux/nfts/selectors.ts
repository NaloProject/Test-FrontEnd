import { RootState } from '@Redux/store'
import { createSelector } from '@reduxjs/toolkit'
import { Sale, Seller } from '@Redux/types'

export const selectAllSellers = (state: RootState): Seller[] | undefined =>
  state?.app.bestSellers

export const selectSellerById = createSelector(
  [(state: RootState) => state, (state, id: number) => id],
  (state, id: number): Seller | undefined =>
    state?.app.bestSellers?.find((seller: { id: number }) => seller.id === id)
)
export const selectAllNtfs = (state: RootState): Sale[] | undefined =>
  state?.app.nfts

export const selectNtfById = createSelector(
  [(state: RootState) => state, (state, id: string) => id],
  (state, id: string): Sale | undefined =>
    state?.app.nfts?.find((sale: { id: string }) => sale.id === id)
)

export const selectNtfBySellerId = createSelector(
  [(state: RootState) => state, (state, sellerId: number) => sellerId],
  (state, sellerId: number): Sale | undefined =>
    state?.app.nfts?.find(
      (sale: { sellerId: number }) => sale.sellerId === sellerId
    )
)

export const selectNtfsBySellerId = createSelector(
  [
    (state: RootState) => state,
    (state, sellerId: number | undefined) => sellerId,
  ],
  (state, sellerId: number | undefined): Sale[] =>
    state?.app.nfts?.filter(
      (sale: { sellerId: number | undefined }) => sale.sellerId === sellerId
    )
)
