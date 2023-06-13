import { useBestSellers } from "../../../Seller/lib"
import { BestSeller } from "../BestSeller"
import { Subtitle } from "../Subtitle"
import { Title } from "../Title"
import styles from "./BestSellers.module.css"

export function BestSellers() {
  const bestSellers = useBestSellers()

  return (
    <section>
      <Title>best sellers 🎨</Title>
      <Subtitle>Best seller of this week's NFTs</Subtitle>
      <div className={styles.list}>
        {bestSellers.map((seller, index) => (
          <BestSeller key={seller.id} seller={seller} index={index + 1} />
        ))}
      </div>
    </section>
  )
}
