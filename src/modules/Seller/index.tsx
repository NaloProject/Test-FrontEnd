import { useNavigate, useParams } from "react-router-dom"
import { Page } from "../../components/layout/Page"
import { Back } from "../../components/navigation/Back"
import { NFTCard } from "../NFT/components/NFTCard"
import { useNFTsBySeller } from "../NFT/lib"
import { useSeller } from "./lib"

export default function Seller() {
  const { id } = useParams()
  const sellerId = parseInt(id ?? "", 10)
  const seller = useSeller(sellerId)
  const ownedNFTs = useNFTsBySeller(seller?.id)
  const navigate = useNavigate()

  if (!seller) {
    navigate("/")

    return null
  }

  return (
    <Page>
      <Back to="/">Home</Back>

      <section>
        <div>
          <img src={seller.avatar} />
          <br />
          <span>{seller.name}</span>
          <br />
          {seller.isVerified && <span>verified</span>}
        </div>

        {ownedNFTs.length > 0 && (
          <div>
            <h2>NFTs to sell</h2>
            <div>
              {ownedNFTs.map((nft) => (
                <NFTCard key={nft.id} nft={nft} />
              ))}
            </div>
          </div>
        )}
      </section>
    </Page>
  )
}
