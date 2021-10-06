import Image from 'next/image'
import { HeartIcon } from '@heroicons/react/outline'
import {FireIcon} from '@heroicons/react/solid'


const Auction = (props) => {
    const auction = props.auction
    return (
        <div className="card shadow-lg bordered indicator relative" >
        <figure>
            <Image src={"/nfts/" + auction.image} width={250} height={250}/>
        </figure>
        <div className="card-body">
            <div className="absolute top-48 badge p-4">
                {auction.timeLeft} left {auction.isHot==true && <FireIcon className="h-6 w-6 text-red-500 "/>} 
            </div>
            <p className="absolute top-56 right-2 text-green-600 badge p-2">{auction.forSale} for sale</p>
            <p className="w-40 card-title truncate">{auction.name}</p>
            
            <p className="text-gray-500">{auction.totalMinted} editions minted</p>
            
            <div className="absolute bottom-8 right-2"><p className="inline-block">{auction.like}</p> <HeartIcon className="h-5 w-5 text-red-500 inline-block"/> </div>
            {auction.seller &&
                <div className="avatar m-2">
                    <Image src={"/avatars/" + auction.seller.avatar} width={35} height={35} className="mb-8 rounded-full w-10 h-10 ring ring-primary ring-offset-base-100 ring-offset-2"/>
                    <p className="font-bold text-sm">{auction.seller.name}</p>
                </div>
            }
            <p className="font-bold">{auction.price} ETH</p>
            <p className="text-sm">Starting bid</p>
        </div>
        </div>
    )
}

export default Auction;