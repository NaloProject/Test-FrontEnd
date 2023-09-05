import { Nft, BestSeller } from '@prisma/client';
import Link from 'next/link';
import { FaRegHeart } from 'react-icons/fa6';
import { DEFAULT_AVATAR } from '../../constants';
import ProfileImage from './ProfileImage';

interface Props {
  nft: Nft & { seller: BestSeller };
}

const style = {
  relative: `relative`,
  imageNft: `w-full h-72 object-cover rounded-2xl`,
  wrapper: `flex flex-row w-full justify-end mt-24 lg:mt-0`,
  descNft: `w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4 p-4`,
  nameContainer: `flex flex-col items-start`,
  nftName: `text-lg text-neutral-700 font-bold`,
  nftEdition: `text-md text-neutral-500`,
  sales: `text-lg text-neutral-700 font-bold items-center`,
  priceContent: `flex flex-col items-start text-neutral-700`,
  bold: `font-bold`,
  neutral: `text-neutral-500`,
  like: `flex flex-row gap-1 items-center text-neutral-700 font-bold`,
};

export default function NftDetail({ nft }: Props) {
  return (
    <div>
      <div className={style.relative}>
        <img src={nft.image || DEFAULT_AVATAR} className={style.imageNft} />
        <Link href={`/seller/${nft.sellerId}`}>
          <ProfileImage
            imageUrl={nft.seller.avatar || DEFAULT_AVATAR}
            className='absolute bottom-[-100px]'
          />
        </Link>
      </div>
      <div className={style.wrapper}>
        <div className={style.descNft}>
          <div className={style.nameContainer}>
            <h1 className={style.nftName}>{nft.name}</h1>
            {nft.totalMinted && (
              <h4 className={style.nftEdition}>
                {nft.totalMinted} Editions Minted
              </h4>
            )}
          </div>
          {nft.forSale && (
            <span className={style.sales}>{nft.forSale} for sale</span>
          )}
          <div className={style.priceContent}>
            <span className={style.bold}>{nft.price + ' ETH'}</span>
            <span className={style.neutral}>Starting Bid</span>
          </div>
          <div className={style.like}>
            <span>{nft.like}</span>
            <FaRegHeart />
          </div>
        </div>
      </div>
    </div>
  );
}
