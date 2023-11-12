import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import data from "../../data.json";
import { VerifiedIcon } from "../../components/Ui/VerifiedIcon";
import { BestSellerDetailsPageProps} from "../../interfaces/BestSellers";

const BestSellerDetailsPage: React.FC<BestSellerDetailsPageProps> = ({bestSellerData,nfts,}) => (
  <div className="flex flex-col items-center justify-center h-screen">
    <h1 className="text-5xl">{bestSellerData.name}</h1>
    <div className="relative mt-4">
      <img
        src={bestSellerData.avatar}
        alt={bestSellerData.name}
        className="rounded-full h-32 w-32"
      />
      <VerifiedIcon />
    </div>
    
    <ul  className="mt-8 text-center flex flex-col items-center">
    {nfts.length > 0 ?  <p>NFTS LIST</p> :<p>NO NFTS</p> }
      {nfts && nfts.map(nft => (
        <li data-testid={`nft-${nft.id}`} key={nft.id} className="mt-4">
          <img src={nft.image} alt={nft.name} className="rounded-full h-24 w-24 mx-auto" />
          <p>{nft.name}</p>
          <p>Price:{nft.price}</p>
          <p>Time left:{nft.timeLeft}</p>
        </li>
      ))}
    </ul>
  </div>
);

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = data.bestSellers.map((seller) => ({
    params: { id: seller.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const bestSellerData = data.bestSellers.find(
    (seller) => seller.id.toString() === params?.id
  );

  if (!bestSellerData) {
    return {
      notFound: true,
    };
  }
  const nfts = data.nfts.filter((nft) => nft.sellerId === bestSellerData.id);

  return { props: { bestSellerData, nfts } };
};

export default BestSellerDetailsPage;
