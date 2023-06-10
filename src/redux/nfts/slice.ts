import { createSlice } from '@reduxjs/toolkit'
import { Data } from '@Redux/types'
import { HYDRATE } from 'next-redux-wrapper'

const INITIAL_STATE: Data = {
  nfts: [],
  bestSellers: [],
}

export const slice = createSlice({
  initialState: INITIAL_STATE,
  name: 'data',
  reducers: {},
  extraReducers: {
    'data/getAllData': (state, action) => ({
      ...action.payload,
    }),
    [HYDRATE]: (state, action) => ({
      ...action.payload,
    }),
  },
})

export default slice.reducer
