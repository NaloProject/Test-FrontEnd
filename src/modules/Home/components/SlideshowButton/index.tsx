import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"
import { Icon } from "../../../../components/image/Icon"
import styles from "./SlideshowButton.module.css"

interface Props {
  previous?: boolean
  onClick(): void
}

export function SlideshowButton({ previous, onClick }: Props) {
  return (
    <button className={styles.root} onClick={onClick}>
      <Icon
        icon={previous ? ChevronLeftIcon : ChevronRightIcon}
        className={styles.icon}
      />
    </button>
  )
}
