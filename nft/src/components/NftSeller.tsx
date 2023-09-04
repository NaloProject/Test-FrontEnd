import Link from 'next/link';
import { FaCircleCheck } from 'react-icons/fa6';
import { twMerge } from 'tailwind-merge';

interface NftSellerProps {
  id: number;
  rank?: string;
  avatar: string;
  name: string;
  eth?: number;
  xs?: boolean;
  className?: string;
}

const style = {
  wrapper: `flex flex-row items-center gap-3`,
  rank: `text-neutral-500 text-xs`,
  imageWrapper: `relative`,
  imageProfile: `w-8 h-8 rounded-full object-cover`,
  icon: `bottom-0 left-6 absolute  w-3 h-3 text-blue-500 border-2 border-white rounded-full`,
  sellerNameWrapper: `flex flex-col items-start`,
  sellerName: `text-xs`,
  eht: `text-neutral-500 text-xs`,
};

export default function NftSeller({
  id,
  rank,
  avatar,
  name,
  eth,
  xs,
  className,
}: NftSellerProps) {
  return (
    <>
      <Link href={`/seller/${id}`}>
        <div className={twMerge(style.wrapper, className)}>
          {rank && <div className={style.rank}>{rank}</div>}

          <div className={style.imageWrapper}>
            <img
              className={twMerge(style.imageProfile, xs && 'w-6 h-6')}
              src={avatar || '/assets/images/avatar.png'}
              alt='profile'
            />
            <FaCircleCheck
              className={twMerge(style.icon, xs && 'left-4 bottom-[-2px]')}
            />
          </div>
          <div className={style.sellerNameWrapper}>
            <h2 className={twMerge(style.sellerName, xs && 'text-[10px]')}>
              {name}
            </h2>
            {eth && (
              <span className={twMerge(style.eht, xs && 'text-[10px]')}>
                {eth} ETH
              </span>
            )}
          </div>
        </div>
      </Link>
    </>
  );
}
