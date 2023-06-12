import { Link } from "react-router-dom"
import { Likes } from "../../../../components/product/Likes"
import { Price } from "../../../../components/product/Price"
import { Text } from "../../../../components/typography/Text"
import { SellerAvatar } from "../../../Seller/components/SellerAvatar"
import { useSeller } from "../../../Seller/lib"
import { NFT } from "../../types"
import styles from "./NFTCard.module.css"

interface Props {
  nft: NFT
  onSelect?(nft: NFT): void
}

export function NFTCard({ nft, onSelect }: Props) {
  const seller = useSeller(nft.sellerId)

  function onClick() {
    if (typeof onSelect === "function") {
      onSelect(nft)
    }
  }

  return (
    <div className={styles.root} onClick={onClick}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${nft.image})` }}
      />
      <div className={styles.header}>
        <div className={styles.title}>
          <Text className={styles.name}>{nft.name}</Text>
          <Text className={styles.forSale}>{nft.forSale} for sale</Text>
        </div>
        <Text secondary className={styles.totalMinted}>
          {nft.totalMinted} editions minted
        </Text>
      </div>
      {seller && <SellerAvatar seller={seller} />}
      <div className={styles.separator} />
      <div className={styles.footer}>
        <div>
          <Price amount={nft.price} bold />
          <br />
          <Link to={`/nfts/${nft.id}`} className={styles.bid}>
            starting bid
          </Link>
        </div>
        <div>
          <Likes count={nft.like} />
        </div>
      </div>
    </div>
  )
}
