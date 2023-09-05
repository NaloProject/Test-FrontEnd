import React from 'react';
import { twMerge } from 'tailwind-merge';
import { DEFAULT_AVATAR } from '../../constants';

const style = {
  wrapper: `bg-[#303339] rounded-full border-[#151c22] border w-[200px] h-[200px] overflow-hidden flex justify-center items-center z-10`,
  image: `object-cover overflow-hidden rounded-full w-[195px] h-[195px]`,
};

interface Props {
  imageUrl: string;
  className?: string;
}

export default function ProfileImage({ imageUrl, className }: Props) {
  return (
    <div className={twMerge(style.wrapper, className)}>
      <img src={imageUrl || DEFAULT_AVATAR} className={style.image} />
    </div>
  );
}
