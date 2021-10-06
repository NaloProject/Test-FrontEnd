import { useRouter } from "next/router"
import { useState, useEffect } from "react";
import Seller from "../../components/Seller";
import Auction from "../../components/Auction";
import data from '../../../data.json'


const loadSellerProfile = (sid) => {
    return new Promise((resolve, reject)=>{
        let seller = data.bestSellers.find(e => e.id == sid);
        const nfts = data.ntfs.filter(e => e.sellerId == sid);
        if (seller){
            seller = {...seller, nfts: nfts}
            resolve(seller)
        }else{
            reject("Not found")
        }
        
    });
}
const SellerDetails = () => {
    const router = useRouter()
    const {sid} = router.query;
    const [seller, setSeller] = useState(null);
    useEffect(()=>{
        if (!sid) {
            return false;
        }
        loadSellerProfile(sid).then(
            seller => {setSeller(seller);}
        )
    },[sid])
    return (
        <div>{ seller && 
            <div className="p-10">
                <p className="font-bold text-xl">{seller.name}</p>
                <Seller seller={seller}/>
                <p className="font-bold text-xl m-2">NFTs</p>
                { seller.nfts.map(nft => {
                    return (   
                        <div className="inline-block m-5 p-2 relative" key={nft.id}>     
                            <Auction auction={nft}></Auction>
                        </div>
                        )
                    }) 
                }
            </div>

            }
        </div>
    )
}

export default SellerDetails;