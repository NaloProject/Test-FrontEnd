import Image from 'next/image'
import {CheckCircleIcon} from '@heroicons/react/solid'

const Seller = (props) => {
    const index = props.index || null;
    const seller = props.seller;
    const size = props.size || 100;
    return (
        <div className="card lg:card-side bordered text-center p-1">
            <div className="font-bold">{index && index < 10 ? "0"+index : index}</div>
            <figure className="px-25 pt-25">
                <div className="avatar indicator">
                    <Image src={"/avatars/"+seller.avatar} width={size} height={size} className="mb-8 rounded-full w-24 h-24 ring"/>
                    {seller.isVerified && <CheckCircleIcon className="m-4 indicator-item indicator-bottom h-8 w-8 text-blue-500"/>} 
                </div>
            </figure>
            <div className="cad-body">
                <p className="card-title m-2">{seller.name}</p> 
                {!seller.isVerified && <p className="m-4 text-yellow-500"> not verified</p>}
            </div>
        </div>
    )
}

export default Seller;