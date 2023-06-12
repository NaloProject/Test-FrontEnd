import { HeartIcon } from "@heroicons/react/24/outline"
import { HeartIcon as HeartIconFilled } from "@heroicons/react/24/solid"
import cs from "clsx"
import { Icon } from "../../image/Icon"
import { Text } from "../../typography/Text"
import styles from "./Likes.module.css"

interface Props {
  count: number
  liked?: boolean
}

export function Likes({ count, liked }: Props) {
  return (
    <Text className={cs(styles.root, { [styles.liked]: liked })}>
      {count}{" "}
      <Icon
        icon={liked ? HeartIconFilled : HeartIcon}
        className={styles.icon}
      />
    </Text>
  )
}
