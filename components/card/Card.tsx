import StyledCard from "./StyledCard";
import type { NFT } from "../nfts/NFTs";
import type { OrderedBestSeller } from "../bestsellers/BestSellers";
import Image from 'next/image';
import SellerBadge from "../common/sellerBadge/SellerBadge";

interface Card {
  nft: NFT;
  seller: OrderedBestSeller;
};

const Card = ({ nft, seller }: Card) => {
  return (
    <StyledCard>
      <div className="image-wrapper">
        <Image
          width={150}
          height={120}
          src={`/images/nfts/${nft.image}`}
          alt={nft.name}
        />
        {
          nft.timeLeft.includes('hours') && (
            <div className="time-remaining">
              {nft.timeLeft} left <span>🔥</span>
            </div>
          )
        }
      </div>
      <div className="header">
        <div className="nft-name">
          {nft.name}
        </div>
        <div className="nft-forsale">
          {nft.forSale} for sale
        </div>
      </div>
      <div className="minted">
        {nft.totalMinted} Editions minted
      </div>
      <div className="seller">
        <SellerBadge
          seller={seller}
          displayTotal={false}
        />
      </div>
      <div className="delimiter" />
      <div className="footer">
        <div className="bid">
          <div className="price">
            {nft.price} ETH
          </div>
          <div className="label">
            Starting Bid
          </div>
        </div>
        <div className="likes">
          <div className="like-number">
            {nft.like}
          </div>
          <div className="heart">
            <Image
              height={12}
              width={12}
              src={`/heart-empty-black.svg`}
            />
          </div>
        </div>
      </div>
    </StyledCard>
  )
}

export default Card;
