import StyledBestSellers from './StyledBestSellers';
import type { NFT } from "../nfts/NFTs";
import { useEffect, useState } from "react";
import SellerBadge from "../common/sellerBadge/SellerBadge";
import Link from 'next/link';

export interface BestSeller {
  name: string;
  id: number;
  isVerified: boolean;
  avatar: string;
}

export type OrderedBestSeller = BestSeller & {
  sum: number;
}

interface BS {
  bestsellers: BestSeller[];
  nfts: NFT[];
}

const BestSellers = ({ bestsellers, nfts }: BS) => {
  const [bestSellersOrdered, setBestSellersOrdered] = useState<OrderedBestSeller[]>([]);

  const getSum = (id: number): number => nfts.reduce((acc, curr) => {
    if (curr.sellerId === id) {
      acc += +curr.price;
    }
    return acc;
  }, 0);

  useEffect(() => {
    setBestSellersOrdered(bestsellers
      .map(seller => (
          {
            ...seller,
            sum: getSum(seller.id),
          }
        )
      )
      .sort((a: OrderedBestSeller, b: OrderedBestSeller) => b.sum - a.sum));
  }, []);

  return (
    <StyledBestSellers>
      <div className="title">Best Sellers 🎨</div>
      <div className="sub-title">Best sellers fo this week&apos;s NFTs</div>
      <div className="sellers-container">
        {
          bestSellersOrdered.map((item, idx) =>
            <Link
              key={item.id}
              href={`/seller/${item.id}`}
              passHref
            >
              <a className="seller-link">
                <div
                  key={item.id}
                  className="seller-item"
                >
                  <div className="index">{idx < 10 ? `0${(idx+1)}` : idx+1}</div>
                  <SellerBadge
                    seller={item}
                    idx={idx}
                    displayTotal={true}
                  />
                </div>
              </a>
            </Link>
          )
        }
      </div>
    </StyledBestSellers>
  )
}

export default BestSellers;
