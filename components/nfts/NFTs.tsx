import StyledNFTs from './StyledNFTs';
import Card from '../card/Card';
import { useEffect, useState } from "react";
import type { BestSeller, OrderedBestSeller } from "../bestsellers/BestSellers";
import Link from 'next/link';

export interface NFT {
 id: string;
 name: string;
 totalMinted: number;
 price: string;
 like: number;
 forSale: number;
 timeLeft: string;
 isHot: boolean;
 sellerId: number;
 image: string;
}

interface NFTs {
  nfts: NFT[];
  bestsellers: BestSeller[];
}

const NFTs = ({ nfts, bestsellers }: NFTs) => {
  const [start, setStart] = useState<number>(0);
  const [leftActive, setLeftActive] = useState<boolean>(false);
  const [rightActive, setRightActive] = useState<boolean>(false);
  const paginationSize = 4;

  const goLeft = () => {
    const startIndex = start-paginationSize;
    setRightActive(true);
    (startIndex === 0) && setLeftActive(false);
    (startIndex >= 0) && setStart(startIndex);
  }

  const goRight = () => {
    const startIndex = start+paginationSize;
    setLeftActive(true);
    (startIndex+paginationSize >= nfts.length) && setRightActive(false);
    (startIndex < nfts.length) && setStart(startIndex);
  }

  const getSeller = (id: number) => bestsellers.filter(seller => seller.id === id)[0];

  useEffect(() => {
    const pages = Math.ceil(nfts.length / paginationSize);
    pages > 1 && setRightActive(true);
  }, []);

  return (
    <StyledNFTs>
      <div className="header">
        <div className="title">
          <span>Live Auctions</span> <span>🔥</span>
        </div>
        <div className="sub-title">
          Enjoy the latest hot auctions
        </div>
        <div className="nav">
          <div
            className={`left ${leftActive ? 'active' : 'inactive'}`}
            onClick={goLeft}
          >
            {"<"}
          </div>
          <div
            className={`right ${rightActive ? 'active' : 'inactive'}`}
            onClick={goRight}
          >
            {">"}
          </div>
        </div>
      </div>
      <div className="cards-container">
        {
          nfts.slice(start, start+paginationSize).map(nft => (
            <Link
              key={nft.id}
              href={`/nft/${nft.id}`}
              passHref
            >
              <a className="card-link">
                <Card
                  key={nft.id}
                  nft={nft}
                  seller={getSeller(nft.sellerId) as OrderedBestSeller}
                />
              </a>
            </Link>
            )
          )
        }
      </div>
    </StyledNFTs>
  )
}

export default NFTs;
