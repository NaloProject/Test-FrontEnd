import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import data from "../../data.json";
import { NftsDetailsPageProps } from "../../interfaces/LiveAuctions";

const NftsDetailsPage: React.FC<NftsDetailsPageProps> = ({
  sellerData,
  nftsData,
}) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl text-center">{nftsData.name}</h1>
      <img
        src={nftsData.image}
        alt={nftsData.name}
        className="mt-4 rounded-full h-36 w-36"
      />
      <p className="mt-6 font-bold text-slate-800">{nftsData.price} ETH</p>
      <span className="mt-2 rounded-xl bg-white text-sm text-gray-600">
        {nftsData.timeLeft} left 🔥
      </span>
      <span className="mt-2 rounded bg-green-400 text-xs px-2 py-1 text-white">
        {nftsData.forSale} for sale
      </span>

      <div className="mt-8 text-center flex flex-col items-center">
        <p>Seller</p>
        <img
          src={sellerData.avatar}
          alt={sellerData.name}
          className="rounded-full h-24 w-24 mx-auto"
        />
        <p>{sellerData.name}</p>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = data.nfts.map((nft) => ({ params: { id: nft.id.toString() } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const nftsData = data.nfts.find((nft) => nft.id.toString() === params?.id);
  const sellerData = data.bestSellers.find(
    (seller) => seller.id === nftsData.sellerId
  );
  if (!sellerData) {
    return { notFound: true };
  }
  return { props: { nftsData, sellerData } };
};

export default NftsDetailsPage;
