import { ReactNode } from "react"
import styles from "./Title.module.css"

interface Props {
  children: ReactNode | ReactNode[]
}

export function Title({ children }: Props) {
  return <h1 className={styles.root}>{children}</h1>
}
