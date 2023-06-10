import { Data } from '@Redux/types'
import data from './data.json'

export const database = (): Promise<Data> =>
  new Promise((resolve, reject) => {
    try {
      setTimeout(() => resolve(data as Data), 100)
    } catch (e) {
      reject(e)
    }
  })
