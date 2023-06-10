import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import { database } from '@Api'
import { Data } from '@Redux/types'

export const getAllData = createAction('data/getAllData', (data: Data) => ({
  payload: data,
}))

export const fetchData = createAsyncThunk(
  'data/fetchData',
  async (_, thunkAPI) => {
    const response = await database()
    thunkAPI.dispatch(getAllData(response))
    return response
  }
)
