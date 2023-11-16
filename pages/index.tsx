import Link from 'next/link'
import Layout from '../components/Layout'
import Data from '../data.json'
import { BestSellers } from '../components/Best-Sellers/BestSellers';
import { LiveAuctionsSection } from '../components/Live-Auctions/LiveAuctions';


const IndexPage = () => (


  <Layout title="Nalo - Jean-Marc">
    <BestSellers/>
    <LiveAuctionsSection/>
  </Layout>
)

export default IndexPage





