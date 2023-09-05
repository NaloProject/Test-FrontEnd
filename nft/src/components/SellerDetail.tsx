import React from 'react';
import { BestSeller } from '@prisma/client';
import ProfileImage from './ProfileImage';
import { DEFAULT_AVATAR } from '../../constants';

interface Props {
  seller: BestSeller;
}

export default function SellerDetail({ seller }: Props) {
  return (
    <div className='flex flex-col md:flex-row gap-8'>
      <ProfileImage imageUrl={seller.avatar || DEFAULT_AVATAR} />

      <div className='flex flex-col items-start'>
        <h2 className='text-lg'>{seller.name}</h2>
        {seller.eth && (
          <span className='text-neutral-500 text-lg'>{seller.eth} ETH</span>
        )}
      </div>
    </div>
  );
}
