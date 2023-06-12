import { lazy, Suspense } from "react"
import { createBrowserRouter } from "react-router-dom"
import { App } from "./App"
import { PageLoader } from "./components/layout/PageLoader"

const Home = lazy(() => import("./modules/Home"))
const NFT = lazy(() => import("./modules/NFT"))
const Seller = lazy(() => import("./modules/Seller"))

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<PageLoader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/sellers/:id",
        element: (
          <Suspense fallback={<PageLoader />}>
            <Seller />
          </Suspense>
        ),
      },
      {
        path: "/nfts/:id",
        element: (
          <Suspense fallback={<PageLoader />}>
            <NFT />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<PageLoader />}>
            <NFT />
          </Suspense>
        ),
      },
    ],
  },
])
