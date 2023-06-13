import { TimeLeft } from "../../../../components/product/TimeLeft"
import { NFT } from "../../types"
import styles from "./Cover.module.css"

interface Props {
  nft: NFT
}

export function Cover({ nft }: Props) {
  return (
    <div
      className={styles.root}
      style={{ backgroundImage: `url(${nft.image})` }}
    >
      <TimeLeft timeLeft={nft.timeLeft} className={styles.timeLeft} />
    </div>
  )
}
