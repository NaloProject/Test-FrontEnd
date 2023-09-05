'use client';

import { useRouter } from 'next/navigation';
import { FaFire, FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import Title from '@/components/Title';
import NftCard from '@/components/NftCard';
import { Nft } from '@prisma/client';

interface LiveAuctionProps {
  page: number;
  limit: number;
  nfts: Nft[];
  count: number;
}

const style = {
  wrapper: `my-10 mt-14`,
  liveAuction: `mb-8 flex flex-row items-center justify-between`,
  paginateWrapper: `flex flex-row justify-end gap-1`,
  btnPagination: `rounded-full w-6 h-6 bg-neutral-100 flex justify-center items-center`,
  chevron: `text-neutral-400 text-[8px]`,
  wrapperCarousel: `m-max-w-[1400px] w-full m-auto relative`,
  carousel: `w-full bg-center bg-cover duration-500 overflow-hidden`,
  nfts: `flex flex-row gap-3`,
};

export default function LiveAuctions({
  page,
  limit,
  nfts,
  count,
}: LiveAuctionProps) {
  const router = useRouter();

  function prevPagination() {
    router.push(`/?page=${page - limit}&limit=${limit}`);
  }

  function nextPagination() {
    router.push(`/?page=${page + limit}&limit=${limit}`);
  }

  return (
    <div className={style.wrapper}>
      <div className={style.liveAuction}>
        <Title
          title='Live Auctions'
          description='Enjoy! The latest hot auctions'
          icon={<FaFire className='text-red-700' />}
        />
        <div className={style.paginateWrapper}>
          <button
            className={style.btnPagination}
            onClick={prevPagination}
            disabled={page - limit < 0}
          >
            <FaChevronLeft className={style.chevron} />
          </button>
          <button
            className={style.btnPagination}
            onClick={nextPagination}
            disabled={page + limit > count}
          >
            <FaChevronRight className={style.chevron} />
          </button>
        </div>
      </div>

      <div className={style.wrapperCarousel}>
        <div className={style.carousel}>
          <div className={style.nfts}>
            {nfts?.map((nft) => (
              <NftCard key={nft.id} nft={nft} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
