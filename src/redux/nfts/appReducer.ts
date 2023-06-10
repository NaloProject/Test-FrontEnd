import { Action, createReducer } from '@reduxjs/toolkit'
import { Data } from '@Redux/types'
import { HYDRATE } from 'next-redux-wrapper'

type GetAllDataAction = Action<'data/getAllData'> & { payload: Data }

type GetAllDataActionHydrate = Action<typeof HYDRATE> & { payload: Data }

const INITIAL_STATE: Data = {
  nfts: [],
  bestSellers: [],
}

export const appReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase('data/getAllData', (state, action: GetAllDataAction) => ({
      ...state,
      ...action.payload,
    }))
    .addCase(HYDRATE, (state, action: GetAllDataActionHydrate) => ({
      ...state,
      ...action.payload,
    }))
})
