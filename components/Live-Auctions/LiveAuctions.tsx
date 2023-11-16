import React from 'react';
import { LiveAuctionItem } from "./LiveAuctionItem";
import data from '../../data.json';


export const LiveAuctionsSection : React.FC = () => {
  return (
    <section className="px-8 py-12">
      <h2 id="live-auctions-heading" className="text-4xl font-bold text-gray-800">Live Auctions 🔥</h2>
      <p className="text-gray-500 mt-2">Enjoy the latest hot auctions</p>
      <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.nfts.map((item) => (
          <li key={item.id}>
            <LiveAuctionItem {...item} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LiveAuctionsSection;
