import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from "react"
import { StoreAction } from "./actions"
import reducer, { initialState, StoreState } from "./reducer"

interface StoreContext {
  state: StoreState
  dispatch: Dispatch<StoreAction>
}

export const Store = createContext<StoreContext>({
  state: initialState,
  dispatch: () => undefined,
})

export function useStore(): StoreContext {
  return useContext(Store)
}

interface Props {
  children: ReactNode | ReactNode[]
}

export function StoreProvider({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
}
