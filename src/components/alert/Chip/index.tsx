import cs from "clsx"
import { ReactNode } from "react"
import { Text } from "../../typography/Text"
import styles from "./Chip.module.css"

interface Props {
  className?: string
  children?: ReactNode | ReactNode[]
}

export function Chip({ className, children }: Props) {
  return <Text className={cs(styles.root, className)}>{children}</Text>
}
