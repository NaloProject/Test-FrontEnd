import React from 'react';
import { FaShopify } from 'react-icons/fa6';
import Title from '@/components/Title';
import { getBestSeller } from '../../lib/mongo/bestSeller';
import NftSeller from '@/components/NftSeller';

export default async function NftBestSeller() {
  const bestSeller = await getBestSeller();

  return (
    <div>
      <Title
        title='Best Sellers'
        icon={<FaShopify />}
        description="Best Seller of this week's NTFs"
      />
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8'>
        {bestSeller?.map((x, i) => (
          <NftSeller
            id={x.id}
            key={x.id}
            name={x.name}
            avatar={x?.avatar || ''}
            eth={x?.eth || undefined}
            rank={(i + 1).toString().padStart(2, '0')}
          />
        ))}
      </div>
    </div>
  );
}
