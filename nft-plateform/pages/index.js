import Link from 'next/link';
import NftCard from '../components/Cards/nft'
import 'bootstrap/dist/css/bootstrap.min.css';
import data from "../../data.json"

function Home() {
  console.log(data.ntfs);
  const nftLinks =  data.nfts.map(nft => {
      return (
        <div className="col-sm-4">
          <NftCard nft={nft}/>
        </div>
      )
  })
  return (
    <div className="container">
      <div className="row">
        <Link href="/">
          <a>Home</a>
        </Link>
        <div className="row">
          {nftLinks}
        </div>
      </div>

        <Link href="/seller/1">
          <a>Seller</a>
        </Link>

    </div>

  )
}

export default Home
