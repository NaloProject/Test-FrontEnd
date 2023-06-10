import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import { database } from '@Api'
import { RootState } from '@Redux/store'

export const getAllData = createAction(
  'data/getAllData',
  (data: RootState) => ({
    payload: data,
  })
)

export const fetchData = createAsyncThunk(
  'data/fetchData',
  async (_, thunkAPI) => {
    const response = await database()
    thunkAPI.dispatch(
      getAllData({
        data: response,
      })
    )
    return response
  }
)
