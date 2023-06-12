import cs from "clsx"
import { Text } from "../../typography/Text"
import styles from "./TimeLeft.module.css"

interface Props {
  timeLeft: string
  className?: string
}

export function TimeLeft({ timeLeft, className }: Props) {
  return (
    <div className={cs(styles.root, className)}>
      <Text>{timeLeft} left 🔥</Text>
    </div>
  )
}
