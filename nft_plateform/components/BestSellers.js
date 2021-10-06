import React from "react";
import Seller from "./Seller";
import {useState, useEffect} from "react";
import Link from 'next/link'


const BestSellers = (props) => {
    const [sellers, setSellers] = useState([]);
    useEffect(()=>{
        setSellers( props.sellers);
    }, []);
    return (
        <div className="p-10">
            <p className="text-xl font-bold">Best Sellers</p>
            <p>Best sellers of this week's NFTs</p>
            {
            sellers.map((seller, i) => {
             return (
                 <div className="inline-block relative m-2 p-2" key={seller.id}>
                    <Link href={"/sellers/" + seller.id} >
                        <a>
                        <Seller seller={seller} index={i + 1}></Seller>
                        </a>
                    </Link>
                </div>
             );
                }
             )}
            
        </div>
    );
}
export default BestSellers;