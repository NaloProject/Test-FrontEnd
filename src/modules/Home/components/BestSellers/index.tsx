import { useBestSellers } from "../../../Seller/lib"
import { Seller } from "../Seller"

export function BestSellers() {
  const bestSellers = useBestSellers()

  return (
    <div>
      {bestSellers.map((seller) => (
        <Seller key={seller.id} seller={seller} />
      ))}
    </div>
  )
}
