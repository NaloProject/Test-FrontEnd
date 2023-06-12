import { NFT } from "../../types"
import { NFTCard } from "../NFTCard"
import styles from "./NFTList.module.css"

interface Props {
  nfts: NFT[]
  onSelect?(nft: NFT): void
}

export function NFTList({ nfts, onSelect }: Props) {
  return (
    <div className={styles.root}>
      {nfts.map((nft) => (
        <NFTCard key={nft.id} nft={nft} onSelect={onSelect} />
      ))}
    </div>
  )
}
