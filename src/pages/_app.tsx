import '@Styles/globals.css'
import type { AppProps } from 'next/app'
import { PersistGate } from 'redux-persist/integration/react'
import { wrapper } from '@Redux/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps, ...rest }: AppProps) {
  const { store } = wrapper.useWrappedStore(rest)
  return (
    <Provider store={store}>
      {/* eslint-disable-next-line no-underscore-dangle */}
      <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}
export default MyApp
