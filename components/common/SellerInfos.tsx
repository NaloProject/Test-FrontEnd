import SellerBadge from "./sellerBadge/SellerBadge";
import StyledSellerInfos from './StyledSellerInfos';
import type {BestSeller as BS, OrderedBestSeller} from "../bestsellers/BestSellers";

const SellerInfos = ({ seller }: {seller: BS}) => {
  const getSellerInfos = (seller: BS) =>  {
    const infos = [];
    let k: keyof BS;
    for (k in seller) {
      infos.push(<div key={k}>{k} : {seller[k].toString()}</div>)
    }
    return infos;
  }

  return (
    <StyledSellerInfos>
      <>
        <span className="label">Seller infos</span>
        <SellerBadge seller={seller as OrderedBestSeller} />
        {
          getSellerInfos(seller)
        }
      </>
    </StyledSellerInfos>
  )
}

export default SellerInfos;
