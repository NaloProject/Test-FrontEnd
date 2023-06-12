import { useBestSellers } from "../../../Seller/lib"
import { BestSeller } from "../BestSeller"
import styles from "./BestSellers.module.css"

export function BestSellers() {
  const bestSellers = useBestSellers()

  return (
    <div className={styles.root}>
      {bestSellers.map((seller, index) => (
        <BestSeller key={seller.id} seller={seller} index={index + 1} />
      ))}
    </div>
  )
}
