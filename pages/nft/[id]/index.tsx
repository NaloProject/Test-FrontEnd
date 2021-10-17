import type { NextPage } from 'next';
import type { NFT as NFTType } from "../../../components/nfts/NFTs";
import type { BestSeller as BS } from "../../../components/bestsellers/BestSellers";
import Card from "../../../components/card/Card";
import Data from "../../../assets/data/data.json";
import { useRouter } from "next/router";
import {useState, useEffect } from "react";
import SellerInfos from "../../../components/common/SellerInfos";
import StyledIndex from "./StyledIndex";
import HomeLink from "../../../components/common/homeLink/HomeLink";


const NFT: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { nfts, bestSellers } = Data;

  const [nft, setNFT] = useState<NFTType>();
  const [seller, setSeller] = useState<BS>();

  useEffect(() => {
    const nft = getNFT(id);
    setNFT(nft);
    setSeller(getSeller(nft.sellerId));
  }, []);

  const getSeller = (id: number) => bestSellers.filter(seller => seller.id === id)[0];
  const getNFT = (id: string | string[] | undefined): NFTType => nfts.filter(nft => nft.id === id)[0];

  return (
    <StyledIndex>
      <HomeLink />
      {
        nft && (
          <Card
            key={id}
            nft={nft}
            seller={getSeller(nft.sellerId)}
          />
        )
      }
      <div className="seller-infos">
        {
          seller && (
            <SellerInfos seller={seller}/>
          )
        }
      </div>
    </StyledIndex>
  )
}

// https://stackoverflow.com/a/65859903/5671836
export async function getServerSideProps(context: any) {
  return {
    props: {},
  };
}

export default NFT;
