import cs from "clsx"
import { Avatar } from "../../../../components/image/Avatar"
import { Price } from "../../../../components/product/Price"
import { Text } from "../../../../components/typography/Text"
import { useSellerWalletAmount } from "../../lib"
import { Seller } from "../../types"
import styles from "./SellerAvatar.module.css"

interface Props {
  seller: Seller
  showWalletAmount?: boolean
  big?: boolean
  className?: string
}

export function SellerAvatar({
  seller,
  showWalletAmount,
  big,
  className,
}: Props) {
  const walletAmount = useSellerWalletAmount(seller)

  return (
    <div className={cs(styles.root, { [styles.big]: big }, className)}>
      <Avatar url={seller.avatar} verified={seller.isVerified} big={big} />
      <div>
        <Text bold className={styles.name}>
          {seller.name}
        </Text>
        <br />
        {showWalletAmount && (
          <Price
            amount={walletAmount}
            secondary
            className={styles.walletAmount}
          />
        )}
      </div>
    </div>
  )
}
