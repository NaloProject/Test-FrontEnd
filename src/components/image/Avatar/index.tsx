import { CheckCircleIcon } from "@heroicons/react/24/solid"
import cs from "clsx"
import { Icon } from "../Icon"
import styles from "./Avatar.module.css"

interface Props {
  url: string
  verified?: boolean
  name?: string
  big?: boolean
}

export function Avatar({ url, verified, big }: Props) {
  return (
    <div
      className={cs(styles.root, { [styles.big]: big })}
      style={{ backgroundImage: `url(${url})` }}
    >
      {verified && <Icon icon={CheckCircleIcon} className={styles.verified} />}
    </div>
  )
}
