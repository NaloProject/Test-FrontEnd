import { HeartIcon } from "@heroicons/react/24/outline"
import { HeartIcon as HeartIconFilled } from "@heroicons/react/24/solid"
import cs from "clsx"
import { Icon } from "../../image/Icon"
import { Text } from "../../typography/Text"
import styles from "./Likes.module.css"

interface Props {
  count: number
  liked?: boolean
  big?: boolean
}

export function Likes({ count, liked, big }: Props) {
  return (
    <Text
      secondary
      className={cs(styles.root, { [styles.liked]: liked, [styles.big]: big })}
    >
      {count}{" "}
      <Icon
        icon={liked ? HeartIconFilled : HeartIcon}
        className={styles.icon}
      />
    </Text>
  )
}
