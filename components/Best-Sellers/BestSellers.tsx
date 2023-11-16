import React from 'react';
import BestSellerCard  from './BestSellerCard';
import Data from '../../data.json'

export const BestSellers:React.FC = () => (
  <section className="p-8">
    <header>
      <h2 id="best-sellers-title" className="text-4xl font-bold text-gray-800">Best Sellers 🎨</h2>
      <p className="text-gray-500 mt-2">Check out the top seller of this week's NFTs.</p>
    </header>
    <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {Data.bestSellers.map((seller, index) => {
        return(
          <li key={seller.id}>
          <BestSellerCard
            id={seller.id}
            number={String(index + 1).padStart(2, '0')}
            avatar={seller.avatar}
            name={seller.name}
          />
        </li>
        )
      } )}
    </ul>
  </section>
);
