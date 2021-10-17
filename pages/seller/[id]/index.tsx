import type { NextPage } from 'next';
import type { NFT } from '../../../components/nfts/NFTs';
import StyledIndex from "./StyledIndex";
import Data from "../../../assets/data/data.json";
import HomeLink from "../../../components/common/homeLink/HomeLink";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import type { NFT as NFTType } from "../../../components/nfts/NFTs";
import type { BestSeller as BS } from "../../../components/bestsellers/BestSellers";
import SellerInfos from "../../../components/common/SellerInfos";
import Card from "../../../components/card/Card";

const Seller: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const {nfts: nftsData, bestSellers} = Data;
  const [NFTsBySeller, setNFTsBySeller] = useState<NFTType[]>();
  const [seller, setSeller] = useState<BS>();

  const getSeller = (id: number) => bestSellers.filter(seller => +seller.id === +id)[0];
  const getNFTsBySeller = (id: number, nfts: NFT[]) => nfts.filter(nft => +nft.sellerId === +id);

  useEffect(() => {
    setSeller(getSeller(+id!));
    setNFTsBySeller(getNFTsBySeller(+id!, nftsData));
  }, []);

  return (
    <StyledIndex>
      <HomeLink />
      <>
        {
          seller && (
            <SellerInfos seller={seller}/>
          )
        }
      </>
      <div className="nft-container">
        {
          NFTsBySeller && (
            <>
              {
                NFTsBySeller.map(nft => {
                  return (
                    <Card
                      key={`${nft.name}-${nft.id}`}
                      nft={nft}
                      seller={seller}
                    />
                  )
                })
              }
            </>
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

export default Seller;


