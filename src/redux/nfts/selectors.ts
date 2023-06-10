import { RootState } from '@Redux/store'
import { createSelector } from '@reduxjs/toolkit'
import { Sale, Seller } from '@Redux/types'

export const selectAllSellers = (state: RootState): Seller[] | undefined =>
  state?.data?.data?.bestSellers

export const selectSellerById = createSelector(
  [(state: RootState) => state, (state, id: number) => id],
  (state, id: number): Seller | undefined =>
    state?.data?.data?.bestSellers?.find(
      (seller: { id: number }) => seller.id === id
    )
)
export const selectAllNtfs = (state: RootState): Sale[] | undefined =>
  state?.data?.data?.nfts

export const selectNtfById = createSelector(
  [(state: RootState) => state, (state, id: string) => id],
  (state, id: string): Sale | undefined =>
    state?.data?.data?.nfts?.find((sale: { id: string }) => sale.id === id)
)

export const selectNtfBySellerId = createSelector(
  [(state: RootState) => state, (state, sellerId: number) => sellerId],
  (state, sellerId: number): Sale | undefined =>
    state?.data?.data?.nfts?.find(
      (sale: { sellerId: number }) => sale.sellerId === sellerId
    )
)
