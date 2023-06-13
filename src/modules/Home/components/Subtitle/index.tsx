import { ReactNode } from "react"
import styles from "./Subtitle.module.css"

interface Props {
  children: ReactNode | ReactNode[]
}

export function Subtitle({ children }: Props) {
  return <h2 className={styles.root}>{children}</h2>
}
