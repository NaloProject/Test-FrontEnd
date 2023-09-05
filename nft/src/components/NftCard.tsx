import React from 'react';
import { BestSeller, Nft } from '@prisma/client';
import { FaRegHeart } from 'react-icons/fa6';
import Link from 'next/link';
import Title from '@/components/Title';
import NftSeller from './NftSeller';
import { twMerge } from 'tailwind-merge';

interface NftCardProps {
  className?: string;
  nft: Nft & { seller: BestSeller };
}

const style = {
  wrapper: `w-48 rounded-xl border border-neutral-100`,
  imageNft: `w-full h-32 object-cover overflow-hidden rounded-xl p-2`,
  wrapperDescription: `flex flex-row justify-between p-2`,
  nft: `flex flex-col items-start w-1/2 whitespace-nowrap text-ellipsis overflow-hidden`,
  nftName: `text-xs `,
  nftEdition: `text-[10px] text-neutral-500`,
  nftSale: `text-xs text-green-600 items-end`,
  wrapperSeller: `flex flex-col divide-y gap-2`,
  nftPrice: `px-2 py-2 flex flex-row justify-between items-center`,
  nftLike: `flex flex-row gap-1 items-center text-neutral-700 text-xs`,
};

export default function NftCard({ className, nft }: NftCardProps) {
  return (
    <div className={twMerge(style.wrapper, className)}>
      <Link href={`/nfts/${nft.id}`}>
        <img
          className={style.imageNft}
          src={nft.image || '/assets/images/avatar.png'}
          alt='nft image'
        />
      </Link>

      <div className={style.wrapperDescription}>
        <div className={style.nft}>
          <h1 className={style.nftName}>{nft.name}</h1>
          {nft.totalMinted && (
            <h4 className={style.nftEdition}>
              {nft.totalMinted} Editions Minted
            </h4>
          )}
        </div>
        {nft.forSale && (
          <span className={style.nftSale}>{nft.forSale} for sale</span>
        )}
      </div>
      <div className={style.wrapperSeller}>
        {nft.seller && (
          <NftSeller
            id={nft.seller.id}
            name={nft.seller?.name}
            avatar={nft.seller?.avatar || ''}
            xs={true}
            className='px-2'
          />
        )}
        <div className={style.nftPrice}>
          <Title title={nft.price} description='Starting Bid' xs={true} />
          <div className={style.nftLike}>
            <span>{nft.like}</span>
            <FaRegHeart />
          </div>
        </div>
      </div>
    </div>
  );
}
