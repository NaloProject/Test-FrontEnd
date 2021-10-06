import React from "react";
import { useState, useEffect } from "react";
import Auction from "./Auction";
import Seller from "./Seller";
import Link from 'next/link'

const LiveAuctions = (props) => {
    const [liveAuctions, setLiveAuctions] = useState([]);
    useEffect(()=>{
        const sellers = props.data.bestSellers;
        let seller;
        const ntfs = props.data.ntfs.map(
            ntf => {
                seller = sellers.find(e => e.id == ntf.sellerId);
                return {...ntf,
                    seller: seller,
                }
        })
        setLiveAuctions(ntfs);
    }, []);
    return (
        <div className="p-10">
            <p className="text-xl font-bold">Live Auctions</p>
            <p>Enjoy! The latest hot auctions</p>
            {
            liveAuctions.map(auction => {
             return (
                <div className="inline-block m-5 p-2 relative" key={auction.id}>
                    <Link href={"/nfts/" + auction.id} >
                        <a>
                        <Auction auction={auction}></Auction>
                        </a>
                    </Link>
                </div>
                );
                }
             )}
        </div>
    )
}

export default LiveAuctions;