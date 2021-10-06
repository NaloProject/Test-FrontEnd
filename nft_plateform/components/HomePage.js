import React from "react";
import BestSellers from './BestSellers'
import LiveAuctions from './LiveAuctions'
import data from '../../data.json'


const HomePage = ()=>{
    const sellers = data.bestSellers;
    return (
        <div>
            <BestSellers sellers={sellers}/>
            <LiveAuctions data={data}/>
        </div>
    );
}

export default HomePage;