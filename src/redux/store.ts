import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { slice } from './nfts/slice'

const reducers = {
  [slice.name]: slice.reducer,
}

const reducer = combineReducers(reducers)

const makeConfiguredStore = () =>
  configureStore({
    reducer,
    devTools: true,
    middleware: getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
  })

export const makeStore = () => {
  const isServer = typeof window === 'undefined'
  if (isServer) {
    return makeConfiguredStore()
  }

  const persistConfig = {
    key: 'nextjs',
    storage,
  }
  const persistedReducer = persistReducer(persistConfig, reducer)
  const store: any = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
  })
  // eslint-disable-next-line no-underscore-dangle
  store.__persistor = persistStore(store)
  return store
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>

export const wrapper = createWrapper<AppStore>(makeStore)
