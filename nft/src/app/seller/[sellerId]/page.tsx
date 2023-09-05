import { Suspense } from 'react';
import NftList from '@/components/NftList';
import { getSeller } from '../../../../lib/mongo/bestSeller';
import SellerDetail from '@/components/SellerDetail';

interface Props {
  params: {
    sellerId: string;
  };
}
export default async function Seller({ params }: Props) {
  const sellerId = params.sellerId;
  const seller = await getSeller(Number(sellerId));

  return (
    <div className='flex flex-col gap-8 divide-y'>
      <Suspense fallback={<p>Loading...</p>}>
        {seller && (
          <>
            <SellerDetail seller={seller!} />
            <div className='mt-8 pt-8'>
              <NftList nfts={seller.nfts} />
            </div>
          </>
        )}
      </Suspense>
    </div>
  );
}
