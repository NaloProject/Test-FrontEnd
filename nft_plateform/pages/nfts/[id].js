import { useRouter } from "next/router"
import { useState, useEffect } from "react";
import Seller from "../../components/Seller";
import Auction from "../../components/Auction";
import data from '../../../data.json'


const loadNft = (id) => {
    return new Promise((resolve, reject)=>{
        let nft = data.ntfs.find(e => e.id == id);
        if (nft){
            const seller = data.bestSellers.find(e => nft.sellerId == e.id);
            nft = {...nft, seller: seller}
            resolve(nft)
        }else{
            reject("Not found")
        }
        
    });
}
const nftDetails = () => {
    const router = useRouter()
    const {id} = router.query;
    const [nft, setNft] = useState(null);
    useEffect(()=>{
        if (!id) {
            return false;
        }
        loadNft(id).then(
            nft => {setNft(nft);}
        )},[id]);
    return (
        <div className="p-10">{ nft && 
            <div>
                <p className="font-bold text-xl">{nft.name}</p>
                <Auction auction={nft}/>
                <p className="font-bold text-xl m-2">Seller</p>
                <Seller seller={nft.seller}></Seller>
            </div>

            }
        </div>
    )
}

export default nftDetails;