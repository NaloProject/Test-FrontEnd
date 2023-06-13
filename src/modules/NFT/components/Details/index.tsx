import { useNavigate } from "react-router-dom"
import { Likes } from "../../../../components/product/Likes"
import { Price } from "../../../../components/product/Price"
import { Text } from "../../../../components/typography/Text"
import { SellerAvatar } from "../../../Seller/components/SellerAvatar"
import { useSeller } from "../../../Seller/lib"
import { NFT } from "../../types"
import styles from "./Details.module.css"

interface Props {
  nft: NFT
}

export function Details({ nft }: Props) {
  const seller = useSeller(nft.sellerId)
  const navigate = useNavigate()

  function navigateToSeller() {
    if (seller) {
      navigate(`/sellers/${seller.id}`)
    }
  }

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <div className={styles.nameContainer}>
          <h1 className={styles.name}>{nft.name}</h1>

          {nft.isHot && <Text className={styles.hot}>Hot 🔥</Text>}
        </div>
        <div className={styles.pricing}>
          <Price amount={nft.price} className={styles.price} />
          <Text className={styles.forSale}>{nft.forSale} for sale</Text>
        </div>
      </div>

      {seller && (
        <div className={styles.seller} onClick={navigateToSeller}>
          <SellerAvatar seller={seller} showWalletAmount />
        </div>
      )}

      <div className={styles.footerWrapper}>
        <div className={styles.footer}>
          <Text secondary className={styles.minted}>
            {nft.totalMinted} editions minted
          </Text>
          <Likes count={nft.like} big />
        </div>
      </div>
    </div>
  )
}
