import React from 'react';
import Link from 'next/link';
import { VerifiedIcon } from '../Ui/VerifiedIcon';
import { urls } from '../../config/urls';

const BestSellerCard = ({id, number, avatar, name }) => {
  const cardDetailPageUrl = `${urls.bestSellers}/${id}`;

  return (
    <Link href={cardDetailPageUrl} data-testid={`link-${id}`}>
      <div className="flex items-center space-x-4 bg-white p-4 rounded-lg transition ease-in-out duration-400 hover:shadow-md cursor-pointer">
          <span className="text-gray-400 text-xs">{number}</span>
          <div className="relative">
            <img src={avatar} alt={name} role="img" aria-label={`Avatar of ${name}`} className="h-10 w-10 rounded-full" />
            <VerifiedIcon />
          </div>
          <p className="flex-1 font-semibold">{name}</p>
        </div>
    </Link>
  );
};

export default BestSellerCard;
