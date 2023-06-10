import { configureStore, EnhancedStore } from '@reduxjs/toolkit'
import { render, RenderOptions, RenderResult } from '@testing-library/react'
import { ReactElement, FC, PropsWithChildren } from 'react'
import { Provider } from 'react-redux'

import { combined, RootState } from '@Redux/store'
import INITIAL_STATE from './initialState'

type RenderWithReduxOptions = Omit<RenderOptions, 'queries'> & {
  initialState?: RootState
  store?: EnhancedStore
}

export const renderWithRedux = (
  ui: ReactElement,
  {
    initialState = INITIAL_STATE,
    store = configureStore({
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          immutableCheck: false,
          serializableCheck: false,
        }),
      preloadedState: initialState,
      reducer: combined,
    }),
    ...renderOptions
  }: RenderWithReduxOptions = {}
): RenderResult => {
  const Wrapper: FC<PropsWithChildren> = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  )

  return render(ui, { wrapper: Wrapper, ...renderOptions })
}
