import { useNavigate } from "react-router-dom"
import { Text } from "../../../../components/typography/Text"
import { SellerAvatar } from "../../../Seller/components/SellerAvatar"
import { Seller as ISeller } from "../../../Seller/types"
import styles from "./BestSeller.module.css"

interface Props {
  seller: ISeller
  index: number
}

export function BestSeller({ seller, index }: Props) {
  const navigate = useNavigate()

  function navigateToSeller() {
    navigate(`/sellers/${seller.id}`)
  }

  return (
    <div className={styles.root} onClick={navigateToSeller}>
      <Text className={styles.index}>{index.toString().padStart(2, "0")}</Text>
      <SellerAvatar seller={seller} showWalletAmount />
    </div>
  )
}
