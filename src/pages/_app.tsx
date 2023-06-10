import '@Styles/globals.css'
import type { AppProps } from 'next/app'
import { wrapper } from '@Redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { useStore } from 'react-redux'

function MyApp({ Component, pageProps }: AppProps) {
  const store: any = useStore()
  return (
    // eslint-disable-next-line no-underscore-dangle
    <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
      <Component {...pageProps} />
    </PersistGate>
  )
}
export default wrapper.withRedux(MyApp)
