import Link from "next/link";
import { HeartIcon } from "../Ui/HeartIcon";
import { urls } from "../../config/urls";

export const LiveAuctionItem = ({
    id,
    name,
    totalMinted,
    price,
    like,
    forSale,
    timeLeft,
    sellerId,
    image,
  }) => {
    const auctionDetailUrl = `${urls.liveAuctions}/${id}`;
  
    return (
      <Link href={auctionDetailUrl} data-testid={`link-${id}`}>
        <div className="border border-gray-200 border-opacity-50  flex flex-col  bg-white p-4 rounded-lg transition ease-in-out duration-400 hover:shadow-lg cursor-pointer">
          <div className="relative">
            <img
              src={image}
              alt={name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <span className="absolute top-[70%] left-[10%] p-[10px] bg-white rounded-xl  text-sm text-gray-600">
              {timeLeft} left 🔥
            </span>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-900 font-semibold w-6/12 overflow-ellipsis overflow-hidden whitespace-nowrap">
              {name}
            </p>
            <span className=" flex justify-end text-xs text-green-400 w-6/12 px-2 py-1 rounded">
              {forSale} for sale
            </span>
          </div>
          <p className="text-gray-500 text-xs">{totalMinted} Editions Minted</p>
          <div className="flex">
            <div className="basis-1/2">
              <p className="text-slate-800 font-bold mt-6">{price} ETH</p>
              <p className="text-gray-500 text-xs ">Starting Bid</p>
            </div>
            <div className="flex basis-1/2 items-center justify-end w-full mt-4">
              <div className="flex items-center">
                <span className="text-gray-500 mr-2">{like}</span>
                <HeartIcon className="text-red-500" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  };