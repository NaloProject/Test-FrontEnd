import { NFT } from "../../types"
import styles from "./NFTCard.module.css"

interface Props {
  nft: NFT
}

export function NFTCard({ nft }: Props) {
  return (
    <div>
      <img src={nft.image} alt="" className={styles.image} />
      <span>{nft.name}</span>
    </div>
  )
}
