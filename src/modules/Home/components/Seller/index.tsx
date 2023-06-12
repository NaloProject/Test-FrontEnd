import { useNavigate } from "react-router-dom"
import { Seller as ISeller } from "../../../Seller/types"

interface Props {
  seller: ISeller
}

export function Seller({ seller }: Props) {
  const navigate = useNavigate()

  function navigateToSeller() {
    navigate(`/sellers/${seller.id}`)
  }

  return <div onClick={navigateToSeller}>{seller.name}</div>
}
