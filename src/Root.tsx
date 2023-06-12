import { domAnimation, LazyMotion } from "framer-motion"
import { StrictMode } from "react"
import { RouterProvider } from "react-router-dom"
import { router } from "./router"
import { StoreProvider } from "./store"

export function Root() {
  return (
    <StrictMode>
      <StoreProvider>
        <LazyMotion features={domAnimation}>
          <RouterProvider router={router} />
        </LazyMotion>
      </StoreProvider>
    </StrictMode>
  )
}
