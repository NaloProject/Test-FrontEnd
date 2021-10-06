import { useRouter } from 'next/router'
import NftCard from '../../components/Cards/nft'
import data from "../../../data.json"

const Nft = () => {
  const router = useRouter()
  const { id } = router.query
  const found = data.nfts.find(element => element.id == id);
  console.log(found);
  return (
    <div>
      <ul>
        <li>Name : {found.name}</li>
        <li>Price : {found.price}</li>
        <li>Like : {found.like}</li>
        <li>Seller : {found.sellerId}</li>
      </ul>
    </div>)
}

export default Nft
