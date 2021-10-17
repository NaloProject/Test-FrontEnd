import Image from "next/image";
import StyledSellerBadge from "./StyledSellerBadge";
import type { OrderedBestSeller } from "../../bestsellers/BestSellers";

interface SB {
  seller: OrderedBestSeller;
  idx?: number;
  displayTotal?: boolean;
}

const SellerBadge = ({seller, idx, displayTotal}: SB) => (
    <StyledSellerBadge>
      {
        seller ? (
          <>
          <div className="avatar">
            <Image
              height={50}
              width={50}
              src={`/images/${seller?.avatar}`}
              alt={seller.name}
            />
          </div>
          <div className="short-infos">
            <div className="name">
              {seller.name}
            </div>
            {idx === 0 && <span>⚡</span>}
            {displayTotal && <div className="sum">{`${seller.sum} ETH`}</div>}
          </div>
          </>
        )
        :
        null
      }
  </StyledSellerBadge>
);

export default SellerBadge;
