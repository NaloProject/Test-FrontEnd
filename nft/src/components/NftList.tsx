import { Nft } from '@prisma/client';
import { twMerge } from 'tailwind-merge';
import NftCard from './NftCard';

interface Props {
  nfts: Nft[];
  className?: string;
}

export default function NftList({ nfts, className }: Props) {
  return (
    <div
      className={twMerge(
        'grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
        className
      )}
    >
      {nfts.map((nft) => (
        <NftCard key={nft.id} nft={nft} />
      ))}
    </div>
  );
}
